$(document).ready(function(){
    zaixianInit1();
	zaixianInit2();
});
function zaixianInit1(){
    var h2 = $("#zaixianh2");
   
    var div = $("<div></div>");
    div.addClass("s");
    var ul = $("<ul></ul>");
    ul.addClass("movies-list");
    for (var i = 0; i < 5; i++) {
        var li = $("<li></il>");
        li.addClass("list-item");
        var li_ul = $("<ul></ul>");
        li_ul.addClass("");
		///li1
        var li_ul_li1 = $("<li></il>");
        li_ul_li1.addClass("poster");
		var li_ul_li1_a=$("<a></a>");
		li_ul_li1_a.attr("href","");
		var li_ul_li1_a_b=$("<b></b>");
		li_ul_li1_a_b.addClass("play-icon");
		var li_ul_li1_a_img=$("<img/>");
		li_ul_li1_a_img.addClass("lazy");
		li_ul_li1_a_img.attr("src","picture/p1936517673.jpg");
		li_ul_li1_a_img.attr("alt","招魂");
		li_ul_li1_a_img.attr("rel","nofollow");
		li_ul_li1_a.append(li_ul_li1_a_b);
		li_ul_li1_a.append(li_ul_li1_a_img);
		li_ul_li1.append(li_ul_li1_a);
		
		var li_ul_li2 = $("<li></li>");
		 
        li_ul_li2.addClass("title");
		
		var li_ul_li2_a=$("<a>招魂</a>");
		li_ul_li2_a.addClass("");
		li_ul_li2_a.attr("href","");
		li_ul_li2.append(li_ul_li2_a);
		
		
		li_ul.append(li_ul_li1);
		li_ul.append(li_ul_li2);
		li.append(li_ul);
		ul.append(li);
    }
    
    div.append(ul);
    h2.append(div);
	
}

function zaixianInit2(){
	 var h2 = $("#zaixianh2");
	var div = $("<div></div>");
    div.addClass("s");
    var ul = $("<ul></ul>");
    ul.addClass("movies-list");
    for (var i = 0; i < 5; i++) {
        var li = $("<li></il>");
        li.addClass("list-item");
        var li_ul = $("<ul></ul>");
        li_ul.addClass("");
		///li1
        var li_ul_li1 = $("<li></il>");
        li_ul_li1.addClass("poster");
		var li_ul_li1_a=$("<a></a>");
		li_ul_li1_a.attr("href","");
		var li_ul_li1_a_b=$("<b></b>");
		li_ul_li1_a_b.addClass("play-icon");
		var li_ul_li1_a_img=$("<img/>");
		li_ul_li1_a_img.addClass("lazy");
		li_ul_li1_a_img.attr("src","picture/30_p1931767295.jpg");
		li_ul_li1_a_img.attr("alt","百年乡情 第一季");
		li_ul_li1_a_img.attr("rel","nofollow");
		li_ul_li1_a.append(li_ul_li1_a_b);
		li_ul_li1_a.append(li_ul_li1_a_img);
		li_ul_li1.append(li_ul_li1_a);
		
		var li_ul_li2 = $("<li></li>");
		 
        li_ul_li2.addClass("title");
		
		var li_ul_li2_a=$("<a>百年乡情 第一季</a>");
		li_ul_li2_a.addClass("");
		li_ul_li2_a.attr("href","");
		var li_ul_li2_span=$("<span>[剧集]</span>");
		li_ul_li2_span.addClass("");
		li_ul_li2.append(li_ul_li2_a);
		li_ul_li2.append(li_ul_li2_span);
		
		
		li_ul.append(li_ul_li1);
		li_ul.append(li_ul_li2);
		li.append(li_ul);
		ul.append(li);
    }
    
    div.append(ul);
	 h2.append(div);
}
