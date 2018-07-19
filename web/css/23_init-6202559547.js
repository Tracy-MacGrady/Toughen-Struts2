!function(win,doc){var extConfig,loaded={},loadList={},loadingFiles={},config={autoLoad:!0,timeout:6e3,coreLib:[],mods:{}},jsSelf=function(){var files=doc.getElementsByTagName("script");return files[files.length-1]}(),globalList=[],readyList=[],isReady=!1,publicData={},publicDataStack={},isArray=Array.isArray||function(obj){return"[object Array]"==Object.prototype.toString.call(obj)},getMod=function(e){var mod,mods=config.mods;return mod="string"==typeof e?mods[e]?mods[e]:{path:e}:e},load=function(url,type,charset,cb){var wait,n,t,done=function(){loaded[url]=1,cb&&cb(url),cb=null,win.clearTimeout(wait)};if(url){if(loaded[url])return loadingFiles[url]=!1,cb&&cb(url),void 0;if(loadingFiles[url])return setTimeout(function(){load(url,type,charset,cb)},10),void 0;if(loadingFiles[url]=!0,wait=win.setTimeout(function(){if(config.timeoutCallback)try{config.timeoutCallback(url)}catch(ex){}},config.timeout),t=type||url.toLowerCase().split(/\./).pop().replace(/[\?#].*/,""),"js"===t)n=doc.createElement("script"),n.setAttribute("src",url),n.setAttribute("async",!0);else{if("css"!==t)throw new Error('Wrong URL "'+url+'" or Unsupported File Type "'+t+'" // Do.js');n=doc.createElement("link"),n.setAttribute("type","text/css"),n.setAttribute("rel","stylesheet"),n.setAttribute("href",url)}charset&&(n.charset=charset),"css"===t?setTimeout(function(){done()},0):(n.onerror=function(){done(),n.onerror=null},n.onload=n.onreadystatechange=function(){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(setTimeout(function(){done()},0),n.onload=n.onreadystatechange=null)}),jsSelf.parentNode.insertBefore(n,jsSelf)}},loadDeps=function(deps,cb){function callback(){--len||(loadList[id]=1,cb())}var id,m,mod,len,i=(config.mods,0);if(id=deps.join(""),len=deps.length,loadList[id])return cb(),void 0;for(;m=deps[i++];)mod=getMod(m),mod.requires?loadDeps(mod.requires,function(mod){return function(){load(mod.path,mod.type,mod.charset,callback)}}(mod)):load(mod.path,mod.type,mod.charset,callback)},/*!
   * contentloaded.js
   *
   * Author: Diego Perini (diego.perini at gmail.com)
   * Summary: cross-browser wrapper for DOMContentLoaded
   * Updated: 20101020
   * License: MIT
   * Version: 1.2
   *
   * URL:
   * http://javascript.nwbox.com/ContentLoaded/
   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
   *
   */
contentLoaded=function(fn){var done=!1,top=!0,doc=win.document,root=doc.documentElement,add=doc.addEventListener?"addEventListener":"attachEvent",rem=doc.addEventListener?"removeEventListener":"detachEvent",pre=doc.addEventListener?"":"on",init=function(e){("readystatechange"!==e.type||"complete"===doc.readyState)&&(("load"===e.type?win:doc)[rem](pre+e.type,init,!1),!done&&(done=!0)&&fn.call(win,e.type||e))},poll=function(){try{root.doScroll("left")}catch(e){return setTimeout(poll,50),void 0}init("poll")};if("complete"===doc.readyState)fn.call(win,"lazy");else{if(doc.createEventObject&&root.doScroll){try{top=!win.frameElement}catch(e){}top&&poll()}doc[add](pre+"DOMContentLoaded",init,!1),doc[add](pre+"readystatechange",init,!1),win[add](pre+"load",init,!1)}},fireReadyList=function(){for(var list;list=readyList.shift();)d.apply(null,list)},d=function(){var fn,id,args=[].slice.call(arguments);return config.autoLoad&&config.coreLib.length&&!loadList[config.coreLib.join("")]?(loadDeps(config.coreLib,function(){d.apply(null,args)}),void 0):globalList.length&&!loadList[globalList.join("")]?(loadDeps(globalList,function(){d.apply(null,args)}),void 0):("function"==typeof args[args.length-1]&&(fn=args.pop()),id=args.join(""),(0===args.length||loadList[id])&&fn?(fn(),void 0):(loadDeps(args,function(){loadList[id]=1,fn&&fn()}),void 0))};if(d.add=function(sName,oConfig){sName&&oConfig&&oConfig.path&&(config.mods[sName]=oConfig)},d.delay=function(){var args=[].slice.call(arguments),delay=args.shift();win.setTimeout(function(){d.apply(this,args)},delay)},d.global=function(){var args=isArray(arguments[0])?arguments[0]:[].slice.call(arguments);globalList=globalList.concat(args)},d.ready=function(){var args=[].slice.call(arguments);return isReady?d.apply(this,args):(readyList.push(args),void 0)},d.css=function(s){var css=doc.getElementById("do-inline-css");css||(css=doc.createElement("style"),css.type="text/css",css.id="do-inline-css",jsSelf.parentNode.insertBefore(css,jsSelf)),css.styleSheet?css.styleSheet.cssText=css.styleSheet.cssText+s:css.appendChild(doc.createTextNode(s))},d.setData=d.setPublicData=function(prop,value){var cbStack=publicDataStack[prop];if(publicData[prop]=value,cbStack)for(;cbStack.length>0;)cbStack.pop().call(this,value)},d.getData=d.getPublicData=function(prop,cb){return publicData[prop]?(cb(publicData[prop]),void 0):(publicDataStack[prop]||(publicDataStack[prop]=[]),publicDataStack[prop].push(function(value){cb(value)}),void 0)},d.setConfig=function(n,v){return config[n]=v,d},d.getConfig=function(n){return config[n]},extConfig=jsSelf.getAttribute("data-cfg-autoload"),extConfig&&(config.autoLoad="true"===extConfig.toLowerCase()?!0:!1),extConfig=jsSelf.getAttribute("data-cfg-corelib"),extConfig&&(config.coreLib=extConfig.split(",")),"undefined"!=typeof Do){globalList=Do.global.mods,config.mods=Do.mods;for(var act;act=Do.actions.shift();)d.apply(null,act);delete Do}win.Do=d,contentLoaded(function(){isReady=!0,fireReadyList()})}(window,document);