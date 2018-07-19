var email = $('#email'), suggestion = $('#email_suggestion'), email_value = '', e_name = '', e_domain = '', e_tip_on = 0, passwd_reg = /^[\u4e00-\u9fa5]/,

email_list = new Array('163.com', '126.com', '139.com', '188.com',
		'2008.china.com', '2008.sina.com', '21cn.com', '263.net', 'china.com',
		'chinaren.com', 'citiz.net', 'eyou.com', 'foxmail.com', 'gmail.com',
		'hongkong.com', 'hotmail.com', 'live.cn', 'live.com', 'mail.china.com',
		'msn.com', 'my3ia.sina.com', 'qq.com', 'sina.cn', 'sina.com',
		'sina.com.cn', 'sogou.com', 'sohu.com', 'vip.163.com', 'vip.qq.com',
		'vip.sina.com', 'vip.sohu.com', 'vip.tom.com', 'yahoo.cn', 'yahoo.com',
		'yahoo.com.cn', 'yahoo.com.hk', 'yahoo.com.tw', 'yeah.net'),

TXT_CAPTCHA_NULL = '请输入验证码', TXT_CAPTCHA_ERROR = '请输入正确的验证码', error_info = $(
		'#frm_error').text();

if (error_info === TXT_CAPTCHA_NULL || error_info === TXT_CAPTCHA_ERROR) {
	$('#frm_error').show();
} else {
	$('<div></div>').text(error_info).addClass('item-error').insertAfter(
			'.captcha-item').show();
	$('#frm_error').remove();
}

function DPA(s1, s2) {
	var m = new Array();
	var i, j;
	for (i = 0; i < s1.length + 1; i++)
		m[i] = new Array(); // i.e. 2-D array

	m[0][0] = 0; // boundary conditions

	for (j = 1; j <= s2.length; j++)
		m[0][j] = m[0][j - 1] - 0 + 1; // boundary conditions

	for (i = 1; i <= s1.length; i++) // outer loop
	{
		m[i][0] = m[i - 1][0] - 0 + 1; // boundary conditions

		for (j = 1; j <= s2.length; j++) // inner loop
		{
			var diag = m[i - 1][j - 1];
			if (s1.charAt(i - 1) != s2.charAt(j - 1))
				diag++;

			m[i][j] = Math.min(diag, // match or change
					Math.min(m[i - 1][j] - 0 + 1, // deletion
							m[i][j - 1] - 0 + 1)); // insertion
		}// for j
	}// for i
	return m[s1.length][s2.length];
};

function get_like(s) {
	r = 0;
	v = s.split('@');
	if (v.length <= 1)
		return;
	domain = v[1];
	e_name = v[0];
	dis = domain.length;
	for (k = 0; k < email_list.length; k++) {
		e = email_list[k];
		d = DPA(domain, e);
		if (d < dis) {
			dis = d;
			e_domain = e;
		}
	}
	if (dis && dis < 4) {
		r = 1;
	}
	return r;
};

function email_suggestion(like) {
	s = email.attr('value');
	if (!(s && s.length > 2)) {
		return;
	}
	if (like && get_like(s)) {
		as = ' <a id="yes_but" href="#">是</a>／<a href="#" id="no_but">不是</a>';
		suggestion.html('<p><span>你是否要输入' + e_name + '@</span>' + e_domain + as
				+ '</p>');
		$("#yes_but").focus();
		e_tip_on = 1;
	}

	email_value = email.attr('value');
	return r;
};

$('#email').focusout(function() {
	var e = $(this).parents('.item').hasClass('has-error');
	if (!e) {
		email_suggestion(1);
	}
});

$('body').delegate('#yes_but', 'click', function(e) {
	e.preventDefault();
	email.attr('value', e_name + '@' + e_domain);
	email.focus();
	suggestion.html('');
	e_tip_on = 0;
});
$('body').delegate('#no_but', 'click', function(e) {
	e.preventDefault();
	suggestion.html('');
	e_tip_on = 0;
});
$("input[name='form_agreement']").each(
		function() {
			if ($("input[name='form_agreement']").is(':checked')) {
				$("input[type='submit']").attr('disabled', false).addClass(
						'enabled');
			} else {
				$("input[type='submit']").attr('disabled', true).removeClass(
						'enabled');
			}
		});
