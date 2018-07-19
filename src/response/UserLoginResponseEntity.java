package response;

import orm.entity.UserinfoEntity;

/**
 * Created by Administrator on 2017/8/1 0001.
 */
public class UserLoginResponseEntity {
    private UserInfo userinfo;

    public UserLoginResponseEntity(UserinfoEntity entity) {
        this.userinfo = new UserInfo(entity);
    }

    public UserInfo getUserinfo() {
        return userinfo;
    }

    public class UserInfo {
        public UserInfo(UserinfoEntity entity) {
            this.id = entity.getId();
            this.username = entity.getUsername();
            this.userphone = entity.getUserphone();
            this.useremail = entity.getUseremail();
            this.useraddress = entity.getUseraddress();
        }

        private int id;
        private String username;
        private String userphone;
        private String useremail;
        private String useraddress;

        public int getId() {
            return id;
        }

        public String getUsername() {
            return username;
        }

        public String getUserphone() {
            return userphone;
        }

        public String getUseremail() {
            return useremail;
        }

        public String getUseraddress() {
            return useraddress;
        }
    }
}
