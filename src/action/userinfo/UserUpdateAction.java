package action.userinfo;

import action.BaseAction;
import org.apache.struts2.ServletActionContext;
import orm.entity.UserinfoEntity;
import response.UserLoginResponseEntity;
import service.AllDaoService;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by Administrator on 2018/7/18 0018.
 */
public class UserUpdateAction extends BaseAction {
    private int id;
    private String userEmail, userAddress, userName, userPassword;

    public void setId(int id) {
        this.id = id;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    @Override
    public int getCode() {
        return super.getCode();
    }

    @Override
    public Object getData() {
        return super.getData();
    }

    @Override
    public String execute() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        UserinfoEntity entity = new UserinfoEntity();
        entity.setUsername(userName);
        entity.setPassword(userPassword);
        entity.setUseremail(userEmail);
        entity.setUseraddress(userAddress);
        entity.setId(id);
        AllDaoService daoService = new AllDaoService();
        UserinfoEntity entity2 = daoService.getUserinfoDaoService().updateUserinfo(entity);
        setCode(1000);
        setData(new UserLoginResponseEntity(entity2));
        return ERROR;
    }
}

