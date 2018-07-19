$(document).ready(function(){
    doulieInit();
});
function doulieInit(){
    var div = $(".doulists-bd");
    for (var i = 0; i < 4; i++) {
        var doulist = $("<div></div>");
        doulist.addClass("doulist");
		//hd
        var doulist_hd = $("<div></div>");
        doulist_hd.addClass("doulist-hd");
        var doulist_hd_a = $("<a></a>");
		doulist_hd_a.attr("href","");
		 var doulist_hd_img = $("<img/>");
		 doulist_hd_img.addClass("lazy");
		 doulist_hd_img.attr("src","picture/72_u1206987-1.jpg");
		doulist_hd_a.append(doulist_hd_img);
		doulist_hd.append(doulist_hd_a);
		
		//bd
        var doulist_bd = $("<div></div>");
        doulist_bd.addClass("doulist-bd");
         var doulist_bd_h3 = $("<h3></h3>");
         var doulist_bd_h3_a = $("<a>奥斯卡最佳影片</a>");
		 doulist_bd_h3_a.addClass("");
		 doulist_bd_h3_a.attr("href","");
		 var doulist_bd_meta = $("<div>共86部影片 来自</div>");
		  var doulist_bd_meta_a = $("<a>Boward</a>");
		  doulist_bd_meta_a.attr("href","");
		  doulist_bd_meta.append(doulist_bd_meta_a);
		
		doulist_bd_h3.append(doulist_bd_h3_a);
        doulist_bd.append(doulist_bd_h3);
		doulist_bd.append(doulist_bd_meta);
		
		
        doulist.append(doulist_hd);
        doulist.append(doulist_bd);
        div.append(doulist);
    }
}
