$(document).ready(function(){
    jinqiInit1();
    jinqiInit2();
});
function jinqiInit1(){
    var h2 = $("#jinqih2");
    for (var j = 0; j < 2; j++) {
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
            var li_ul_li1_a = $("<a></a>");
            li_ul_li1_a.attr("href", "");
            var li_ul_li1_a_b = $("<b></b>");
            li_ul_li1_a_b.addClass("play-icon");
            var li_ul_li1_a_img = $("<img/>");
            li_ul_li1_a_img.addClass("lazy");
            li_ul_li1_a_img.attr("src", "picture/40_p2151136189.jpg");
            li_ul_li1_a_img.attr("alt", "惩戒者");
            li_ul_li1_a_img.attr("rel", "nofollow");
            li_ul_li1_a.append(li_ul_li1_a_b);
            li_ul_li1_a.append(li_ul_li1_a_img);
            li_ul_li1.append(li_ul_li1_a);
            
            var li_ul_li2 = $("<li></li>");
            
            li_ul_li2.addClass("title");
            
            var li_ul_li2_a = $("<a>惩戒者</a>");
            li_ul_li2_a.addClass("");
            li_ul_li2_a.attr("href", "");
            li_ul_li2.append(li_ul_li2_a);
            
            
            li_ul.append(li_ul_li1);
            li_ul.append(li_ul_li2);
            li.append(li_ul);
            ul.append(li);
        }
        
        div.append(ul);
		 h2.append(div);
    }
    
   
    
}

function jinqiInit2(){
	 var h2 = $("#jinqih2");
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
		li_ul_li1_a_img.attr("src","picture/32_p2153323323.jpg");
		li_ul_li1_a_img.attr("alt","爸爸去哪儿");
		li_ul_li1_a_img.attr("rel","nofollow");
		li_ul_li1_a.append(li_ul_li1_a_b);
		li_ul_li1_a.append(li_ul_li1_a_img);
		li_ul_li1.append(li_ul_li1_a);
		
		var li_ul_li2 = $("<li></li>");
		 
        li_ul_li2.addClass("title");
		
		var li_ul_li2_a=$("<a>爸爸去哪儿</a>");
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
