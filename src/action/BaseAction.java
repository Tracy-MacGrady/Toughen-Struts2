package action;

import com.opensymphony.xwork2.ActionSupport;

/**
 * Created by Administrator on 2017/8/1 0001.
 */
public class BaseAction extends ActionSupport {
    private int code;
    private Object data;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

}
