Do(function() {
	if (($.browser.version | 0) < 9 && $.browser.msie) {
		$('.section:nth-child(2n)').addClass('section-bg');
	}
});
Do.ready(function() {
	var lazyPic = {
		counter : 0,
		areas : [],
		add : function() {
			if (arguments.length === 0) {
				return
			}
			this.areas = this.areas.concat(Array.prototype.slice
					.apply(arguments));
			this.counter = this.areas.length
		},
		check : function() {
			if (this.counter === 0) {
				return
			}
			var b = this;
			var a = document.body.scrollTop
					|| document.documentElement.scrollTop;
			$.each(this.areas, function(e, f) {
				if (!f) {
					return
				}
				var d = $(f);
				if (d.length === 0) {
					return
				}
				var h = d.offset().top;
				var g = h + d.height();
				var c = window.innerHeight
						|| document.documentElement.clientHeight;
				if (h > a && h < a + c || g > a && g < a + c) {
					b.areas[e] = null;
					b.counter--;
					b.load(f)
				}
			})
		},
		load : function(a) {
			var b = $(a).find("img[data-origin]");
			$.each(b, function(d, c) {
				c.setAttribute("src", c.getAttribute("data-origin"))
			})
		}
	};
	$(window).bind("scroll", function _loadpic() {
		var a;
		return function() {
			if (a) {
				window.clearTimeout(a)
			}
			a = window.setTimeout(function() {
				lazyPic.check()
			}, 100)
		}
	}()).trigger("scroll");
	lazyPic.add('#anony-sns', '#anony-movie', '#anony-book', '#anony-music',
			'#anony-group', '#anony-events');

	var input_label = function(c, a) {
		if ("placeholder" in document.createElement("input")) {
			return
		}
		if (!a) {
			a = c.parent()
		}
		var b = $('<label class="label">' + c.attr("placeholder") + "</label>")
				.prependTo(c.parent());
		c.attr("placeholder", "");
		b.click(function() {
			c.focus()
		});
		if (c.val()) {
			a.addClass("inp-focus")
		}
		c.bind( {
			focus : function() {
				a.addClass("inp-focus")
			},
			blur : function() {
				if (this.value == "") {
					a.removeClass("inp-focus")
				}
			}
		})
	};
	input_label($('#anony-nav').find('.inp input'), $('#anony-nav').find(
			'.anony-srh'));

	var account = $('#lzform').find('.item-account');
	input_label(account.find('input:eq(0)'), account);

	var passwd = $('#lzform').find('.item-passwd');
	input_label(passwd.find('input'), passwd);

	var captcha = $('#lzform').find('.item-captcha');
	if (captcha.length) {
		input_label(captcha.find('input'), captcha);
	}

	if (account.find('input').val()) {
		passwd.find('input').focus();
	}

	Do.preload( [ 'css\1__all.js', 'css\2_douban.js' ]);
});
