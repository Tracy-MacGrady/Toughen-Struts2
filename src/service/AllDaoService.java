package service;

/**
 * Created by Administrator on 2017/7/31 0031.
 */
public class AllDaoService {
    private UserinfoDaoService userinfoDaoService;
    private AccountDaoService accountDaoService;

    public UserinfoDaoService getUserinfoDaoService() {
        if (userinfoDaoService == null) userinfoDaoService = new UserinfoDaoService();
        return userinfoDaoService;
    }

    public AccountDaoService getAccountDaoService() {
        if (accountDaoService == null) accountDaoService = new AccountDaoService();
        return accountDaoService;
    }
}
