package service;

import dao.UserInfoDao;
import daointerface.UserInfoDaoInterface;
import orm.entity.UserinfoEntity;

import java.util.ArrayList;

/**
 * Created by Administrator on 2017/7/31 0031.
 */
public class UserinfoDaoService {
    private UserInfoDaoInterface dao;

    public UserinfoDaoService() {
        initDao();
    }

    private void initDao() {
        if (dao == null) dao = new UserInfoDao();
    }

    public ArrayList<UserinfoEntity> findAll() {
        return dao.findAll();
    }

    public UserinfoEntity findById(int id) {
        return dao.findById(id);
    }

    public UserinfoEntity findByUsername(String username) {
        return dao.findByUserName(username);
    }

    public UserinfoEntity findByUserPhone(String userphone) {
        return dao.findByUserPhone(userphone);
    }

    public UserinfoEntity insertUserinfo(String userphone, String password) {
        return dao.insertUserInfo(userphone, password);
    }

    public UserinfoEntity updateUserinfo(UserinfoEntity entity) {
        return dao.updateUserinfo(entity);
    }
}
