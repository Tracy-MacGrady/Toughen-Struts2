package action.account;

import action.BaseAction;
import orm.entity.AccountEntity;
import service.AllDaoService;

/**
 * Created by Administrator on 2018/8/13 0013.
 */
public class SaveAccountAction extends BaseAction {
    private String title;
    private String value;
    private String desc;

    public void setTitle(String title) {
        this.title = title;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public void setDesc(String desc) {
        this.desc = desc;
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
        AllDaoService allDaoService = new AllDaoService();
        AccountEntity entity = new AccountEntity();
        entity.setTitle(title);
        entity.setAccountnumber(value);
        entity.setAccountdesc(desc);
        AccountEntity accountEntity = allDaoService.getAccountDaoService().saveAccount(entity);
        if (accountEntity == null || accountEntity.getId() == -1) {
            setCode(10001);
            setData("保存失败！");
            return ERROR;
        }
        setCode(10000);
        setData(accountEntity);
        return SUCCESS;
    }
}
