var _check_hijack = function () {
    var _sig = "+RhyF4tf", _login = false, bid = get_cookie('bid');
    if (location.protocol != "file:" && (
            typeof(bid) != "string" && _login ||
            typeof(bid) == "string" && bid.substring(0,8) != _sig)) {
        location.href += (/\?/.test(location.href)?"&":"?") + (
                "_r=" + Math.random().toString(16).substring(2));
    }};
if (typeof(Do) != 'undefined') Do(_check_hijack);
else if (typeof(get_cookie) != 'undefined') _check_hijack();