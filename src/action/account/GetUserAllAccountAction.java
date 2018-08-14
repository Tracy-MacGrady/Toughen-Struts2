package action.account;

import action.ActionConstant;
import action.BaseAction;
import org.apache.struts2.ServletActionContext;
import orm.entity.AccountEntity;
import service.AllDaoService;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.*;

/**
 * Created by Administrator on 2018/8/14 0014.
 */
public class GetUserAllAccountAction extends BaseAction {

    @Override
    public Object getData() {
        return super.getData();
    }

    @Override
    public int getCode() {
        return super.getCode();
    }

    @Override
    public String execute() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        Cookie cookie = request.getCookies()[0];
        if (!cookie.getName().equals("userid")) {
            setCode(ActionConstant.CODE_ERROR);
            setData("您还没有登录！");
            return ERROR;
        }
        String userid = cookie.getValue();
        AllDaoService allDaoService = new AllDaoService();
        List<AccountEntity> list = allDaoService.getAccountDaoService().selectAllAccount(userid);
        setCode(ActionConstant.CODE_SUCCESS);
        setData(list);
        return SUCCESS;
    }
}
