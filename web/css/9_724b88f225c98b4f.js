
Do(function(){
  var popup;var nav=$("#db-global-nav");var more=nav.find(".bn-more");nav.delegate(".bn-more, .top-nav-reminder .lnk-remind","click",function(c){c.preventDefault();var a=$(this);var b=a.parent();if(popup){popup.parent().removeClass("more-active");if($.contains(b[0],popup[0])){popup=null;return}}b.addClass("more-active");popup=b.find(".more-items");popup.trigger("moreitem:show");return});$(document).click(function(a){if($(a.target).closest(".more-items").length||$(a.target).closest(".more-active").length){return}if(popup){popup.parent().removeClass("more-active");popup=null}});
});

Do(function(){var g=$("#db-nav-commodity"),e=$(".more-enterances",g),c=$(".publish-enterances-wrap"),j=c.parent(),i=$(".nav-story-item",g),f=$(".nav-link",i),d=$(".story-more-nav",i),a=$("#search"),h,b;if($.media&&$.media.withinTablet){h=$('<span class="nav-link"></span>');h.html(f.html()).css("cursor","pointer").insertBefore(f);f.remove();h.click(function(k){i.toggleClass("active");k.stopPropagation()})}else{i.mouseenter(function(){$(this).addClass("active");if(b){clearTimeout(b);b=0}}).mouseleave(function(){var k=$(this);b=setTimeout(function(){k.removeClass("active");b=0},300)});d.mouseenter(function(){if(b){clearTimeout(b);b=0}})}e.click(function(k){if(k.target.nodeName==="A"){return}j.toggleClass("active");k.preventDefault();k.stopPropagation()});$(document).click(function(k){var l=k.target;if(i.hasClass("active")&&!d.is(l)&&!$.contains(d[0],l)){i.removeClass("active")}if(j.hasClass("active")&&c[0]!==l&&!$.contains(e[0],l)&&!$.contains(c[0],l)){j.removeClass("active")}});a.on("focus blur",function(l){var k=l.type==="focus";a.closest(".search-item").toggleClass("focus",k)})});

Do(function(){(function(l){var m={duration:0.4,unit:950,autoPlay:false,direction:0,interval:5000,slideInOneDirection:false};Slider=function(o,n){this.$element=l(o);this.options=l.extend({},m,n);this.init()};Slider.prototype={init:function(){this.$con=this.$element.find(".slider-inner");this.$children=this.$element.find(".item");this.length=this.$children.length;this.controls=this.$element.find(".slider-control");this.btnNext=this.$element.find(".next");this.btnPrev=this.$element.find(".prev");var p=this;var n=this.options;var o=parseInt(n.unit,10);this.btnNext.click(function(q){q.preventDefault();p.next()});this.btnPrev.click(function(q){q.preventDefault();p.prev()});this.$con.width(o*this.length+"px");p.auto();this.$element.hover(function(){if(l.browser.msie&&parseInt(l.browser.version,10)==6){p.controls.show()}else{p.controls.fadeIn()}p.stop()},function(){setTimeout(function(){if(l.browser.msie&&parseInt(l.browser.version,10)==6){p.controls.hide()}else{p.controls.fadeOut()}p.auto()},500)})},stop:function(){clearInterval(this.interval)},auto:function(){var o=this;var n=this.options;if(!n.autoPlay){return}if(this.interval){clearInterval(this.interval)}this.interval=setInterval(function(){o.process("next")},n.interval)},next:function(){if(this.sliding){return}this.process("next");this.auto()},prev:function(){if(this.sliding){return}this.process("prev");this.auto()},process:function(w){this.sliding=true;var u=this;var A=this.$element.find(".active");var p=this.length;var B=this.options;var r=w=="next"?1:-1;var s=B.duration;var z=parseInt(B.unit,10);var v=this.$children.index(A);var q=v+r;var y=(-1)*q*z;var o=(v===0&&r===-1)||(v===p-1&&r===1);var t,x=B.direction?"top":"left";if(o){if(B.slideInOneDirection){q=r===-1?p-1:0;t=this.$children.eq(q).clone();if(r===-1){this.$con.css(x,-z+"px").prepend(t);y=0}else{this.$con.width(z*(p+1)+"px").append(t);y=-z*p}}else{if(r===-1){y=r*z*(p-1);q=p-1}else{y=0;q=0}}}var n={};n[x]=y;this.$con.animate(n,s*1000,function(){u.sliding=false;A.removeClass("active");u.$active=u.$children.eq(q).addClass("active");if(o&&B.slideInOneDirection){u.$con.css(x,-z*q+"px").width(z*p+"px");t.remove()}u.$element.trigger("slide",{from:v,to:q})})}};l.fn.slider=function(n){return this.each(function(){l(this).data("slider",new Slider(this,n))})}})(jQuery);var i=["","e00d","e00e","e00f","e010","e011"];var a=$("#J_PromotionSlider"),b=a.find(".promotion-items"),k=$(".promotion-info .page-indicator"),h=k.children(".current"),e=h.text(),c=k.children(".total"),f=c.text(),j=$("<div>").css({position:"relative",height:b.height(),overflow:"hidden"});function d(l){var l=parseInt(l,10),m;if(!isNaN(l)){if(m=i[l]){return"&#x"+m+";"}}}function g(l){new Image().src="/j/stats?type=promotion&p="+l+"&t="+ +new Date()}b.wrap(j).css({position:"relative",top:0,left:0,overflow:"hidden"}).addClass("slider-inner");b.children("li").css("float","left").addClass("item").eq(0).addClass("active");c.html(d(f)||f);h.html(d(e)||e);g(e);k.css("visibility","visible");a.slider({unit:b.width(),slideInOneDirection:true}).on("slide",function(l,n){var m=n.to+1;h.html(d(m)||m);g(m)})});

