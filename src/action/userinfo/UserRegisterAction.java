package action.userinfo;

import action.ActionConstant;
import action.BaseAction;
import com.mysql.jdbc.StringUtils;
import orm.entity.UserinfoEntity;
import response.UserLoginResponseEntity;
import service.AllDaoService;

/**
 * Created by Administrator on 2017/9/4 0004.
 */
public class UserRegisterAction extends BaseAction {
    private String userphone, password, vcode;

    public void setUserphone(String userphone) {
        this.userphone = userphone;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setVcode(String vcode) {
        this.vcode = vcode;
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
        if (StringUtils.isNullOrEmpty(userphone)) {
            setCode(ActionConstant.CODE_ERROR);
            setData("请填写您的手机号！");
            return ERROR;
        }
        if (StringUtils.isNullOrEmpty(password)) {
            setCode(ActionConstant.CODE_ERROR);
            setData("请填写您的密码！");
            return ERROR;
        }
        if (StringUtils.isNullOrEmpty(vcode)) {
            setCode(ActionConstant.CODE_ERROR);
            setData("请填写您的验证码！");
            return ERROR;
        }
        if (!vcode.equals("111111")) {
            setCode(ActionConstant.CODE_ERROR);
            setData("您输入的验证码错误！");
            return ERROR;
        }
        AllDaoService service = new AllDaoService();
        UserinfoEntity findUser = service.getUserinfoDaoService().findByUserPhone(userphone);
        if (findUser != null) {
            setCode(ActionConstant.CODE_ERROR);
            setData("您的账号已经注册了，请直接登录！");
            return ERROR;
        }
        UserinfoEntity entity = service.getUserinfoDaoService().insertUserinfo(userphone, password);
        setCode(ActionConstant.CODE_SUCCESS);
        setData(new UserLoginResponseEntity(entity));
        return SUCCESS;
    }
}
