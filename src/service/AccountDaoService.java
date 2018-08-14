package service;

import dao.AccountDao;
import daointerface.AccountDaoInterface;
import orm.entity.AccountEntity;

import java.util.List;

/**
 * Created by Administrator on 2018/8/14 0014.
 */
public class AccountDaoService {
    private AccountDaoInterface dao;

    public AccountDaoService() {
        if (dao == null) dao = new AccountDao();
    }

    public AccountEntity saveAccount(AccountEntity entity) {
        return dao.saveAccount(entity);
    }

    public boolean deleteAccount(AccountEntity entity) {
        return dao.deleteAccount(entity);
    }

    public AccountEntity updateAccount(AccountEntity entity) {
        return dao.updateAccount(entity);
    }

    public List<AccountEntity> selectAllAccount(String userid) {
        return dao.selectAllAccount(userid);
    }

    public AccountEntity selectAccountByNumber(String number) {
        return dao.selectAccountByNumber(number);
    }
}