Do(function(){var d="J_CommodityLikeBtn",b="active",e="loading",c="/j/{kind_url}/{id}/like",a=get_cookie("ck");$("."+d+" .unactive-tips").each(function(f,g){g=$(g);g.text(g.data("tips"))});$("."+d+"."+b).attr("title","不喜欢了?");$(document).on("click","."+d,function(g){var k=$(this),j=k.find(".count"),f=k.data(),i=c.replace("{id}",f.tid).replace("{kind_url}",f.tkindUrl),h=k.hasClass(b);if(k.hasClass(e)){return}ga.trackEvent(f.tkindUrl,h?"unlike":"like",f.tid);$.ajax({url:i,type:h?"delete":"post",data:{ck:a},dataType:"json",success:function(m){var l,n;if(h){k.removeClass(b).removeClass(e).attr("title","");l=k.data("html")}else{n=$.Deferred();n.done(function(){k.addClass(b).removeClass(e).attr("title","不喜欢了?")});if(!$.support.touchEvent){k.one("mouseleave",function(){n.resolve()})}else{n.resolve()}l=k.data("likedHtml")}k.html(l);j.text(m.total>0?m.total:"")},error:function(){alert("Oops, 出错鸟, 再试一次吧!");k.removeClass(e)}});k.addClass(e)})});

