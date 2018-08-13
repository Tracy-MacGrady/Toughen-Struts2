package action.savapassword;

import action.BaseAction;

/**
 * Created by Administrator on 2018/8/13 0013.
 */
public class SavePassword extends BaseAction {
    private String value;
    private String desc;

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
        return SUCCESS;
    }
}
