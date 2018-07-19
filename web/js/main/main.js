$(document).ready(function() {
	creatOnline();
	creatAlbums();
});
function creatOnline() {
	var asdf = $(".online");
	var newUl = $("<ul></ul>");
	var jsons = {
		atext : [ {
			name : "【土豪装备大赛】晒土豪装备，赢土豪金5s",
			time : "时间：9月16日 - 12月16日",
			num : "1266人参加"
		}, {
			name : "妈妈再打我一次",
			time : "时间：10月17日 - 1月16日",
			num : "2433人参加"
		}, {
			name : "截图猜电影",
			time : "时间：12月4日 - 3月3日",
			num : "2793人参加"
		}, {
			name : "给我看看你喜爱的音乐人作品",
			time : "时间：11月27日 - 12月27日",
			num : "692人参加"
		}, {
			name : "一张你最疯狂的照片（晒照片，赢礼品）",
			time : "时间：10月1日 - 1月1日",
			num : "1376人参加"
		} ]
	};
	for ( var i = 0; i < 5; i++) {
		var newLi = $("<li></li>");
		var div1 = $("<div></div>");
		div1.addClass("title");
		var a1 = $("<a>" + jsons.atext[i].name + "</a>");
		a1.attr("href", "login1.jsp");
		div1.append(a1);
		var div2 = $("<div>" + jsons.atext[i].time + "</div>");
		div2.addClass("desc");
		var br = $("<br/>");
		var span = $("<span>" + jsons.atext[i].num + "</span>");
		span.addClass("num");
		div2.append(br);
		div2.append(span);
		newLi.append(div1);
		newLi.append(div2);
		newUl.append(newLi);
	}
	;
	asdf.append(newUl);
}

function creatAlbums() {
	var albums = $(".albums");
	var newUl = $("<ul></ul>");
	var jsons = {
		li : [ {
			src : "picture/3_p1380001581.jpg",
			href : "xinxi.jsp",
			num : "45张照片",
			name : "平江旧梦"
		},{
			src : "picture/5_p387736718.jpg",
			href : "xinxi.jsp",
			num : "94张照片",
			name : "青葱岁月☉老娘也曾萝莉过"
		},{
			src : "picture/9_p2161415038.jpg",
			href : "xinxi.jsp",
			num : "381张照片",
			name : "一些不错的绘画教程～～共享给同学们～"
		},{
			src : "picture/7_p1638684103.jpg",
			href : "xinxi.jsp",
			num : "234张照片",
			name : ""
		} ]
	};
	for ( var i = 0; i < 4; i++) {
		var newLi = $("<li></li>");
		var div1 = $("<div></div>");
		div1.addClass("pic");
		var a1 = $("<a></a>");
		a1.attr("href",jsons.li[i].href);
		var img = $("<img alt=''/>");
		img.attr("src", jsons.li[i].src);
		a1.append(img);
		div1.append(a1);
		var a2 = $("<a>"+jsons.li[i].name+"</a>");
		a2.attr("href", jsons.li[i].href);
		var span = $("<span>"+jsons.li[i].num+"</span>");
		span.addClass("num");
		newLi.append(div1);
		newLi.append(a2);
		newLi.append(span);
		newUl.append(newLi);
	}
	;
	albums.append(newUl);
}

