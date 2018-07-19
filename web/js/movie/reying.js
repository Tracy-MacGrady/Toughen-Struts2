$(document).ready(function(){
	reyingInit();
});
function reyingInit(){
	var divUL=$(".ui-slide-content");
	for(var i=0;i<5;i++){
		var li=$("<li></li>");
		li.addClass("ui-slide-item s");
		var li_ul=$("<ul></ul>");
		li_ul.addClass("");
		////li1
		var li1=$("<li></li>");
		li1.addClass("poster");
		var li1_a=$("<a></a>");
		li1_a.attr("href","");
		var li1_a_img=$("<img/>");
		li1_a_img.attr("src","picture/2_p2159072475.jpg");
		li1_a_img.attr("alt","无人区");
		li1_a_img.attr("rel","nofollow");
		li1_a_img.addClass("");
		li1_a.append(li1_a_img);
		li1.append(li1_a);
		////li2
		var li2=$("<li></li>");
		li2.addClass("title");
		var li2_a=$("<a>无人区</a>");
		li2_a.addClass("");
		li2_a.attr("href","");
		li2.append(li2_a);
		////li3
		var li3=$("<li></li>");
		li3.addClass("rating");
		var li3_span1=$("<span></span>");
		li3_span1.addClass("rating-star allstar45");
		var li3_span2=$("<span>8.4</span>");
		li3_span2.addClass("subject-rate");
		li3.append(li3_span1);
		li3.append(li3_span2);
		/////li4
		var li4=$("<li></li>");
		li4.addClass("ticket_btn");
		var li4_span=$("<span></span>");
		var li4_span_a=$("<a>选座购票</a>");
		li4_span.append(li4_span_a);
		li4.append(li4_span);
		
		
		
		li_ul.append(li1);
		li_ul.append(li2);
		li_ul.append(li3);
		li_ul.append(li4);
		li.append(li_ul);
		divUL.append(li);
	}
}
