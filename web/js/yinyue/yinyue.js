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
        source: 'index',
        douban_music: 'http://music.douban.com'
    };
    Do.add('artistplayer', {
        path: '../js/client.js',
        type: 'js',
        requires: requires
    });
}());




Do(
        "../js/swfobject.js",
        "../js/audio_player.js",
        function(){
            var playcount=function(b,a){if(!b){return}$.get("/j/artist/incplaycount",{song_id:b,worked:a?1:0})};$("#song-chart .tabs").delegate("a","click",function(a){if(this.id){$("#song-chart .tabs a").removeClass("on");$(this).addClass("on");$("#song-chart .chart-content").hide();$("#song-chart-"+this.id.slice(-1)).show()}});window.audio_player=new AudioPlayer();var prog_handler=function(b){var a=audio_player.total_ms||b.total;audio_player.time_txt.html("-"+audio_player.mmsstime(a-b.progress))},stop_audio=function(d){audio_player.pause();var b=$("#song-chart li.now");if(!b.length){return}var a=b.find(".name").data("orig-name"),c=b.find(".name").data("short-name");if(c){b.find(".name").children("a").text(a)}if(d){playcount(b.data("sid"),true)}b.removeClass("now");b.find(".play-icon").removeClass("playing").addClass("stopped");b.find(".play-time").hide();b.find(".play-count").show()},play_audio=function(a){if(!audio_player.prepared){return}var b=a.find(".name").data("short-name");if(b){a.find(".name").children("a").text(b)}a.addClass("now");a.find(".play-icon").removeClass("stopped").addClass("playing");a.find(".play-count").hide();a.find(".play-time").show().html("00:00");var c=parseInt(a.data("seconds"));audio_player.total_ms=c?c*1000:0;audio_player.time_txt=a.find(".play-time");audio_player.play("http://"+a.data("url").replace(/%/g,"mp3"));playcount(a.data("sid"),false)};audio_player.config({on_progress:prog_handler,on_end:function(){stop_audio(true)},on_error:stop_audio,on_prepared:function(){audio_player.prepared=true}});audio_player.init();var isNewPlayer=$("#song-chart").hasClass("new-player");$("#song-chart").delegate("li","mouseenter",function(){$(this).addClass("hover_on")}).delegate("li","mouseleave",function(){$(this).removeClass("hover_on")}).delegate("li","click",function(a){if(isNewPlayer!==true){if(!$(this).hasClass("now")){stop_audio();play_audio($(this))}else{stop_audio()}}});if(isNewPlayer===true){Do("artistplayer",function(){var a=false;artistsPlayer.ready(function(b,c){a=true});$("#song-chart").delegate("li .player-playable","click",function(c){var b=$(this).data("sid");if(b){a&&artistsPlayer.play(b)}}).delegate(".span-player-btn","click",function(){var c=$("#song-chart .chart-content:visible li"),b=$.map(c,function(d){return $(d).data("sid")});a&&artistsPlayer.play(b)}).delegate(".span-player-btn","hover",function(b){if(b.type=="mouseenter"){$(this).addClass("hover")}else{$(this).removeClass("hover")}})})};
        }
    );




