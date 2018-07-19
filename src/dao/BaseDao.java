package dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

/**
 * Created by Administrator on 2017/7/31 0031.
 */
public class BaseDao {
    private static SessionFactory sessionFactory = MySessionCreater.getInstance().getSession();

    public Session getSession() {
        return sessionFactory.openSession();
    }
}
