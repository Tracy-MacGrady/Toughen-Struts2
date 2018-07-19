$(document).ready(function(){
	init();
});
function init(){	
	 var alldivUL = $(".cardlist-wrap ul");
	    for (var i = 0; i < 5; i++) {
	        var newLi = $("<li></li>");
	        newLi.addClass("carditem card-story-large");
	        //creat hd div
	        var newCard_hd = $("<div></div>");
	        newCard_hd.addClass("card-hd");
	        var newCard_bd = $("<div></div>");
	        newCard_hd.addClass("card-bd");
	        var newCard_bdft = $("<div></div>");
	        newCard_hd.addClass("card-bdft");
					
	        //div newCard_hd
	        var newCard_hd_a = $("<a></a>");
	        newCard_hd_a.attr("href","#");
	        newCard_hd_a.attr("target","_blank");
	        //img
	      
	        var newStory_image = $("<img/>");
	        newStory_image.addClass("story-image");
	        newStory_image.attr("with","393");
	        newStory_image.attr("height","260");
	        newStory_image.attr("src","picture/11_p5933869.jpg");
	        newStory_image.attr("alt","东西图片");
	        newStory_image.attr("style","margin-left:-46.5px;");
	        ///// div  commodity_actions
	        var newCommodity_actions = $("<div></div>");
	        newCommodity_actions.addClass("commodity-actions");
	        
	        var newCommodity_actions_a = $("<a>加入豆列</a>");
	        newCommodity_actions_a.addClass("btn-doulist");
	        newCommodity_actions_a.attr("href", "");
	        var newCommodity_actions_a_em = $("<em>4</em>");
	        newCommodity_actions_a_em.addClass("count");
	        newCommodity_actions_a.append(newCommodity_actions_a_em);

	        var newCommodity_actions_a_like = $("<a></a>");
	        newCommodity_actions_a_like.addClass("btn-carditem-like");
	        newCommodity_actions_a_like.attr("href", "");
	        var newCommodity_actions_a_like_span = $("<span></span>");
	        var newCommodity_actions_a_like_em = $("<em>4</em>");
	        newCommodity_actions_a_like.append(newCommodity_actions_a_like_span);
	        newCommodity_actions_a_like.append(newCommodity_actions_a_like_em);
	        
	        ////div commodity-info	
	        var newCommodity_info = $("<div></div>");
	        newCommodity_info.addClass("commodity-info");
	        var newCommodity_info_a = $("<a></a>");
	        newCommodity_info_a.attr("target", "_blank");
	        newCommodity_info_a.attr("href", "#");
	        
	        var newCommodity_info_a_h2 = $("<h2>亚马逊 kindle paperwhite 2</h2>");
	        newCommodity_info_a_h2.addClass("story-title");
	        newCommodity_info_a_h2.attr("title", "亚马逊 kindle paperwhite 2");
	        var newCommodity_info_a_span = $("<span>￥798.00</span>");
	        newCommodity_info_a_span.addClass("commodity-price");
	        newCommodity_info_a_span.attr("title", "￥798.00");
	        
	        newCommodity_info_a.append(newCommodity_info_a_h2);
	        newCommodity_info_a.append(newCommodity_info_a_span);
	        
	        newCommodity_info.append(newCommodity_info_a);
	        
	        
	        
	        ///commodity_actions append
	        newCommodity_actions.append(newCommodity_actions_a);
	        newCommodity_actions.append(newCommodity_actions_a_like);
	       
	       
	        //A_ append img
	        newCard_hd_a.append(newStory_image);
	   
	        //div hd append
	        newCard_hd.append(newCard_hd_a);
	        newCard_hd.append(newCommodity_actions);
	        newCard_hd.append(newCommodity_info);
	             
	        ///div bd 
	        var newCard_bd = $("<div></div>");
	        newCard_bd.addClass("card-bd");
	        /////div1 
	    
	        var newCard_bd_div1 = $("<div></div>");
	        newCard_bd_div1.addClass("author-box");
	        var newCard_bd_div_a = $("<a></a>");
	        newCard_bd_div_a.addClass("author-avatar-link");
	        newCard_bd_div_a.attr("href","#");
	        var newCard_bd_div_a_img = $("<img/>");
	        newCard_bd_div_a_img.attr("width","24");
	        newCard_bd_div_a_img.attr("height","24");
	        newCard_bd_div_a_img.attr("src", "picture/12_u27401469-13.jpg");
	        newCard_bd_div_a_img.attr("alt","油多膘肥弹性好");
	        newCard_bd_div_a_img.attr("title","油多膘肥弹性好");
	       
	        var newCard_bd_div_a2 = $("<a></a>");
	        newCard_bd_div_a2.attr("href","#");
	        
	        newCard_bd_div_a.append(newCard_bd_div_a_img);
	        newCard_bd_div1.append(newCard_bd_div_a);
	        newCard_bd_div1.append(newCard_bd_div_a2);
	     
	        /////div2
	        var newCard_bd_div2 = $("<div></div>");
	        newCard_bd_div2.addClass("story-quote");
	        var newCard_bd_div2_p = $("<p>买完2个小时后，涨价了！哈哈哈！</p>");
	        newCard_bd_div2_p.addClass("quote");
	        newCard_bd_div2.append(newCard_bd_div2_p);
	        ///div3   
	       
	        var newCard_bd_div3 = $("<div></div>");
	        newCard_bd_div3.addClass("story-info");
	        var newCard_bd_div3_ul = $("<ul></ul>");
	        newCard_bd_div3_ul.addClass("stats-list");
	        var newCard_bd_div3_ul_li1 = $("<li>加入豆列&nbsp;4</li>");
	        newCard_bd_div3_ul_li1.addClass("doulist-count");
	        var newCard_bd_div3_ul_li2 = $("<li>喜欢&nbsp;4</li>");
	        newCard_bd_div3_ul_li2.addClass("like");
	        newCard_bd_div3_ul.append(newCard_bd_div3_ul_li1);
	        newCard_bd_div3_ul.append(newCard_bd_div3_ul_li2);
	        newCard_bd_div3.append(newCard_bd_div3_ul);
	         
	        ///div bd append
	        newCard_bd.append(newCard_bd_div1);
	        newCard_bd.append(newCard_bd_div2);
	        newCard_bd.append(newCard_bd_div3);
	         
	        ////////div  bdft
	        var newCard_bdft = $("<div></div>");
	        newCard_bdft.addClass("card-bdft");
	        var newCard_bdft_div = $("<div></div>");
	        newCard_bdft_div.addClass("story-ft");
	        var newCard_bdft_div_span = $("<span>来自豆列&nbsp</span>");
	        newCard_bdft_div_span.addClass("doulist-from");
	        var newCard_bdft_a = $("<a>Kindle Paperwhite</a>");
	        newCard_bdft_a.attr("href","#");
	        newCard_bdft_div_span.append(newCard_bdft_a);
	        newCard_bdft_div.append(newCard_bdft_div_span);
	        newCard_bdft.append(newCard_bdft_div);
	        //div append
	        newLi.append(newCard_hd);
	        newLi.append(newCard_bd);
	        newLi.append(newCard_bdft);
	         
	        
	        alldivUL.append(newLi);
    }
}