Do.add('tagsug',{path:'css\1_tagsug.js',type:'js'});
Do('tagsug',function(){});
Do(function(){var t=(function(){var y={},v=+new Date*1000,w="-douban-simple-event-uid",x=Array.prototype,z=Object.prototype.toString;function A(C){return z.call(C)==="[object Function]"}if(!x.forEach){x.forEach=function(F,E){for(var D=0,C=this.length;D<C;++D){F.call(E,this[D],D,this)}}}if(!x.indexOf){x.indexOf=function(E){for(var D=0,C=this.length;D<C;++D){if(E===this[D]){return D}}return -1}}function u(E){var D,C;if((D=E[w])===undefined){C=new B(E);D=w+(v++).toString(16);E[w]=D;y[D]=C}else{C=y[D]}return C}function B(C){if(!(this instanceof B)){return B(C)}this.obj=C;this.events={}}B.prototype={constructor:B,on:function(F,E){var C=this,G=C.obj,D=C.events;F=F.split(" ");F.forEach(function(I){var H;if(!(H=D[I])){H=D[I]=[]}if(A(E)){H.push(E)}});return C},off:function(G,H){var D=this,I=D.obj,F=D.events,C=F[G],E;if(C){if(H&&(E=C.indexOf(H))>-1){C.splice(E,1)}else{if(!H){F[G]=[]}}}return D},once:function(D,E){var C=this;function F(G){E(G);C.off(D,F)}C.on(D,F);return C},fire:function(F,G){var D=this,H=D.obj,E=D.events,C=E[F]||[];C.slice(0).forEach(function(I){I.call(H,G,F)});return D}};return function(){return u(this)}}());var b=(function(){var D="dui-dialog-simple",H="dui-dialog",C="dui-dialog-overlay",G="dui-dialog-close",y="dui-dialog-shd",I="dui-dialog-content",J="dui-dialog-mask",u='            <div id="{ID}" class="'+H+'">                <span class="'+y+'"></span>                <div class="'+I+'">                    {BN_CLOSE}                    {TITLE}                    <div class="bd">{BODY}</div>                </div>            </div>',F='<a title="关闭" href="#" class="'+G+'">&times;</a>',E='<div class="hd"><h3 title="{TITLE}">{TITLE}</h3></div>',v='<div class="'+J+'"></div>',A=$(window),x=$.browser.msie&&($.browser.version|0)<7,z=Math.floor(Math.random()*+new Date),w;function B(K){if(!(this instanceof B)){return new B(K)}this.id=z++;this.config=K||{};this.opened=false;this._render();this._bind()}B.prototype={constructor:B,event:t,_render:function(){var L=this,K=L.config,M;M=$(u.replace("{ID}",D+"-"+L.id).replace("{TITLE}",E.replace(/\{TITLE\}/g,K.title||"")).replace("{BN_CLOSE}",F).replace("{BODY}",K.content||"")).hide().appendTo("body");L.node=M;L.head=$(".hd",M);L.body=$(".bd",M);L.shadow=$("."+y,M);if(K.useMask){L.shadow.remove();L.shadow=null;M.addClass(C);L._renderMask()}return L},_renderMask:function(){var K=this;if(!w){w=$(v).appendTo("body")}return K},_bind:function(){var K=this,L=K.node;L.delegate("."+G,"click",function(M){K.close();M.preventDefault();M.stopPropagation()});return K},setTitle:function(M){var K=this,L=K.head;L.find("h3").text(M).attr("title",M)},open:function(){var L=this,K=L.config;if(K.useMask){$("html").css({height:"auto",overflow:"hidden"});w.show()}L.node.show();L.event().fire("open");L.opened=true;return L},close:function(){var L=this,K=L.config;if(K.useMask){$("html").css({height:"",overflow:""});w.hide()}L.node.hide();K.useMask&&w.hide();L.event().fire("close");L.opened=false;return L}};return B}());var m=(function(){var v=20,u='            <div class="doulist-select-panel">                <div class="input-area">                    <input placeholder="+ 创建新豆列" class="text-input doulist-create-input" type="text">                    <button class="btn-submit disabled" type="button">创建</button>                    <span class="error-count"></span>                </div>                <ul class="doulist-option-list"></ul>            </div>        ';function w(J,E,A){var K=$(J),y,F,G,I=false,C,B,z;A=A===undefined||A!==false;E=E||[];y=$(u).insertAfter(K);y.addClass(A?"panel-mode":"expand-mode");F=y[0];G=y.find(".doulist-option-list");C=y.find(".input-area .text-input");B=y.find(".input-area .btn-submit");z=y.find(".input-area .error-count");if(A){K.parent().css("position","relative");y.css({position:"absolute",display:"none"});K.bind("DoulistSelect:positionUpdate",function(){var L=K.position();y.css({top:L.top-10+"px",left:L.left-10+"px"})}).trigger("DoulistSelect:positionUpdate");K.bind("DoulistSelect:togglePanel",function(M,L){D(L)});$(document).click(function(L){var M=L.target;if(M!==F&&!$.contains(F,M)){D(false)}});if(!K.hasClass("disabled")&&!K.data("value")){K.addClass("default").data("value",0).find(".doulist-name").text(K.data("default-tips"))}K.click(function(L){if(!$(this).hasClass("disabled")){D(true)}L.stopImmediatePropagation()})}else{K.hide();y.find(".input-area").appendTo(y)}H();K.bind("DoulistSelect:selectItem",function(L,M){G.children('[data-id="'+M+'"]').click();x()});G.css("position","relative").on("click",".option-item",function(){var L=$(this),N,M;if(!L.hasClass("disabled")&&(N=L.data("id"))){if(!L.hasClass("selected")){M=L.text();K.find(".doulist-name").text(M);K.removeClass("default").data("value",N);G.children(".selected").removeClass("selected");L.addClass("selected");K.trigger("DoulistSelect:select",{id:N,title:M})}A&&D(false)}});C.keydown(function(L){if(L.keyCode===13){B.click();L.preventDefault()}}).bind("keyup change input",function(M){var N=$(this),O,L,P;setTimeout(function(){O=$.trim(N.val());L=O.length;if(L>0){if((P=v-L)>=0){B.removeClass("disabled").show();z.hide()}else{B.addClass("disabled").hide();z.text(P).show()}}else{B.addClass("disabled").show();z.hide()}},0)});B.click(function(){var L=$(this),M;if(L.hasClass("disabled")){return}M=$.trim(C.val());$.post_withck("/j/doulist/create",{title:M},function(O){var N;if(O.r===0&&(N=O.doulist)){E.splice(0,0,{id:N.id,title:N.title});H();K.trigger("DoulistSelect:createItem",N);K.trigger("DoulistSelect:selectItem",N.id);C.val("")}else{alert(O.msg||"Oops 出错鸟!")}L.removeClass("disabled")},"json");L.addClass("disabled")});function D(M){var N,L;if(M===undefined){M=!I}if(M){if(!I){y.show();I=true;if(N=K.data("value")){L=G.children(".option-item");L.removeClass("selected");L.filter("[data-id="+N+"]").addClass("selected")}}}else{if(I){y.hide();I=false}}}function H(){var M="",L;if(E.length>0){E.forEach(function(N){M+='<li class="option-item" data-id="'+N.id+'">'+N.title+"</li>"})}else{M='<li class="option-item disabled">暂无豆列，先创建一个吧</li>'}G.html(M)}function x(){var M=G.children(".selected"),P,L,N,O;if(M.length===0){return}P=G.height();L=M.position().top;N=M.outerHeight();O=G.scrollTop();if(O>=L+N){G.scrollTop(L)}else{if(O+N+P<L){G.scrollTop(L+N)}}}}return{init:w}}());function n(u,x){var v,w;for(v in x){if(x.hasOwnProperty(v)){w=new RegExp("\\{"+v.toUpperCase()+"\\}","g");u=u.replace(w,x[v])}}return u}var j=typeof DBCommodityData!=="undefined";var h="J_AddToDoulist",r='        <form class="doulist-fork-form J_DoulistForkForm" action="{ACTION}" method="post">            <div class="doulist-bd">                <div class="item doulist">                    <label class="item-label">选择豆列</label>                    <div class="doulist-select" data-default-tips="选择豆列">                        <span class="doulist-name"></span>                        <i class="icon-arrow"></i>                    </div>                </div>                <div class="item last">                    <label for="doulist-share-reason" class="item-label">加入理由</label>                    <div class="share-reason-wrap">                        <textarea id="doulist-share-reason" name="text" cols="6" rows="6" placeholder="这件东西, 你怎么看?"></textarea>                        <div class="tips-common doulist-at-tips" style="display:none;">                            <div class="tips-hd">提示：</div>                            <div class="tips-bd">                              <p>可以@友邻了</p>                              <a href="#" class="lnk-bn lnk-close">知道了</a>                            </div>                        </div>                    </div>                </div>            </div>            <div class="doulist-ft">                <ul class="publish-options">                    <li class="sync-mb">                        <input id="doulist-sync-mb" name="sync_to_mb" type="checkbox" autocomplete="off" checked>                        <label for="doulist-sync-mb">分享到我的广播</label>                    </li>                    <li class="reply-to-author">                        <input id="doulist-reply-author" name="reply_to_author" type="checkbox" autocomplete="off" checked>                        <label for="doulist-reply-author">同时回复给发布者</label>                    </li>                </ul>                <button type="submit" class="btn-submit disabled">完成</button>                <button type="button" class="btn-normal btn-close">取消</button>            </div>            <input type="hidden" name="ck" value="'+get_cookie("ck")+'">            <input type="hidden" name="doulist_id" value="">            <input type="hidden" name="share_reason" value="reshare">        </form>    ',i='<div class="doulist-added-tips">这件东西已经在你的豆列<a href="{URL}">{TITLE}</a>里了!</div>',c='<div class="alert-box"></div>',d='        <h6>{TITLE}</h6>        <div class="content">{CONTENT}</div>    ',k=5,o=new b({useMask:true}),q=[],a={},g,p={},e;o.data={};o.node.addClass("doulist-dialog");o.body.html(r);o.body.on("click",".btn-close",function(){o.close()});if($.media.withinPhone){o.event().once("open",function(){var v;if($.ua.os=="iphone"&&o.node.find(".dui-dialog-content").height()<window.innerHeight){return}o.event().on("open",u).on("close",function(){o.node.css("position","");window.scrollTo(0,v)});u();function u(){v=$(window).scrollTop();o.node.css("position","absolute");window.scrollTo(0,0)}})}function f(){var v,u;if(j){if(v=DBCommodityData.doulists){$.each(v,function(x,w){q.push(w);a[w.id]=w})}if(u=DBCommodityData.relatives){g={};$.each(u,function(x,w){g[w]=1})}e=DBCommodityData.selectedId}}function s(){var u=o.body.find(".doulist-select");m.init(u,q,false);o.event().once("open",function(){u.trigger("DoulistSelect:selectItem",e)});u.bind("DoulistSelect:createItem",function(v,w){q.push(w);a[w.id]=w})}function l(){var y=o.body,E=y.find(".J_DoulistForkForm"),B=E.find(".doulist-bd"),z=E.find(".doulist-ft"),D=B.find("textarea"),I=B.find(".doulist-select"),w=z.find(".btn-submit"),A=o.data;o.event().once("open",function(){var J=A.atTips;if(J&&J.show&&J.url){y.find(".doulist-at-tips").show().on("click",".lnk-close",function(K){K.stopImmediatePropagation();K.preventDefault();$(this).closest(".tips-common").remove();new Image().src=J.url})}}).on("open",function(){var P=A.doulist,N=P&&P.isEdit,L,K,O,J=$.Deferred();J.done(function(T){var Q=[],S,R;for(S in T){if(T.hasOwnProperty(S)&&(R=a[S])){Q.push(R)}}if(Q.length>0){$(n(i,Q[0])).prependTo(y)}});y.find(".doulist-added-tips").remove();if(!N){if(g){J.resolve(g)}else{if(A&&(L=A.btn)&&(K=L.data("targetId"))){if(O=p[K]){J.resolve(O)}else{$.get("/j/show/"+K+"/relative_my_doulists",{t:+new Date},function(Q){O=p[K]={};$.each(Q,function(R,S){O[S]=1});J.resolve(O)})}}}}E.attr("action",A.forkUrl);y.find("input[name=sync_to_mb]").prop("checked",A.syncToMb);y.find("input[name=reply_to_author]").prop("checked",A.replyToAuthor);if(!D.data("tagsugApi")&&D.tagsug){var M=D.tagsug({max:5})._tagsug_api[0];D.parents("form").submit(function(Q){D.val(M.cleanVal(D.val()))});D.data("tagsugApi",M)}N&&D.val(P.reasonText);o.setTitle(N?"更改豆列":"加入东西到豆列");B.find("label[for=doulist-share-reason]").text(N?"发布理由":"加入理由");if(N){z.find(".publish-options").hide()}}).on("close",function(){var K,J,L;if(J=A.request){J.abort()}if(K=D.data("tagsugApi")){K.hideSug()}if(L=A.autoCloseTimer){clearTimeout(L);A.autoCloseTimer=0}A.forkUrl=0;A.btn=0;D.val("");C(false)});E.submit(function(J){var K=this,M=$(this),L=M.find(".doulist-ft .btn-submit"),O=A.doulist,N=O&&O.isEdit;if(L.hasClass("disabled")){J.preventDefault();return}setTimeout(function(){M.find("input[name=doulist_id]").val(I.data("value"));A.request=$.ajax({url:K.action,type:K.method,data:E.serializeArray(),dataType:"json",success:function(U){var V,Q,R,X,S,T,W=A.btn,P;if(U.r===0&&(V=U.doulist)){C(true,{title:N?"变更成功!":"添加成功!",content:'东西被添加到豆列: <a href="'+V.url+'">'+V.title+"</a>"},true);if(typeof ga!=="undefined"&&ga&&ga.trackEvent){ga.trackEvent("show",N?"move_to_doulist":"fork_to_doulist",A.targetId)}if(N){if(O.currentId!==V.id&&(Q=O.itemSelector)){R=new Function("","return "+Q);X=R.call(W);if(X){X.fadeOut(500,function(){$(this).remove()})}}}if(!N&&(S=U.n_forks)!==undefined){T=W.find(".count");if(T.length>0){T.text(S)}else{W.html(W.text()+'<em class="count">'+S+"</em>")}}if(g){P=g}else{if(!(P=p[A.targetId])){P=p[A.targetId]={}}}N&&(delete P[O.currentId]);P[V.id]=1}else{alert(U.msg||"Oops 出错鸟，再试一次吧")}L.removeClass("disabled");o.body.removeClass("loading")},error:function(){L.removeClass("disabled");o.body.removeClass("loading");alert("Oops 出错鸟，再试一次吧")}})},0);L.addClass("disabled");o.body.addClass("loading");J.preventDefault()});I.bind("DoulistSelect:select",function(J,K){G()});function G(){var J=!!I.data("value");w[J?"removeClass":"addClass"]("disabled")}var v=B.clone(),u=z.clone(),F=$().add(B).add(z),H=$().add(v).add(u),x=$(c).appendTo(v);u.find(".btn-close").text("关闭");H.each(function(K,J){$(J).appendTo(o.body).hide()});function C(J,M,K){var L=o.body;if(J===true){L.addClass("alert-mode");F.hide();H.show();x.html(n(d,M));if(K){A.autoCloseTimer=setTimeout(function(){o.close();A.autoCloseTimer=0},k*1000)}}else{L.removeClass("alert-mode");F.show();H.hide()}}}f();s();l();$(document).on("click","."+h,function(w){var x=$(this),y=x.data(),v=o.data,u;v.forkUrl=$(this).data("url");v.btn=x;v.syncToMb=x.data("syncToMb")===1;v.replyToAuthor=x.data("replyToAuthor")===1;v.targetId=x.data("targetId");v.atTips={url:x.data("atTipsUrl"),show:x.data("atTipsShown")===0};if(u=y.currentDoulist){v.doulist={isEdit:true,currentId:u,reason:y.shareReason,reasonText:y.shareReasonText,itemSelector:y.itemSelector}}else{v.doulist=0}o.open();w.preventDefault();w.stopPropagation()})});

