(function(){Douban.init_rec_btn=function(g){var b=function(h,e){Do("dialog",function(){var k=dui.Dialog({title:"推荐",content:h,width:500,buttons:[{text:"确定",method:function(l){l.footer.find("input:submit, input:button").attr("disabled",1);l.submit(function(n){var p=dui.Dialog({width:300,iframe:true,isHideClose:true,isHideTitle:true,content:'<div class="dlg-success">推荐已成功提交！</div>'},true).open();l.close();setTimeout(function(){p.close();p.node.remove()},500)})}},"cancel"]}),j;k.open();if(e){e(k)}k.setTitle(k.node.find(".rectitle .m").html()||"推荐");k.updateSize();k.updatePosition();j=k.node.find("form");j.append('<input type="hidden" name="ck" value="'+get_cookie("ck")+'">');j.find(".reccomment label").click(function(){$(this).next().focus()});j.find(".reccomment textarea").focus(function(){$(this).css("border-color","#666").prev().hide()}).blur(function(n){var l=$(this);if($.trim(l.val())===""){l.css("border-color","").prev().show()}})})},c=$(this),a=c.attr("name").split("-"),d=c.attr("data-date");url="/j/recommend",rdialog="rdialog-"+a[1]+"-"+a[2],f=function(){var h=((a[1]=="I")&&(a[2]==undefined))?$("input",$(o).parent())[0].value:a[2],j=(a[3]==undefined)?"":a[3],e=function(l,n){var k;if(l=="I"){k=$(".text",n);if(k.length){if(k[0].value.length){k[1].focus()}else{k[0].focus()}}}else{n.find(":submit").focus()}if(c.hasClass("novote")){$("form",n).append('<input name="novote" value="1" type="hidden">')}};if($("#"+rdialog).length){b($("#"+rdialog).html(),function(k){e(a[1],k.node)})}else{$.getJSON(url,{type:a[1],uid:h,rec:j,date:d},function(k){var l;b(k.html,function(n){if(a[1]!="I"){l=$('<div id="'+rdialog+'"></div>');l.html(k.html).appendTo("body").hide()}e(a[1],n.node)})})}};f();if(a[1]=="I"){c.parent().parent().submit(f)}};Douban.init_show_login=function(a){Do("dialog",function(){var b="/j/misc/login_form";dui.Dialog({title:"登录",url:b,width:350,cache:true,callback:function(c,d){d.node.addClass("dialog-login");d.node.find("h2").css("display","none");d.node.find(".hd h3").replaceWith(d.node.find(".bd h3"));d.node.find("form").css({border:"none",width:"auto",padding:"0"});d.updateSize();d.updatePosition()}}).open()})};Douban.init_click_tip=function(c){var a=$(this),d="a_click_tip_inited",b=a.parent().find(".blocktip");b.show().blur_hide();m=b.width()+b.pos().x-$.viewport_size()[0]>0?-b.width():0;b.css("margin-left",m);if(!a.hasClass(d)){$(".hideme",b).click(function(){b.hide()});a.addClass(d)}};Douban.init_confirm_link=function(b){var a=$(this),c=a.attr("title")||a.text();if(confirm(c)){self.location=a.attr("href")}};Douban.init_rating_stars=function(e){var c={1:"很差",2:"较差",3:"还行",4:"推荐",5:"力荐"},b=$("#n_rating"),a=e.find("img"),d=function(g){var h=b.val()||0;a.each(function(k){this.src=this.src.replace(/\w*\.gif$/,((k<g)?"sth":((k<h)?"st":"nst"))+"0_.gif")});if(g){$("#rateword").text(c[g])}else{$("#rateword").text(h?c[h]:"")}};a.hover(function(){d(parseInt(this.id.match(/\d+/)[0]))},function(){d(0)});if(b.attr("name")){a.click(function(){var g=parseInt(this.id.match(/\d+/)[0]);b.val(g);d(g)})}};Douban.init_collect_btn=function(g){var c=$(this).attr("name").split("-"),h=c[0],a=c[1],k=c[2],d=c[3],b="/j/subject/"+a+"/interest?"+(k?"interest="+k:"")+(d?"&rating="+d:"")+(h=="cbtn"?"&cmt=1":""),j=function(r,s,e,n){if(e.length){var l=$("<dl><dt>"+r+"</dt></dl>"),q=$("<dd></dd>");$.each(e,function(u,p){var t=$('<span class="tagbtn"/>').addClass(n[p.toLowerCase()]?"rdact":"gract").text(p);q.append(t).append(" &nbsp; ")});l.append(q);s.append(l)}};Do("dialog",function(){var w,q,n={},l,s,e,p,t=function(y){var x=y.node.find("form"),r=Douban.get_form_fields(x);$(":submit",y.node).css("disabled",1);$.post_withck(x.attr("action"),r,function(z){y.close()},"json")},v=function(r){$(".gact,.bd h2,form input:submit, form input:button",r.node).hide();$("input[name=tags]",r.node).val((q.length>1)?q+" ":q);$.each(w,function(y,x){n[x.toLowerCase()]=true});j("我的标签:",$("#mytags",r.node),e.my_tags,n);j("常用标签:",$("#populartags",r.node),e.popular_tags,n);$("form",r.node).append('<input type="hidden" name="ck" value="'+get_cookie("ck")+'">')},u=function(y){var x=y.node.find("form"),A,r,z=function(F){var C=$(this),B=140,D=C.next(),E=C.parents("form");if($.trim(C.val()).length>B){E.data("hasError",1);if(!D.hasClass("attn")){D=$('<div class="attn"></div>').insertAfter(C)}D.html("最多只能写"+B+"字");y.updateSize();y.updatePosition()}else{if(D.hasClass("attn")){D.html("");y.updateSize();y.updatePosition()}}};$("#showtags").click(function(){if($("#advtags").is(":hidden")){$(this).html("缩起 ▲");$("#advtags").show();$("#foldcollect").val("U")}else{$(this).html($(this).attr("rel"));$("#advtags").hide();$("#foldcollect").val("F")}$(this).blur();y.updateSize();y.updatePosition()});x.submit(function(B){B.preventDefault();t(y)});$("#populartags .tagbtn").click(function(E){var B=$(E.currentTarget),D=B.html(),C=x[0].elements.tags;if((" "+C.value+" ").indexOf(" "+D+" ")+1){B.removeClass("selected");C.value=$.trim((" "+C.value+" ").replace(" "+D+" "," "))}else{B.addClass("selected");C.value=$.trim(C.value+" "+D)}});$("input[name=tags]",x).keyup(function(C){var B=$(this);if(A){window.clearTimeout(A)}A=window.setTimeout(function(){var D=$("#populartags .tagbtn");D.removeClass("selected");$($.trim(B[0].value).split(" ")).each(function(F,E){D.each(function(G,I){var H=$(I);if(H.html()===E){H.addClass("selected")}})})},500)});$("textarea[name=comment]",x).keyup(z).mouseup(z);r=y.node.find(".a_stars");if(r.length){Douban.init_rating_stars(r)}};dui.Dialog({isHideTitle:true,width:500,url:b,dataType:"json",buttons:[{text:"保存",method:function(r){t(r)}},"cancel"],callback:function(r,x){e=r,w=e.tags;q=w.join(" ");x.setContent('<div class="collect-dialog">'+e.html+"</div>");x.setTitle(x.node.find("h2").html());x.node.find(".hd").show();v(x);u(x);x.updateSize();x.updatePosition()}}).open()})};Douban.init_post_link=function(h){var b=$(this),a=b.attr("href"),p=b.attr("title")||b.text()+"?",d=b.attr("rel"),q=d=="confirm_direct"||d=="",g=d=="direct"||d=="confirm_direct",j=b.attr("target"),l=a.split("?")[0],n={},k=a.split("?")[1]||[];if(typeof k==="string"){k=k.split("&")}h.preventDefault();if(b.hasClass("processing")){return}if(q&&!confirm(p)){return}if(g){var r=[];k.push("ck="+get_cookie("ck"));for(i=0,c;i<k.length;i++){c=k[i].split("=");r.push('<input type="hidden" name="'+c[0]+'" value="'+unescape(c[1]).escapeHTML()+'">')}$('<form action="'+l+'" method="POST" target="'+(j||"_self")+'" sytle="display:none">'+r.join("")+"</form>").appendTo("body").submit()}else{for(i=0;i<k.length;i++){var c=k[i].split("=");n[c[0]]=c[1]}b.addClass("processing");$.post_withck(l,n,function(s){b.removeClass("processing");location.reload(true)})}};Douban.autoUpdateChatWindow=function(a){if(!Douban.currentChatWindow){return}var b=Douban.currentChatWindow;b.node.find("iframe")[0].height=a;b.update()};Douban.init_chat_room=function(b){var a=$(this),c=function(){var d=dui.Dialog({content:'<iframe src="'+a.attr("href")+'" width="100%" height="200" frameborder="0" scrolling="no"></iframe>',isHideTitle:true,width:650}).open();d.node.find(".dui-dialog-close").unbind().click(function(){if(confirm("确认要离开聊天室吗?")){d.node.find("iframe")[0].contentWindow.onWindowClose();d.setContent("");d.close()}});d.node.addClass("dialog-chat");Douban.currentChatWindow=d};Do("dialog",c)};Douban.init_chat_activate=function(g){var a=$(this),c=a.attr("href").split("#")[1].split("|"),b=c[2],l=typeof c[3]==="undefined"?"激活":"续租",k,h='<div class="join-tips"><h3>'+l+"聊天桌需要花 "+CHAT_FEE+" 颗小豆</h3><p>使用期限: "+(c[1]||"(未激活)")+"</p></div>",d=function(){$.getJSON("/j/widget/chat/"+c[0]+"/activate",{},function(e){failure={content:l+"失败:"+e.error,buttons:["confirm"]};if(e.r==1){location.reload()}else{k.set(failure)}})},j=[{text:l,method:d},"cancel"];if(b<CHAT_FEE){h='<div class="join-tips"><h3>'+l+"聊天桌需要花 "+CHAT_FEE+" 颗小豆</h3><p>使用期限: "+(c[1]||"(未激活)")+'</p><p>目前小豆数: <span style="color:red">'+b+"</span></p></div>";j=[{text:"知道了",method:function(){k.close()}}]}Do("dialog",function(){k=dui.Dialog();k.set({width:350,content:h,buttons:j}).open();k.updateSize();k.updatePosition()})}})();