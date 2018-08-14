package dao;

import daointerface.AccountDaoInterface;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import orm.entity.AccountEntity;
import utils.StringUtil;

import java.util.*;

/**
 * Created by Administrator on 2018/8/14 0014.
 */
public class AccountDao extends BaseDao implements AccountDaoInterface {
    @Override
    public AccountEntity saveAccount(AccountEntity entity) {
        Session session = getSession();
        if (session == null || !session.isOpen()) return null;
        Transaction transaction = session.beginTransaction();
        try {
            session.save(entity);
            transaction.commit();
        } catch (Exception e) {
            e.printStackTrace();
            transaction.rollback();
        } finally {
            if (session != null) session.close();
            entity.setId(selectIdByNumber(entity.getAccountnumber()));
        }
        return entity.getId() == -1 ? null : entity;
    }

    @Override
    public boolean deleteAccount(AccountEntity entity) {
        return false;
    }

    @Override
    public AccountEntity updateAccount(AccountEntity entity) {
        return null;
    }

    @Override
    public List<AccountEntity> selectAllAccount(String userid) {
        List<AccountEntity> list = null;
        if (!StringUtil.isEmpty(userid)) {
            Session session = getSession();
            if (session != null && session.isOpen()) {
                Transaction transaction = session.beginTransaction();
                try {
                    String selectIdSQL = "from AccountEntity as a where a.userid=:myUserid";
                    Query<AccountEntity> query = session.createQuery(selectIdSQL);
                    query.setParameter("myUserid", userid);
                    list = query.list();
                    transaction.commit();
                } catch (Exception e) {
                    e.printStackTrace();
                    transaction.rollback();
                } finally {
                    if (session != null) session.close();
                }
            }
        }
        return list;
    }

    @Override
    public AccountEntity selectAccountByNumber(String title) {
        return null;
    }

    public int selectIdByNumber(String number) {
        int id = -1;
        if (!StringUtil.isEmpty(number)) {
            Session session = getSession();
            if (session != null && session.isOpen()) {
                Transaction transaction = session.beginTransaction();
                try {
                    String selectIdSQL = "select id from AccountEntity as a where a.accountnumber=:myNumber";
                    Query<Integer> query = session.createQuery(selectIdSQL);
                    query.setParameter("myNumber", number);
                    id = query.uniqueResult();
                    transaction.commit();
                } catch (Exception e) {
                    e.printStackTrace();
                    transaction.rollback();
                } finally {
                    if (session != null) session.close();
                }
            }
        }
        return id;
    }
}
