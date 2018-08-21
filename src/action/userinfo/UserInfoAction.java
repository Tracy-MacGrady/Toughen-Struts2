package action.userinfo;

import action.ActionConstant;
import action.BaseAction;
import org.apache.struts2.ServletActionContext;
import orm.entity.UserinfoEntity;
import response.UserLoginResponseEntity;
import service.AllDaoService;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

/**
 * Created by Administrator on 2018/8/17 0017.
 */
public class UserInfoAction extends BaseAction {
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
        Cookie[] cookies = request.getCookies();
        for (int i = 0, size = cookies.length; i < size; i++) {
            String key = cookies[i].getName();
            if (key.equalsIgnoreCase("userid")) {
                int value = Integer.parseInt(cookies[i].getValue());
                AllDaoService allDaoService = new AllDaoService();
                UserinfoEntity entity = allDaoService.getUserinfoDaoService().findById(value);
                setData(new UserLoginResponseEntity(entity));
                setCode(ActionConstant.CODE_SUCCESS);
                return SUCCESS;
            }
        }
        setData("查询失败!");
        setCode(ActionConstant.CODE_ERROR);
        return ERROR;
    }
}
