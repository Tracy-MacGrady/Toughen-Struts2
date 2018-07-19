<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2017/12/4 0004
  Time: 17:34
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<% String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";%>

<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta property="wb:webmaster" content="f307b26227e4f2c3"/>
    <title>登录豆瓣</title>
    <link rel="stylesheet" href="../css/login.css">

    <script src="../js/jquery-1.4.2.js"></script>

</head>
<body onload="changeWindowSize()">
<div class="wrapper">
    <div id="header">
        <a href="" class="logo">登录豆瓣</a>
    </div>

    <div id="content">
        <h1>
            登录豆瓣
        </h1>
        <div class="article">


            <form id="lzform" name="lzform" method="post" action="login1.jsp"
                  onsubmit="return validateForm(this);">
                <input name="source" type="hidden" value="index_nav"/>
                <input name="redir" type="hidden" value=""/>
                <div id="item-error">
                    <p class="error"></p>
                </div>
                <div class="item">
                    <label>
                        帐号
                    </label>
                    <input id="email" name="form_email" type="text"
                           class="basic-input" maxlength="60" value="" tabindex="1"/>
                </div>
                <div class="item">
                    <label>
                        密码
                    </label>
                    <input id="password" name="form_password" type="password"
                           class="basic-input" maxlength="20" tabindex="2"/>
                </div>
                <div class="item">
                    <label>
                        &nbsp;
                    </label>
                    <p class="remember">
                        <input type="checkbox" id="remember" name="remember"
                               tabindex="4"/>
                        <label for="remember" class="remember">
                            下次自动登录
                        </label>
                        |
                        <a href="resetpassword.jsp">忘记密码了</a>
                    </p>
                </div>
                <div class="item">
                    <label>
                        &nbsp;
                    </label>
                    <input type="submit" value="登录" name="user_login"
                           class="btn-submit" tabindex="5"/>
                </div>
            </form>

        </div>
        <ul id="side-nav" class="aside">
            <li>
                &gt;&nbsp;还没有豆瓣帐号？
                <a rel="nofollow" href="withus.jsp">立即注册</a>
            </li>
            <li>
                &gt;&nbsp;
                <a href="mobile.jsp">点击下载豆瓣移动应用</a>
            </li>
        </ul>
    </div>
    <div id="footer">
				<span id="icp" class="fleft gray-link"> &copy; 2005－2013
					douban.com, all rights reserved </span>
        <span class="fright"> <a href="about">关于豆瓣</a> · <a
                href="jobs">在豆瓣工作</a> · <a href="about?topic=contactus">联系我们</a> ·
					<a href="about?policy=disclaimer">免责声明</a> · <a href="help/">帮助中心</a>
					· <a href="developers" target="_blank">开发者</a> · <a href="mobile/">移动应用</a>
					· <a href="partner/">豆瓣广告</a> </span>
    </div>
    <script>
        var placeholder = '邮箱/手机号';
        var email = document.getElementById('email'), password = document.getElementById('password'),
            capcha = document.getElementById('captcha_field');
        email.value = placeholder;
        email.onfocus = function () {
            if (this.value == placeholder) {
                this.value = '';
                this.style.color = '#000';
            }
        };
        email.onblur = function () {
            if (!this.value) {
                this.value = placeholder;
                this.style.color = '#ccc';
            }
        };

        if (email.value == placeholder) {
            email.style.color = '#ccc';
        } else if (password.value === '') {
            password.focus();
        } else if (capcha) {
            capcha.focus();
        }

        function trim(str) {
            return str.replace(/^(\s|\u00A0)+/, '').replace(/(\s|\u00A0)+$/, '');
        }

        function validateForm(frm) {
            var error = 0, captcha = frm.elements['captcha-solution'], account = frm.elements['form_email'],
                passwd = frm.elements['form_password'], defaultError = document
                    .getElementById('item-error');

            if (defaultError) {
                defaultError.style.display = 'none';
            }

            if (captcha) {
                var captcha_value = trim(captcha.value);
                if (captcha_value === '') {
                    displayError(captcha, '请输入验证码');
                    error = 1;
                } else if (captcha_value.length < 4) {
                    displayError(captcha, '请输入正确的验证码');
                    error = 1;
                } else {
                    clearError(captcha);
                }
            }

            if (account) {
                var account_value = trim(account.value);
                if (account_value === '') {
                    displayError(account, '请输入邮箱');
                    error = 1;
                } else if (!(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
                        .test(account_value) || /^1(\d){10}$/
                        .test(account_value))) {
                    displayError(account, '请输入正确的邮箱/手机号');
                    error = 1;
                } else {
                    clearError(account);
                }
            }

            if (passwd) {
                if (passwd.value === '') {
                    displayError(passwd, '请输入密码');
                    error = 1;
                } else {
                    passwd && clearError(passwd);
                }
            }
            return !error;
        }


        function displayError(el, msg) {
            var err = document.getElementById(el.name + '_err');
            if (!err) {
                err = document.createElement('span');
                err.id = el.name + '_err';
                err.className = 'error-tip';
                el.parentNode.appendChild(err);
            }
            err.style.display = 'inline';
            err.innerHTML = msg;
        }

        function clearError(el) {
            var err = document.getElementById(el.name + '_err');
            if (err) {
                err.style.display = 'none';
            }
        }
    </script>


</div>
</body>
</html>



