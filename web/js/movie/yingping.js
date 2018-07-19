$(document).ready(function(){
    yingpingInit();
});
function yingpingInit(){
    var div = $(".reviews-bd");
    for (var i = 0; i < 4; i++) {
        var review = $("<div></div>");
        review.addClass("review");
        //hd
        var review_hd = $("<div></div>");
        review_hd.addClass("review-hd");
        var review_hd_a = $("<a></a>");
        review_hd_a.attr("href", "");
        var review_hd_a_img = $("<img/>");
        review_hd_a_img.addClass("lazy");
        review_hd_a_img.attr("src", "picture/80_p1955514081.jpg");
        review_hd_a_img.attr("alt", "傲骨贤妻 第五季");
        
        review_hd_a.append(review_hd_a_img);
        review_hd.append(review_hd_a);
        ///bd
        var review_bd = $("<div></div>");
        review_bd.addClass("review-bd");
        
        var review_bd_h3 = $("<h3></h3>");
        var review_bd_h3_a = $("<a>510，当总裁文模式开启之后......</a>");
        review_bd_h3_a.addClass("");
        review_bd_h3_a.attr("href", "");
        review_bd_h3.append(review_bd_h3_a);
        
        var review_bd_meta = $("<div></div>");
        review_bd_meta.addClass("review-meta");
        var review_bd_meta_a1 = $("<a>左儿</a>");
        review_bd_meta_a1.append("评论");
        review_bd_meta_a1.attr("href", "");
        var review_bd_meta_a2 = $("<a>《傲骨贤妻 第五季》</a>");
        review_bd_meta_a2.attr("href", "");
        var review_bd_meta_span=$("<span></span>");
		review_bd_meta_span.addClass("allstar50");
		review_bd_meta.append(review_bd_meta_a1);
		review_bd_meta.append(review_bd_meta_a2);
		review_bd_meta.append(review_bd_meta_span);
		
		
        review_bd.append(review_bd_h3);
        review_bd.append(review_bd_meta);
        //////review-content
         var review_content = $("<div>　据说s5ep10是全剧第100集，意义特殊，所以故意的吗，几乎所有主要角色交织出场，八仙过海，各显事逼。A&amp;W编剧神笔，给will设了一场意念中的左右互搏，知己知彼，靠自己脑补完成了一场红蓝对弈.掀桌时代后的os终于集中呈现，你就向来...</div>");
		 review_content.addClass("review-content");
		var review_content_a=$("<a>(全文)</a>");
		review_content_a.attr("href","");
		review_content.append(review_content_a);
		
        review.append(review_hd);
        review.append(review_bd);
		review.append(review_content);
        div.append(review);
    }
}
