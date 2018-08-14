package action.savapassword;

import action.BaseAction;
import orm.entity.PasswordEntity;
import service.AllDaoService;

/**
 * Created by Administrator on 2018/8/13 0013.
 */
public class SavePasswordAction extends BaseAction {
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
        PasswordEntity entity = new PasswordEntity();
        entity.setTitle(title);
        entity.setValue(value);
        entity.setDesc(desc);
        PasswordEntity passwordEntity = allDaoService.getPasswordDaoService().savePassword(entity);
        if (passwordEntity == null || passwordEntity.getId() == -1) {
            setCode(10001);
            setData("保存失败！");
            return ERROR;
        }
        setCode(10000);
        setData(passwordEntity);
        return SUCCESS;
    }
}