Do(function(){var b=(function(){var i={},f=+new Date*1000,g="-douban-simple-event-uid",h=Array.prototype,j=Object.prototype.toString;function k(m){return j.call(m)==="[object Function]"}if(!h.forEach){h.forEach=function(p,o){for(var n=0,m=this.length;n<m;++n){p.call(o,this[n],n,this)}}}if(!h.indexOf){h.indexOf=function(o){for(var n=0,m=this.length;n<m;++n){if(o===this[n]){return n}}return -1}}function e(o){var n,m;if((n=o[g])===undefined){m=new l(o);n=g+(f++).toString(16);o[g]=n;i[n]=m}else{m=i[n]}return m}function l(m){if(!(this instanceof l)){return l(m)}this.obj=m;this.events={}}l.prototype={constructor:l,on:function(p,o){var m=this,q=m.obj,n=m.events;p=p.split(" ");p.forEach(function(s){var r;if(!(r=n[s])){r=n[s]=[]}if(k(o)){r.push(o)}});return m},off:function(q,r){var n=this,s=n.obj,p=n.events,m=p[q],o;if(m){if(r&&(o=m.indexOf(r))>-1){m.splice(o,1)}else{if(!r){p[q]=[]}}}return n},once:function(n,o){var m=this;function p(q){o(q);m.off(n,p)}m.on(n,p);return m},fire:function(p,q){var n=this,r=n.obj,o=n.events,m=o[p]||[];m.slice(0).forEach(function(s){s.call(r,q,p)});return n}};return function(){return e(this)}}());var a=(function(){var n="dui-dialog-simple",r="dui-dialog",m="dui-dialog-overlay",q="dui-dialog-close",i="dui-dialog-shd",s="dui-dialog-content",t="dui-dialog-mask",e='            <div id="{ID}" class="'+r+'">                <span class="'+i+'"></span>                <div class="'+s+'">                    {BN_CLOSE}                    {TITLE}                    <div class="bd">{BODY}</div>                </div>            </div>',p='<a title="关闭" href="#" class="'+q+'">&times;</a>',o='<div class="hd"><h3 title="{TITLE}">{TITLE}</h3></div>',f='<div class="'+t+'"></div>',k=$(window),h=$.browser.msie&&($.browser.version|0)<7,j=Math.floor(Math.random()*+new Date),g;function l(u){if(!(this instanceof l)){return new l(u)}this.id=j++;this.config=u||{};this.opened=false;this._render();this._bind()}l.prototype={constructor:l,event:b,_render:function(){var v=this,u=v.config,w;w=$(e.replace("{ID}",n+"-"+v.id).replace("{TITLE}",o.replace(/\{TITLE\}/g,u.title||"")).replace("{BN_CLOSE}",p).replace("{BODY}",u.content||"")).hide().appendTo("body");v.node=w;v.head=$(".hd",w);v.body=$(".bd",w);v.shadow=$("."+i,w);if(u.useMask){v.shadow.remove();v.shadow=null;w.addClass(m);v._renderMask()}return v},_renderMask:function(){var u=this;if(!g){g=$(f).appendTo("body")}return u},_bind:function(){var u=this,v=u.node;v.delegate("."+q,"click",function(w){u.close();w.preventDefault();w.stopPropagation()});return u},setTitle:function(w){var u=this,v=u.head;v.find("h3").text(w).attr("title",w)},open:function(){var v=this,u=v.config;if(u.useMask){$("html").css({height:"auto",overflow:"hidden"});g.show()}v.node.show();v.event().fire("open");v.opened=true;return v},close:function(){var v=this,u=v.config;if(u.useMask){$("html").css({height:"",overflow:""});g.hide()}v.node.hide();u.useMask&&g.hide();v.event().fire("close");v.opened=false;return v}};return l}());var c=new a({}),d="    html{background:rgba(233,234,234,0.95);}    body{padding-top:50px;}    #db-global-nav,#db-nav-commodity,#footer{display:none;}    ";c.node.addClass("story-popup");$(document).on("click","a",function(e){var g=$(this),f,h;if(g.data("usePopup")){f=document.createElement("iframe");f.src=g.attr("href");c.body.empty().addClass("loading").append(f);h=f.contentDocument;f.contentWindow.onload=function(){var j=this.document,i=j.createElement("style");i.innerHTML=d;j.getElementsByTagName("head")[0].appendChild(i);c.body.removeClass("loading")};c.open();e.preventDefault()}})});

