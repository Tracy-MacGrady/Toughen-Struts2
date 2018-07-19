$(function(){
    $("#menu1 .clearfix").addClass("on");
    $("#content_menu1").show();

    $(".music_new .content").hide();
    $("#newcontent1").show();

    $(".music_genre .content1").hide();
    $("#gscontent1").show();

    $(".music_genre .content2").hide();
    $("#grcontent1").show();

    (function bind_music_x(){
        var c=arguments.callee
            $('.music_x').click(function(){
                    if(confirm("你确定要" + this.title)){
                    $("#music_rec").load_withck(
                        "/j/music/j_music_rec",{s:this.rel},c
                        )
                    }
                    })
    })();

    function init_tab(e, t, c){
        $(e).mousedown(function(){
            $(t+" .tabs a").removeClass("on");
            $(this).addClass("on");
            $(t+" .content").hide();
            $(c+this.id.slice(-1)).show();

            $.get("/j/music/j_tab_count",{id:this.id})
        })
    }

    function init_tab2(e, t, c1, c2){
        $(e).mousedown(function(){
            $(t+" .tabs a").removeClass("on");
            $(this).addClass("on");

            $(t+" .content1").hide();
            $(t+" .content2").hide();
            $(c1+this.id.slice(-1)).show();
            $(c2+this.id.slice(-1)).show();

            $.get("/j/music/j_tab_count",{id:this.id})

        })
    }
    for(var i=3;i;--i){
      init_tab("#new"+i, ".music_new", "#newcontent")
    }

    for(var i=4;i;--i){
      init_tab2("#gnew"+i, ".music_genre", "#gscontent", "#grcontent")
    }

     $('.programme .content').hover(
        function(){
            $(this).find('.hover-tip').show();
        },
        function(){
            $(this).find('.hover-tip').hide();
        }
    );

    $('.programme .tabs').delegate('.tab', 'click', function(){
        if (this.id){
            var $current_tab = $('.programme .tabs .on');
            if (!$current_tab.length) return;
            $current_tab.removeClass('on');
            $(this).addClass('on');
            $('.programme .programme-content').hide();
            $('#programme-content-' + this.id.slice(-1)).show();
            $('#programme-content-' + this.id.slice(-1) + ' li').show();
        }
    });

    Do('artistplayer', function () {
        var isPlayerLoaded = false;
        artistsPlayer.ready(function(artistsPlayer, hasPlayer){
            isPlayerLoaded = true;
        });
        $('.player-playable').hover(
            function () {
                $(this).find('.player-round-btn-bg').addClass('hover');
            },
            function () {
                $(this).find('.player-round-btn-bg').removeClass('hover');
            }
        ).click(function () {
            var sids = $(this).data('sids');
            if (sids && sids.length > 0) {
                isPlayerLoaded && artistsPlayer.play(sids);
            }
        });
    });

});