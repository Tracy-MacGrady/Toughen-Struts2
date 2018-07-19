;(function(){
    if(window.__player_configs){ return; }
    // Configs From Server Side
    window.DOUBAN_MUSIC = 'http://music.douban.com';
    Do.add('json', {path: '../js/json.js', type: 'js'});
    Do.add('flash-transport', {path: '../js/flashtransport.js', type: 'js'});
    Do.add('xdm-transport', {path: '../js/xdmtransport.js', type: 'js'});
    Do.add('jstorage-transport', {path: '../js/jstoragetransport.js', type: 'js'});
    var isSafari = typeof window.navigator !== 'undefined' && window.navigator.vendor === 'Apple Computer, Inc.';
    var supportTouch = ('ontouchstart' in document.documentElement);
    var transport, requires = [];
    if(isSafari && !supportTouch) {
        transport = 'flash';
        requires.push('flash-transport');
    } else {
        transport = 'easyxdm';
        requires.push('xdm-transport');
    }
    if(!window.JSON){
        requires.push('json');
    }
    window.__player_configs = {
        remote: 'http://music.douban.com/artists/player/xdmserver',
        conn_client: '/swf/53069/conn_client.swf',
        source: 'site',
        douban_music: 'http://music.douban.com'
    };
    Do.add('artistplayer', {
        path: '../js/client.js',
        type: 'js',
        requires: requires
    });
}());