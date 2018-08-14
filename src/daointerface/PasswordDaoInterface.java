package daointerface;

import orm.entity.PasswordEntity;

import java.util.ArrayList;

/**
 * Created by Administrator on 2018/8/13 0013.
 */
public interface PasswordDaoInterface {
    PasswordEntity savePassword(PasswordEntity entity);

    boolean deletePassword(PasswordEntity entity);

    PasswordEntity updatePassword(PasswordEntity entity);

    ArrayList<PasswordEntity> selectAllPassword();

    PasswordEntity selectPasswordByTitle(String title);
}
