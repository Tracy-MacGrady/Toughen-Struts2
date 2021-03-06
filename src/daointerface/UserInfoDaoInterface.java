package daointerface;


import orm.entity.UserinfoEntity;

import java.util.List;

/**
 * Created by Administrator on 2017/7/31 0031.
 */
public interface UserInfoDaoInterface {
    List<UserinfoEntity> findAll();

    UserinfoEntity findById(int id);

    UserinfoEntity findByUserName(String username);

    UserinfoEntity findByUserPhone(String userPhone);

    UserinfoEntity insertUserInfo(String userphone, String password);

    UserinfoEntity updateUserinfo(UserinfoEntity userinfoEntity);

}
