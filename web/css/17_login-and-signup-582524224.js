define("widget/login-and-signup",["jquery","ui/dialog_new"],function($,dialog){var defaultOptions={type:"login",context:"store",closable:!0},InlineDialog=function(opts){$.extend(this,defaultOptions,opts),this.render()};return $.extend(InlineDialog.prototype,{render:function(){this.dialog=dialog({content:this.getTmpl(),closable:this.closable}).addClass("dialog-login-and-signup").open();var loadingBox=this.dialog.el.find(".loading"),iframe=this.dialog.el.find("iframe");iframe.load(function(){iframe.show(),loadingBox.hide()})},getTmpl:function(){return'<div class="loading">正在加载，请稍候…</div><iframe scrolling="no" frameborder="0" src="'+Ark.DOUBAN+"/accounts/ark/"+this.context+"_login_signup?type="+this.type+'"></iframe>'}}),InlineDialog});