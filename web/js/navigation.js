$(document).ready(function(){
	navigationInit();
});
function navigationInit(){
	var nav=$("#db-global-nav");
	var divbd=$("<div></div>");
	divbd.addClass("bd");
	/////div1
	var divbd1=$("<div></div>");
	divbd1.addClass("top-nav-info");
	var divbd1_a1=$("<a>登录</a>");
	divbd1_a1.attr("href","");
	divbd1_a1.attr("rel","nofollow");
	var divbd1_a2=$("<a>注册</a>");
	divbd1_a2.attr("href","");
	divbd1.append(divbd1_a1);
	divbd1.append(divbd1_a2);
	
	/////div2
	var divbd2=$("<div></div>");
	divbd2.addClass("global-nav-items");
	var divbd2_ul=$("<ul></ul>");
	for(var i=0;i<10;i++){
		var divbd2_li=$("<li></li>");
		var divbd2_li_a=$("<a>乔</a>");
		divbd2_li_a.attr("href","");
		divbd2_li_a.attr("target","_blank");
		divbd2_li.append(divbd2_li_a);
		divbd2_ul.append(divbd2_li);
	}
	///liQ
	var divbd2_liQ=$("<li></li>");
	var divbd2_liQ_a=$("<a></a>");
	divbd2_liQ_a.attr("href","");
	divbd2_liQ_a.addClass("bn-more");
	var divbd2_liQ_span=$("<span>更多</span>");
	divbd2_liQ_a.append(divbd2_liQ_span);
	///liQ  div
	var divbd2_liQ_div=$("<div></div>");
	
	////table
	var divbd2_liQ_table=$("<table></table>");
	divbd2_liQ_table.attr("cellpadding","0");
	divbd2_liQ_table.attr("cellspacing","0");
	//tr
	var tr1=$("<tr></tr>");
	var td1=$("<td></td>");
	var a1=$("<a>九点</a>");
	a1.attr("href","");
	a1.attr("onclick","moreurl(this, {from: 'top-nav-click-9', uid: '0'})");
	a1.attr("target","_blank");
	td1.append(a1);
	tr1.append(td1);
	//te2
	var tr2=$("<tr></tr>");
	var td2=$("<td></td>");
	var a2=$("<a>阿尔法城</a>");
	a2.attr("href","");
	a2.attr("target","_blank");
	a2.attr("onclick","moreurl(this, {from: 'top-nav-click-9', uid: '0'})");
	td2.append(a2);
	tr2.append(td2);
	//tr3
	var tr3=$("<tr></tr>");
	var td3=$("<td></td>");
	var a3=$("<a>移动应用</a>");
	a3.attr("onclick","moreurl(this, {from: 'top-nav-click-9', uid: '0'})");
	a3.attr("href","");
	a3.attr("target","_blank");
	td3.append(a3);
	tr3.append(td3);
	
	divbd2_liQ_table.append(tr1);
	divbd2_liQ_table.append(tr2);
	divbd2_liQ_table.append(tr3);
	
	
	divbd2_liQ_div.append(divbd2_liQ_table);
	
	divbd2_liQ.append(divbd2_liQ_a);
	divbd2_liQ.append(divbd2_liQ_div);
	
	
	divbd2_ul.append(divbd2_liQ);
	
	divbd2.append(divbd2_ul);
	
	divbd.append(divbd1);
	divbd.append(divbd2);
	nav.append(divbd);
}
