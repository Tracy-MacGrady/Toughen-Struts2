package dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;


/**
 * Created by Administrator on 2017/6/22 0022.
 */
public class MySessionCreater {
    private static volatile MySessionCreater creater = new MySessionCreater();
    private SessionFactory sessionFactory;
    private ServiceRegistry serviceRegistry;

    private MySessionCreater() {
    }

    public static MySessionCreater getInstance() {
        return creater;
    }

    private void initSessionFactory() {
        Configuration configuration = new Configuration();
        configuration.configure();
        sessionFactory = configuration.buildSessionFactory();
    }

    public SessionFactory getSession() {
        if (sessionFactory == null) initSessionFactory();
        return sessionFactory;
    }
}
