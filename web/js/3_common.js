(function(){var a=window.white_site_list||/http:\/\/site\.douban\.com|http:\/\/movie\.douban\.com\/sogou_search|http:\/\/audit\.douban\.com|http:\/\/web2\.qq\.com|http:\/\/web\.qq\.com|http:\/\/web3\.qq\.com|http:\/\/youku\.movie-test\.alphatown\.com|http:\/\/site\.douban\.com|http:\/\/biz-zeta\.douban\.com/;if(self!==top&&document.referrer.search(a)===-1){top.location=self.location}})();String.prototype.escapeHTML=function(){return this.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;")};var Douban=Douban||{};Douban.errdetail=["","未知错误","文件过大","信息不全","域名错误","分类错误","用户错误","权限不足","没有文件","保存文件错误","不支持的文件格式","超时","文件格式有误","","添加文件出错","已经达到容量上限","不存在的相册","删除失败","错误的MP3文件","有禁用的内容,请修改重试"];Douban.trace=function(a){if(!/^http:\/\/(www|movie|music\.|book|douban\.fm)/.test(location.href)&&window.console&&window.console.log){$(arguments).each(console.log)}};Douban.report=function(a){$.get("/j/report?e="+a)};Douban.get_form_fields=function(a){var b={};$(":input",a).each(function(d){var c=this.name;if(this.type=="radio"){if(this.checked){b[c]=this.value}}else{if(this.type=="checkbox"){if(this.checked){b[c]=this.value}}else{if(this.type=="submit"){if(/selected/.test(this.className)){b[c]=this.value}}else{if(c){b[c]=this.value}}}}if(/notnull/.test(this.className)&&this.value==""){$(this).prev().addClass("errnotnull");b.err="notnull"}});return b};Douban.check_form=function(a){var b=true;$(":input",a).each(function(){if((/notnull/.test(this.className)&&this.value=="")||(/most/.test(this.className)&&this.value&&this.value.length>/most(\d*)/.exec(this.className)[1])){$(this).next().show();b=false}else{if(/attn/.test($(this).next().attr("className"))){$(this).next().hide()}}});return b};Douban.remote_submit_json=function(e,d,b,f){var c=Douban.get_form_fields(e);if(c.err!=undefined){return}$(":submit,:input",e).attr("disabled",b==false?0:1);var a=f||e.action;$.post_withck(a,c,function(g){d(g)},"json")};Douban.initHandler=function(a,d,e,b,c){$(b||"body").delegate(a,d,$.proxy(function(f){f.preventDefault();e.call(this,f)},c))};var set_cookie=function(e,d){d=d||30;var b=new Date();b.setTime(b.getTime()+(d*24*60*60*1000));var a="; expires="+b.toGMTString();for(var c in e){document.cookie=c+"="+e[c]+a+"; path=/"}};var get_cookie=function(b){var e=b+"=";var a=document.cookie.split(";");for(var d=0;d<a.length;d++){var f=a[d];while(f.charAt(0)==" "){f=f.substring(1,f.length)}if(f.indexOf(e)==0){return f.substring(e.length,f.length).replace(/\"/g,"")}}return null};var paras=function(c){var d={};if(c.indexOf("?")==-1){return{}}var e=c.split("?")[1].split("&");for(var b=0;b<e.length;b++){if(e[b].indexOf("=")!=-1){var a=e[b].split("=");d[a[0]]=a[1]}}return d};$("html").click(function(c){var a=$(c.target),b=a.attr("class");if(b===""){return}$(b.match(/a_(\w+)/gi)).each($.proxy(function(d,f){var e=Douban[f.replace(/^a_/,"init_")];if(typeof e==="function"){c.preventDefault();e.call(this,c)}},a[0]))});$.viewport_size=function(){var a=[0,0];if(typeof window.innerWidth!="undefined"){a=[window.innerWidth,window.innerHeight]}else{if(typeof document.documentElement!="undefined"&&typeof document.documentElement.clientWidth!="undefined"&&document.documentElement.clientWidth!=0){a=[document.documentElement.clientWidth,document.documentElement.clientHeight]}else{a=[document.body.clientWidth,document.body.clientHeight]}}return a};$.ajax_withck=function(a){if(a.type=="POST"){a.data=$.extend(a.data||{},{ck:get_cookie("ck")})}return $.ajax(a)};$.postJSON_withck=function(a,b,c){$.post_withck(a,b,c,"json")};$.post_withck=function(a,c,d,b){if($.isFunction(c)){b=d;d=c;c={}}return $.ajax({type:"POST",url:a,data:$.extend(c,{ck:get_cookie("ck")}),success:d,dataType:b||"text"})};(function(){var a={};$.tmpl=function(d,c){var b=a[d]=a[d]||new Function("obj","var p=[];with(obj){p.push('"+d.replace(/[\r\t\n]/g," ").replace(/'(?=[^%]*%})/g,"\t").split("'").join("\\'").split("\t").join("'").replace(/{%=(.+?)%}/g,"',$1,'").split("{%").join("');").split("%}").join("p.push('")+"');}return p.join('');");return b(c)}})();jQuery.fn.extend({pos:function(){var b=this[0];if(b.offsetParent){for(var c=0,a=0;b.offsetParent;b=b.offsetParent){c+=b.offsetLeft;a+=b.offsetTop}return{x:c,y:a}}else{return{x:b.x,y:b.y}}},chop:function(f,a){var c=[],b=[];for(var d=0,e=this.length;d<e;d++){if(!a!=!f(this[d],d)){c.push(this[d])}else{b.push(this[d])}}return[c,b]},sum:function(b,d){var a=this.length,c=zero=d?"":0;while(a){c+=this[--a][b]+(a&&d||zero)}return c},set_len_limit:function(b){var c=this.find(":submit:first");var d=c.attr("value");var a=function(){if(this.value&&this.value.length>b){c.attr("disabled",1).attr("value","å—æ•°ä¸èƒ½è¶…è¿‡"+b+"å—")}else{c.attr("disabled",0).attr("value",d)}};$("textarea",this).focus(a).blur(a).keydown(a).keyup(a)},display_limit:function(a,e){var b=this,d,c=function(g){var f=b.val();if(f==d){return}if(f.length>=a){b.val(f.substring(0,a))}e.text(a-b.val().length);d=b.val()};this.keyup(c);c()},set_caret:function(){if(!$.browser.msie){return}var a=function(){this.p=document.selection.createRange().duplicate()};this.click(a).select(a).keyup(a)},insert_caret:function(b){var i=this[0];if(document.all&&i.createTextRange&&i.p){var h=i.p;h.text=h.text.charAt(h.text.length-1)==""?b+"":b}else{if(i.setSelectionRange){var d=i.selectionStart;var g=i.selectionEnd;var f=i.value.substring(0,d);var c=i.value.substring(g);i.value=f+b+c;i.focus();var a=b.length;i.setSelectionRange(d+a,d+a);i.blur()}else{i.value+=b}}},get_sel:function(){var a=this[0];return document.all&&a.createTextRange&&a.p?a.p.text:a.setSelectionRange?a.value.substring(a.selectionStart,a.selectionEnd):""},blur_hide:function(){var b=this,a=function(){return false};b.mousedown(a);$(document.body).mousedown(function(){b.hide().unbind("mousedown",a);$(document.body).unbind("mousedown",arguments.callee)});return this},yellow_fade:function(){var a=0,c=1,b=this;function d(){b.css({backgroundColor:"rgb(100%,100%,"+a+"%)"});a+=c;c+=0.5;if(a<=100){setTimeout(d,35)}else{b.css({backgroundColor:""})}}d();return this},hover_fold:function(c){var a={folder:[1,3],unfolder:[0,2]},b=function(d,e){return function(){$("img",d).attr("src","/pics/arrow"+e+"1_.gif")}};return this.hover(b(this,a[c][0]),b(this,a[c][1]))},multiselect:function(c){var f=function(){return true},e=c.onselect||f,d=c.onremove||f,b=c.onchange||f,g=c.selclass||"sel",a=c.values||[];return this.click(function(){var j=/id(\d*)/.exec(this.className)[1],h=$.inArray(j,a);if(h!=-1){if(!d(this)){return}a.splice(h,1);$(this).removeClass(g)}else{if(!e(this)){return}a.push(j);$(this).addClass(g)}b(a);return false})}});try{document.execCommand("BackgroundImageCache",false,true)}catch(err){}Douban.init_donate=function(){var m='<div class="blocktip dou-tip">{BODY}</div>',j='<form action="" method="post"><div class="frm-item">你将向{{= to_whom}}赠送<b>1</b>颗小豆</div><div class="frm-item"><label for="dou-inp-msg">顺带捎个话...</label><input id="dou-inp-msg" type="text" name="note"></div><div class="frm-submit"><span class="bn-flat"><input type="submit" value="送出"></span><a href="#" class="tip-bn-cancel">取消</a></div></form>',b='<p>“感谢”将向作者赠送<b>1</b>颗小豆，你还没有小豆。<br><a href="http://www.douban.com/help/account#t4-q1">怎样获取小豆?</a></p><span class="bn-flat"><input type="button" class="tip-bn-cancel"  value="知道了"></span>',i='<span class="donated-fail">{MSG}</span>',n='<span class="donated-success">{MSG}</span>',c="<p>处理中，请稍候...</p>",e=".tip-bn-cancel",d="processing",h=function(p,q){p.replaceWith(i.replace("{MSG}",q));a()},g=function(p,s){a();var r=$(m.replace("{BODY}",p)).appendTo("body"),v=s.offset(),q=[],u=$(window),t=u.scrollTop()+u.height();if((t-v.top)<(r.height()+20)){q=[v.left,v.top-r.height()-s.height()]}else{q=[v.left,v.top+s.height()]}r.css({position:"absolute",left:q[0]+"px",top:q[1]+"px"});return r.show()},a=function(){$(".dou-tip").remove()},l=function(q,r){var u=r.offset(),p=[],t=$(window),s=t.scrollTop()+t.height();if((s-u.top)<(q.height()+20)){p=[u.left,u.top-q.height()-r.height()]}else{p=[u.left,u.top+r.height()]}q.css({left:p[0]+"px",top:p[1]+"px"})},k=function(q){var p=function(r){if(r.error){this.elm.replaceWith(i.replace("{MSG}",r.error))}else{this.elm.replaceWith(n.replace("{MSG}",r.msg))}a()};q.preventDefault();this.args.is_first=0;this.args.note=$.trim(q.target.elements.note.value);this.relateTip.html(c);l(this.relateTip,this.elm);$.dataPoster(this.url,this.args,$.proxy(p,this),"post","json")},f=function(p){p.preventDefault();a();if(this.elm){this.elm.removeClass(d)}},o=function(p){var t=this.elm,s,r,q;if(p.error){h(t,p.error);return}if(p.balance){j=j.replace("{{= to_whom}}","小站");q=g(j,t);this.relateTip=q;q.find("form").bind("submit",$.proxy(k,this));q.find(e).bind("click",$.proxy(f,this));q.find("input[type=text]").bind({focusin:function(u){$(this).prev().hide()},focusout:function(u){if(this.value===""){$(this).prev().show()}}})}else{q=g(b,t);q.css("width",260+"px");this.relateTip=q;q.find(e).bind("click",$.proxy(f,this))}$(window).bind("resize",function(){l(q,t)})};$("body").delegate(".btn-donate","click",function(w){var y=$(w.currentTarget),q=y.attr("href").split("?"),t,r,u,v,s={elm:y},x={is_first:1};w.preventDefault();if(y.hasClass(d)){return}y.addClass(d);if(q[1]){t=q[1].split("&");for(u=0,v=t.length;u<v;u++){r=t[u].split("=");x[r[0]]=r[1]||""}}s.args=x;s.url=q[0];$.dataPoster(q[0],x,$.proxy(o,s),"post","json")})};(function(){if("localStorage" in window){return}window.localStorage=function(){var d=document;if(!d.documentElement.addBehavior){throw"don't support localstorage or userdata.";return}var b="_localstorage_ie";var c=d.createElement("input");c.type="hidden";var a=function(e){return function(){d.body.appendChild(c);c.addBehavior("#default#userData");var g=new Date();g.setDate(g.getDate()+365);c.expires=g.toUTCString();c.load(b);var f=e.apply(c,arguments);d.body.removeChild(c);return f}};return{getItem:a(function(e){return this.getAttribute(e)}),setItem:a(function(e,f){this.setAttribute(e,f);this.save(b)}),removeItem:a(function(e){this.removeAttribute(e);this.save(b)}),clear:a(function(){var f=this.XMLDocument.documentElement.attributes;for(var g=0,e;e=f[g];g++){this.removeAttribute(e.name)}this.save(b)})}}()})();$(window).one("load",function(){var a=localStorage.getItem("report");if(!a){return}a=a.split("_moreurl_separator_");var b=function(c){if(c==""){b(a.shift());return}$.get(typeof _MOREURL_REQ=="undefined"?"/stat.html?"+c:_MOREURL_REQ+"?"+c,function(){if(a.length){b(a.shift());localStorage.setItem("report",a.join("_moreurl_separator_"));return}localStorage.removeItem("report")})};b(a.shift())});function _moreurl(a,d){var c=["ref="+encodeURIComponent(location.pathname)];for(var b in d){if(d.hasOwnProperty(b)){c.push(b+"="+d[b])}}if(window._SPLITTEST){c.push("splittest="+window._SPLITTEST)}localStorage.setItem("report",(localStorage.getItem("report")||"")+"_moreurl_separator_"+c.join("&"))}window.moreurl=_moreurl;