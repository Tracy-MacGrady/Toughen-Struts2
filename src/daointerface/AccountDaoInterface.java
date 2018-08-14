package daointerface;

import orm.entity.AccountEntity;

import java.util.List;

/**
 * Created by Administrator on 2018/8/13 0013.
 */
public interface AccountDaoInterface {
    AccountEntity saveAccount(AccountEntity entity);

    boolean deleteAccount(AccountEntity entity);

    AccountEntity updateAccount(AccountEntity entity);

    List<AccountEntity> selectAllAccount(String userid);

    AccountEntity selectAccountByNumber(String number);
}
