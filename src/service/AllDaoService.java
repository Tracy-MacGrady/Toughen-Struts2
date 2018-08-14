package service;

/**
 * Created by Administrator on 2017/7/31 0031.
 */
public class AllDaoService {
    private UserinfoDaoService userinfoDaoService;
    private PasswordDaoService passwordDaoService;

    public UserinfoDaoService getUserinfoDaoService() {
        if (userinfoDaoService == null) userinfoDaoService = new UserinfoDaoService();
        return userinfoDaoService;
    }

    public PasswordDaoService getPasswordDaoService() {
        if (passwordDaoService == null) passwordDaoService = new PasswordDaoService();
        return passwordDaoService;
    }
}
