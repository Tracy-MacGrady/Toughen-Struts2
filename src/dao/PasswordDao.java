package dao;

import daointerface.PasswordDaoInterface;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import orm.entity.PasswordEntity;
import utils.StringUtil;

import java.util.ArrayList;

/**
 * Created by Administrator on 2018/8/14 0014.
 */
public class PasswordDao extends BaseDao implements PasswordDaoInterface {
    @Override
    public PasswordEntity savePassword(PasswordEntity entity) {
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
            entity.setId(selectIdByTitleAndValue(entity.getTitle(), entity.getValue()));
        }
        return entity.getId() == -1 ? null : entity;
    }

    @Override
    public boolean deletePassword(PasswordEntity entity) {
        return false;
    }

    @Override
    public PasswordEntity updatePassword(PasswordEntity entity) {
        return null;
    }

    @Override
    public ArrayList<PasswordEntity> selectAllPassword() {
        return null;
    }

    @Override
    public PasswordEntity selectPasswordByTitle(String title) {
        return null;
    }

    public int selectIdByTitleAndValue(String myTitle, String myValue) {
        int id = -1;
        if (!StringUtil.isEmpty(myTitle) && !StringUtil.isEmpty(myValue)) {
            Session session = getSession();
            if (session != null && session.isOpen()) {
                Transaction transaction = session.beginTransaction();
                try {
                    String selectIdSQL = "select id from PasswordEntity as p where p.title=:myTitle and p.value=:myValue";
                    Query<Integer> query = session.createQuery(selectIdSQL);
                    query.setParameter("myTitle", myTitle);
                    query.setParameter("myValue", myValue);
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
