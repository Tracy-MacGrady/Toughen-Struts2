
    /* for room nav */
    Do(function () {
        $('.nav-items .opt > a').click(function (e) {
            // 不显示管理菜单
            if (e.target.id === 'admin-icon') {
              return;
            }
            var self = this;
            $(this).next().show().blur_hide();
            if (!$('ul', this).is(':hidden')) {
                if (roomHoverColor) {
                    $(this).css('background-color', roomHoverColor);
                }
                $(this).addClass('admin-icon-active');
            }
            $(document.body).click(function (e) {
                if (e.target.id !== 'admin-icon') {
                    $(self).removeAttr('class');
                }
                if (e.target.id !== 'more-icon' && roomHoverColor) {
                    $(self).removeAttr('style');
                }
            });
            e.preventDefault();
        });
    });

    Do(function(){
    if (!window.DoubanShareMenuList) {
        window.DoubanShareMenuList = [];
    }
    var cache_url = cache_url || {};
    (function(u){ if(cache_url[u]){ return; } cache_url[u] = true; Do(function(){
        $.ajax({url:u,dataType:'script',cache:true});
    }); })('css\1_sharebutton.js');});
    
        (typeof Do === 'function' ? Do : $).call(null, function(){
                if (typeof hasInitFavBtn !== 'undefined') {
                    return;
                }
                var fav_type = 'default'; 
                var fav_url = '#'; 
                hasInitFavBtn = 1;

                
var api_userlist = 'http://www.douban.com/j/like',
$win = $(window),
updateFavNum = function(node, n) {
  var p = node.parent(), favNum = p.find('.fav-num'), num;

  if (favNum.length === 0) {
  // 日记的情况
    favNum = p.find('.fav-num-note');
  }

  $('#fav-userlist').hide();
  if (favNum.length === 0) {
    favNum = $(['<span class="fav-num" data-tkind="', node.data('tkind'),'" data-tid="', node.data('tid'),'"><a href="' + fav_url + '">0人</a>喜欢</span>'].join(''));
    p.prepend(favNum);
  }

  num = parseInt(favNum.find('a').text(),10) + n;
  if (num === 0) {
    favNum.remove();
    return;
  }
  favNum.find('a').text(num + '人');
},
renderUserList = function(node, da) {
  if (!$.isArray(da)) {
    $('#fav-userlist').hide();
    return;
  }

  var i = 0, o, pos, h, htmlstr = ['<ul>'];
  if (da.length > 0){
      for (; o = da[i++]; ) {
        htmlstr.push([
         '<li>',
         '<a href="http://www.douban.com/people/', o.uid, '" target="_blank" class="pic"><img src="', o.icon_avatar,'" width="24" height="24"></a>',
         '<a href="http://www.douban.com/people/', o.uid, '" target="_blank">', o.screen_name,'</a>',
         '</li>'
        ].join(''));
      }
      htmlstr.push('</ul>');
  } else {
      htmlstr = ['<span>啊哦…喜欢这个的人都不愿意露脸</span>'];
  }


  node.removeClass('arrow-bottom').find('.bd').css({
    height: i > 9 ? 220 : 'auto',
    overflow: i > 9 ? 'auto' : 'hidden'
  }).html(htmlstr.join(''));

  pos = node.offset();
  h = node.height();

  if (pos.top - $win.scrollTop() + h > $win.height() - 40) {
    node.addClass('arrow-bottom').css('top', pos.top - h - 55);
  }
};

$('html').bind('click', function(e) {
  var list = $('#fav-userlist');
  if (list.length === 0 ||
      list.css('display') === 'none' ||
      e.target.tagName === 'A') {
    return;
  }
  if (!$.contains(list[0], e.target)) {
    list.hide();
  }
});

$('html').delegate('.fav-num a', 'click', function(e) {
  if (fav_type !== 'default') {
    return;
  }
  e.preventDefault();
  var el = $(e.currentTarget),
  pos = el.offset(),
  params = el.parent().data(),
  dataId = [params.tkind, params.tid].join(''),
  fav_user_list = $('#fav-userlist');

  if (fav_user_list.length === 0) {
    fav_user_list = $([
    '<div id="fav-userlist" class="fav-userlist">',
    '<div class="hd"><a href="" class="btn-close">X</a></div>',
    '<div class="bd">',
    '</div><i class="arrow"></i>',
    '</div>'
    ].join('')).appendTo('body');
    fav_user_list.find('.btn-close').click(function(e){
      e.preventDefault();
      fav_user_list.hide();
    });
  }

  fav_user_list.removeClass('arrow-bottom').
      find('.bd').
      css('height', 'auto').
      html('加载中...');

  fav_user_list.css({
    top: pos.top + 22,
    'margin-left': (function(con){
      return -1 * Math.floor(con.width()/2 - pos.left + con.offset().left) -10;
    })($('#content'))
  }).show();

  $.get(api_userlist,
  {
      tkind: params.tkind,
      tid: params.tid,
      alt: 'xd'
  },
  function(e){
    renderUserList(fav_user_list, e);
  }, 'jsonp');
});

            });
        