 (function (global) {
        var newNode = global.document.createElement('script'),
            existingNode = global.document.getElementsByTagName('script')[0],
            adSource = 'http://erebor.douban.com/',
            userId = '',
            browserId = '+RhyF4tf47M',
            ipAddress = '123.121.42.146',
            criteria = '3:/',
            preview = '',
            debug = false,
            adSlots = ['dale_music_home_left_middle', 'dale_music_home_top_right', 'dale_music_home_top_right2'];

        global.DoubanAdRequest = {src: adSource, uid: userId, bid: browserId, ip: ipAddress, crtr: criteria, prv: preview, debug: debug};
        global.DoubanAdSlots = (global.DoubanAdSlots || []).concat(adSlots);

        newNode.setAttribute('type', 'text/javascript');
        newNode.setAttribute('src', '../js/adcdc.js');
        newNode.setAttribute('async', true);
        existingNode.parentNode.insertBefore(newNode, existingNode);
    })(this);