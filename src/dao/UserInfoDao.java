package dao;

import daointerface.UserInfoDaoInterface;
import org.hibernate.HibernateException;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.hibernate.Session;
import orm.entity.UserinfoEntity;
import utils.MD5Utils;
import utils.StringUtil;

import java.util.*;

/**
 * Created by Administrator on 2017/7/31 0031.
 */
public class UserInfoDao extends BaseDao implements UserInfoDaoInterface {

    @Override
    public List<UserinfoEntity> findAll() {
        List<UserinfoEntity> list = null;
        Session session = getSession();
        String hql = "from UserinfoEntity";
        if (session == null || !session.isOpen()) return list;
        Transaction transaction=session.beginTransaction();
        try {
            Query<UserinfoEntity> query=session.createQuery(hql);
            list=query.list();
            transaction.commit();
        } catch (Exception e) {
            transaction.markRollbackOnly();
            e.printStackTrace();
        } finally {
            session.close();
        }
        return list;
    }

    @Override
    public UserinfoEntity findById(int id) {
        UserinfoEntity userinfoEntity = null;
        Session session = getSession();
        Transaction transaction = null;
        if (session == null || !session.isOpen()) return userinfoEntity;
        try {
            transaction = session.getTransaction();
            String hql = "from UserinfoEntity as u where u.id=:myid";
            Query<UserinfoEntity> query = session.createQuery(hql);
            query.setParameter("myid", id);
            userinfoEntity =query.uniqueResult();
            transaction.commit();
        } catch (HibernateException e) {
            if (transaction != null) transaction.rollback();
            e.printStackTrace();
        } finally {
            session.close();
            return userinfoEntity;
        }
    }

    @Override
    public UserinfoEntity findByUserName(String username) {
        UserinfoEntity userinfoEntity = null;
        Session session = getSession();
        Transaction transaction = null;
        if (session == null || !session.isOpen()) return userinfoEntity;
        try {
            if (session != null && username != null) {
                transaction = session.getTransaction();
                String hql = "from UserinfoEntity as u where u.username=:myusername";
                Query<UserinfoEntity> query = session.createQuery(hql);
                query.setParameter("myusername", username);
                userinfoEntity = query.uniqueResult();
                transaction.commit();
            }
        } catch (HibernateException e) {
            if (transaction != null) transaction.rollback();
            e.printStackTrace();
        } finally {
            if (session != null) session.close();
            return userinfoEntity;
        }
    }

    @Override
    public UserinfoEntity findByUserPhone(String userPhone) {
        UserinfoEntity userinfoEntity = null;
        Session session = getSession();
        Transaction transaction = null;
        if (session == null || !session.isOpen()) return userinfoEntity;
        try {
            if (userPhone != null) {
                transaction = session.getTransaction();
                String hql = "from UserinfoEntity as u where u.userphone=:myuserphone";
                Query<UserinfoEntity> query = session.createQuery(hql);
                query.setParameter("myuserphone", userPhone);
                userinfoEntity = query.uniqueResult();
                transaction.commit();
            }
        } catch (HibernateException e) {
            if (transaction != null) transaction.rollback();
            e.printStackTrace();
        } finally {
            session.close();
            return userinfoEntity;
        }
    }

    @Override
    public UserinfoEntity insertUserInfo(String userphone, String password) {
        UserinfoEntity userinfoEntity = new UserinfoEntity();
        Session session = getSession();
        if (session == null || !session.isOpen()) return null;
        Transaction transaction = session.beginTransaction();
        try {
            userinfoEntity.setUsername("未命名");
            userinfoEntity.setUserphone(userphone);
            userinfoEntity.setPassword(MD5Utils.MD5Encode(password));
            session.save(userinfoEntity);
            transaction.commit();
        } catch (Exception e) {
            e.printStackTrace();
            transaction.rollback();
        } finally {
            session.close();
            return findByUserPhone(userphone);
        }
    }

    @Override
    public UserinfoEntity updateUserinfo(UserinfoEntity entity) {
        String value = "update UserinfoEntity as u set";
        if (!StringUtil.isEmpty(entity.getPassword()))
            value += " u.password='" + MD5Utils.MD5Encode(entity.getPassword()) + "',";
        if (!StringUtil.isEmpty(entity.getUseraddress()))
            value += " u.useraddress='" + entity.getUseraddress() + "',";
        if (!StringUtil.isEmpty(entity.getUseremail()))
            value += " u.useremail='" + entity.getUseremail() + "',";
        if (!StringUtil.isEmpty(entity.getUsername()))
            value += " u.username='" + entity.getUsername() + "'";
        if (value.lastIndexOf(",") == value.length() - 1) {
            value = value.substring(0, value.length() - 1);
        }
        value += " where u.id=" + entity.getId();
        Session session = getSession();
        if (session == null || !session.isOpen()) return null;
        Transaction transaction = session.beginTransaction();
        try {
            Query query = session.createQuery(value);
            query.executeUpdate();
            transaction.commit();
        } catch (Exception e) {
            transaction.rollback();
            e.printStackTrace();
        } finally {
            session.close();
            return findById(entity.getId());
        }
    }
}
