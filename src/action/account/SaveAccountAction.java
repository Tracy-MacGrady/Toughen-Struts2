package action.account;

import action.ActionConstant;
import action.BaseAction;
import org.apache.struts2.ServletActionContext;
import orm.entity.AccountEntity;
import service.AllDaoService;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

/**
 * Created by Administrator on 2018/8/13 0013.
 */
public class SaveAccountAction extends BaseAction {
    private String title;
    private String accountNumber;
    private String accountPassword;
    private String accountDesc;

    public void setTitle(String title) {
        this.title = title;
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
        Cookie cookie = request.getCookies()[0];
        if (!cookie.getName().equalsIgnoreCase("userid")) {
            setCode(ActionConstant.CODE_ERROR);
            setData("您还没有登录！");
            return ERROR;
        }
        AllDaoService allDaoService = new AllDaoService();
        AccountEntity entity = new AccountEntity();
        entity.setTitle(title);
        entity.setAccountnumber(accountNumber);
        entity.setAccountpassword(accountPassword);
        entity.setAccountdesc(accountDesc);
        entity.setUserid(Integer.parseInt(cookie.getValue()));
        AccountEntity accountEntity = allDaoService.getAccountDaoService().saveAccount(entity);
        if (accountEntity == null || accountEntity.getId() == -1) {
            setCode(ActionConstant.CODE_ERROR);
            setData("保存失败！");
            return ERROR;
        }
        setCode(ActionConstant.CODE_SUCCESS);
        setData(accountEntity);
        return SUCCESS;
    }
}