Do(function() {
    var $window = $(window),
        fixedAside = $('.fixed-aside'),
        storyList = $('.cardlist'),
        storyListTop;

    if (storyList.length === 0) {
        return;
    }

    storyListTop = storyList.offset().top;

    function scrollToTop() {
        $('body, html').animate({
            scrollTop: 0
        }, 200);
    }

    $window.scroll(function(e) {
        var scrollTop = $window.scrollTop();
        if (scrollTop > storyListTop + 80) {
            fixedAside.fadeIn(150);
        } else {
            fixedAside.hide();
        }
    });

    $('.btn-top').click(function(e) {
        e.preventDefault();
        scrollToTop();
    });

});

Do(function(){var b=(function(){var m={},j=+new Date*1000,k="-douban-simple-event-uid",l=Array.prototype,n=Object.prototype.toString;function o(q){return n.call(q)==="[object Function]"}if(!l.forEach){l.forEach=function(t,s){for(var r=0,q=this.length;r<q;++r){t.call(s,this[r],r,this)}}}if(!l.indexOf){l.indexOf=function(s){for(var r=0,q=this.length;r<q;++r){if(s===this[r]){return r}}return -1}}function i(s){var r,q;if((r=s[k])===undefined){q=new p(s);r=k+(j++).toString(16);s[k]=r;m[r]=q}else{q=m[r]}return q}function p(q){if(!(this instanceof p)){return p(q)}this.obj=q;this.events={}}p.prototype={constructor:p,on:function(t,s){var q=this,u=q.obj,r=q.events;t=t.split(" ");t.forEach(function(w){var v;if(!(v=r[w])){v=r[w]=[]}if(o(s)){v.push(s)}});return q},off:function(u,v){var r=this,w=r.obj,t=r.events,q=t[u],s;if(q){if(v&&(s=q.indexOf(v))>-1){q.splice(s,1)}else{if(!v){t[u]=[]}}}return r},once:function(r,s){var q=this;function t(u){s(u);q.off(r,t)}q.on(r,t);return q},fire:function(t,u){var r=this,v=r.obj,s=r.events,q=s[t]||[];q.slice(0).forEach(function(w){w.call(v,u,t)});return r}};return function(){return i(this)}}());var g=(function(){var i={viewport:window,fullport:document,loadingThreshold:200,url:"",param:""};function j(l){if(!(this instanceof j)){return new j(l)}var k;this.config=k=$.extend({},i,l);this.url=k.url;this.param=k.param;this.viewport=$(k.viewport);this.fullport=$(k.fullport);this.init()}j.prototype={constructor:j,event:b,init:function(){this.isLoading=false;this._halt=false;this.viewportHeight=this.viewport.height();this.fullportHeight=this.fullport.height();this.bind()},bind:function(){var l=this,k=l.viewport;k.on("resize",function(){l.viewportHeight=k.height()});k.on("scroll",function(m){l.check(m)})},check:function(k){var l=this.config.loadingThreshold;if(!this._halt&&this.fullportHeight-(this.viewportHeight+this.viewport.scrollTop())<=l){this.fetch(k)}},fetch:function(k){var l=this,m,n;if(l.isLoading){return}m=l.url;n=l.param||{};n._t=+new Date;l.event().fire("start",k);l.request=$.get(m,n).done(function(o){l.event().fire("success",o);l.fullportHeight=l.fullport.height();l.check()}).fail(function(){l.event().fire("error")}).always(function(){l.isLoading=false});l.isLoading=true},halt:function(){this._halt=true;if(this.request&&this.request.abort){this.request.abort()}},enable:function(){this._halt=false}};return j}());function c(j){var i=$(".scroll-paginator",j||document),k=i.children(".next-page").first(),m=$(".carditem").length,l=parseInt(i.children(".total-card-num").first().text(),10);i.hide();if(m==l){return}else{return k.attr("href")}}function h(j){var n=$(".commodity-info").map(function(){return $(this).data("eqid")}).get();var m=[];var o={};for(var l=0;l<n.length;l++){o[n[l]]=1}for(l=0;l<j.length;l++){var k=j.eq(l).find(".commodity-info").data("eqid");if(o[k]!==1){m.push(j[l])}}return m}var f=new g({url:c(),param:{loading:1}}),e=$('<div class="loading-tips">加载中, 请稍候...</div>'),d=$(".cardlist"),a=d.closest(".cardlist-wrap");if(!f.url||d.children(".carditem").length===0){f.halt()}f.event().on("start",function(){e.appendTo(a);ga.trackEvent("homepage","scroll_load")}).on("success",function(k){var j=$(k),l=j.find(".cardlist"),i=l.find(".carditem");if(i.length>0){var m=h(i);d.append(m);this.url=c(j);if(!this.url){this.halt()}}else{this.halt()}e.remove()}).on("error",function(){e.html('<a href="'+(this.url||location.href)+'">加载更多</a>');this.halt()})});