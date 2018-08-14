package orm.entity;

import javax.persistence.*;

/**
 * Created by Administrator on 2018/8/14 0014.
 */
@Entity
@Table(name = "account", schema = "toughen", catalog = "")
public class AccountEntity {
    private int id;
    private String title;
    private String accountnumber;
    private String accountpassword;
    private String accountdesc;
    private int userid;

    @Id
    @Column(name = "id", nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "title", nullable = false, length = 255)
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Basic
    @Column(name = "accountnumber", nullable = false, length = 255)
    public String getAccountnumber() {
        return accountnumber;
    }

    public void setAccountnumber(String accountnumber) {
        this.accountnumber = accountnumber;
    }

    @Basic
    @Column(name = "accountpassword", nullable = false, length = 255)
    public String getAccountpassword() {
        return accountpassword;
    }

    public void setAccountpassword(String accountpassword) {
        this.accountpassword = accountpassword;
    }

    @Basic
    @Column(name = "accountdesc", nullable = true, length = 255)
    public String getAccountdesc() {
        return accountdesc;
    }

    public void setAccountdesc(String accountdesc) {
        this.accountdesc = accountdesc;
    }

    @Basic
    @Column(name = "userid", nullable = false)
    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AccountEntity that = (AccountEntity) o;

        if (id != that.id) return false;
        if (userid != that.userid) return false;
        if (title != null ? !title.equals(that.title) : that.title != null) return false;
        if (accountnumber != null ? !accountnumber.equals(that.accountnumber) : that.accountnumber != null)
            return false;
        if (accountpassword != null ? !accountpassword.equals(that.accountpassword) : that.accountpassword != null)
            return false;
        if (accountdesc != null ? !accountdesc.equals(that.accountdesc) : that.accountdesc != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (title != null ? title.hashCode() : 0);
        result = 31 * result + (accountnumber != null ? accountnumber.hashCode() : 0);
        result = 31 * result + (accountpassword != null ? accountpassword.hashCode() : 0);
        result = 31 * result + (accountdesc != null ? accountdesc.hashCode() : 0);
        result = 31 * result + userid;
        return result;
    }
}
