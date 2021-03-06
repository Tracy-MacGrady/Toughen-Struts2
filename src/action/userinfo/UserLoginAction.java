package action.userinfo;

import action.ActionConstant;
import action.BaseAction;
import com.mysql.jdbc.StringUtils;
import org.apache.struts2.ServletActionContext;
import orm.entity.UserinfoEntity;
import response.UserLoginResponseEntity;
import service.AllDaoService;
import utils.MD5Utils;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.net.CookieManager;

/**
 * Created by Administrator on 2017/8/1 0001.
 */
public class UserLoginAction extends BaseAction {
    private String userphone, password;

    public void setUserphone(String userphone) {
        this.userphone = userphone;
    }

    public void setPassword(String password) {
        this.password = password;
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
        if (StringUtils.isNullOrEmpty(userphone) || StringUtils.isNullOrEmpty(password)) {
            setCode(ActionConstant.CODE_ERROR);
            setData("用户名密码不能为空！");
            return ERROR;
        }
        AllDaoService service = new AllDaoService();
        UserinfoEntity userinfo = service.getUserinfoDaoService().findByUserPhone(userphone);
        if (userinfo != null) {
            if (userinfo.getPassword().trim().equals(MD5Utils.MD5Encode(password).trim())) {
                HttpServletResponse response = ServletActionContext.getResponse();
                response.addCookie(new Cookie("userid", userinfo.getId() + ""));
                setCode(ActionConstant.CODE_SUCCESS);
                setData(new UserLoginResponseEntity(userinfo));
                return SUCCESS;
            } else {
                setCode(ActionConstant.CODE_ERROR);
                setData("您输入的密码错误！");
            }
        } else {
            setCode(ActionConstant.CODE_ERROR);
            setData("您输入的用户信息无效！");
        }
        return ERROR;
    }
}
