package service;

import dao.PasswordDao;
import daointerface.PasswordDaoInterface;
import orm.entity.PasswordEntity;

import java.util.ArrayList;

/**
 * Created by Administrator on 2018/8/14 0014.
 */
public class PasswordDaoService {
    private PasswordDaoInterface dao;

    public PasswordDaoService() {
        if (dao == null) dao = new PasswordDao();
    }

    public PasswordEntity savePassword(PasswordEntity entity) {
        return dao.savePassword(entity);
    }

    public boolean deletePassword(PasswordEntity entity) {
        return dao.deletePassword(entity);
    }

    public PasswordEntity updatePassword(PasswordEntity entity) {
        return dao.updatePassword(entity);
    }

    public ArrayList<PasswordEntity> selectAllPassword() {
        return dao.selectAllPassword();
    }

    public PasswordEntity selectPasswordByTitle(String title) {
        return dao.selectPasswordByTitle(title);
    }
}