$("input[name='form_agreement']").click ( function() {
	if ($("input[name='form_agreement']").is(':checked')) {
		$("input[type='submit']").attr('disabled', false).addClass('enabled');
	} else {
		$("input[type='submit']").attr('disabled', true).removeClass('enabled');
	}

});
var optionMsg = {
	form_email : '用来登录豆瓣，接收到激活邮件才能完成注册',
	form_password : '至少包含字母和数字，最短8个字符，区分大小写',
	form_name : '中、英文均可，最长14个英文或7个汉字',
	loc : ''
}, validateError = {
	email : {
		isNull : 'Email不能为空',
		invalidFormat : 'Email格式不正确',
		// unavailable: '',
		unableForTom : '目前暂时不支持使用 tom.com 邮箱注册豆瓣帐号',
		unableForChongseo : '目前暂时不支持使用 chongseo.cn 邮箱注册豆瓣帐号'
	},
	password : {
		isNull : '密码不能为空',
		isShort : '密码长度不足8个字符',
		invalidFormat : '请使用英文字母、符号或数字',
		invalidStrong : '密码强度不够，请包含字母和数字'
	},
	location : {
		isNull : '常居地不能为空'
	},
	name : {
		isNull : '名号不能为空',
		isLong : '名号长度不能超过14个英文或7个汉字'
	},
	captcha : {
		isNull : '验证码不能为空'
	}
}, validateRules = {
	email : {
		elems : 'input[name=form_email]',
		isNull : function(el) {
			return !$.trim(el.val());
		},
		invalidFormat : function(el) {
			return !$.validate.isEmail($.trim(el.val()));
		},
		
		unableForTom : function(el, o) {
			var domain = el.val().split('@')[1];
			return domain == 'tom.com';
		},
		unableForChongseo : function(el, o) {
			var domain = el.val().split('@')[1];
			return domain == 'chongseo.cn';
		}

	},
	password : {
		elems : 'input[name=form_password]',
		isNull : function(el) {
			if (el.val() === '')
				return true;
		},
		isShort : function(el) {
			if (el.val() != '' && el.val().length < 8) {
				return true;
			}
		},
		invalidFormat : function(el) {
			var s = $.trim(el.val());
			return passwd_reg.test(s);
		},
		invalidStrong : function(el) {
			var s = $.trim(el.val());
			if (!(/\d/.test(s))) {
				return true;
			}
			if (!(/[a-zA-Z\~\)\!\$\%\*\(\_\+\-\=\{\}\[\]\|\:\;\<\>\?\,\.\/\@\#\^\"\'\`\?\&]/
					.test(s))) {
				return true;
			}
		}
	},
	name : {
		elems : 'input[name=form_name]',
		isNull : function(el) {
			return !$.trim(el.val());
		},
		isLong : function(el) {
			return $.trim(el.val()).replace(/[^\x00-\xff]/g, '豆瓣').length <= 14 ? false
					: true;
		}
	},
	location : {
		elems : 'input[name=loc]',
		isNull : function(el) {
			return !$.trim(el.val());
		}
	},
	captcha : {
		elems : 'input[name=captcha-solution]',
		isNull : function(el) {
			return !$.trim(el.val());
		}

	}
};
$('form').validateForm(validateRules, validateError, optionMsg, null);

$('#cap_resend').click(function(e) {
	e.preventDefault();
	resendCaptcha();
});

function resendCaptcha() {
	var cap_img = $('.captcha-img');
	var cap_input = $("input[name='captcha-id']");
	var url = '';
	$.getJSON(url, function(j) {
		cap_img.attr('src', j.url);
		cap_input.val(j.token);
	});
}
String.prototype.strReverse = function() {
	var b = "";
	for ( var a = 0; a < this.length; a++) {
		b = this.charAt(a) + b
	}
	return b
};
function checkPassword(f) {
	if (!f) {
		return 0
	}
	var h = 8;
	if (f.length < h) {
		return 0
	}
	var g = 0;
	var e = "abcdefghijklmnopqrstuvwxyz";
	var d = "01234567890";
	var a = "~)!@#$%^&*()_+-={}[]|:;<>?,./";
	if (f.length >= 10) {
		g += 20
	}
	if (f.length >= 12) {
		g += 20
	}
	if (f.match(/[a-z]/g)) {
		g += 20
	}
	if (f.match(/[0-9]/g)) {
		g += 20
	}
	if (f.match(/[A-Z]/g)) {
		g += 20
	}
	for ( var i = 0; i < a.length; i++) {
		if (f.indexOf(a[i]) != -1) {
			g += 20;
			break
		}
	}
	for ( var i = 0; i < 23; i++) {
		var b = e.substring(i, parseInt(i + 3));
		var c = b.strReverse();
		if (f.indexOf(b) != -1 || f.indexOf(c) != -1) {
			g -= 20
		}
		b = e.toUpperCase().substring(i, parseInt(i + 3));
		c = b.strReverse();
		if (f.indexOf(b) != -1 || f.indexOf(c) != -1) {
			g -= 20
		}
	}
	for ( var i = 0; i < 8; i++) {
		var b = d.substring(i, parseInt(i + 3));
		var c = b.strReverse();
		if (f.indexOf(b) != -1 || f.toLowerCase().indexOf(c) != -1) {
			g -= 20
		}
	}
	return Math.max(g, 0)
};

var delayKey, displayPasswdMeter = function(n, item) {
	var s, node = item.find('.validate-meter');

	if (n < 60) {
		s = '弱';
	} else if (n < 80) {
		s = '一般';
	} else {
		s = '强';
	}

	item.find('.validate-option, .validate-error').hide();

	if (node.length === 0) {
		node = $('<span class="validate-meter"></span>').appendTo(item);
	}

	node.show().text('密码强度：' + s);
};

$('#password').bind(
		{
			focus : function() {
			alert("ewr");
				var el = $(this), item = el.parent();

				if (item.find('.validate-error').css('display') === 'inline') {
					return;
				}

				if (el.val().length >= 8) {
					item.find('.validate-option').hide();
				}
			},

			blur : function() {
				var el = $(this), item = el.parent(), error = item
						.find('.validate-error');

				if (error.css('display') === 'inline') {
					item.find('.validate-meter').hide();
					return;
				}
			},

			keyup : function(e) {
				var el = this;
				if (this.value.length < 8) {
					return;
				}
				delayKey && clearTimeout(delayKey);
				delayKey = setTimeout(
						function() {
							displayPasswdMeter(checkPassword(el.value), $(el)
									.parent());
						}, 10);
			}
		});