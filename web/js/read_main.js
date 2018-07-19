$(document).ready(function() {
	creatTuijian();
	creatHuaCe();
	creatDuanZuoPin();
	creatZuiXinShangJia();
	creatTuijianZuoZhe();
});

function creatTuijian() {

	var array1 = {
		elemen : [ {
			bookname: "制夷记",
			zuozhe:"张眯眯",
			info:"征文大赛非虚构组入围作品。御夫有道的中国媳妇和sheldon般的美国丈夫。",
			price:"1.99元",
			srcc:"picture/8_2004774.jpg"
		}, {
			bookname:"早安，救助站",
			zuozhe:"阿小商",
			info:"征文大赛非虚构组入围作品。救助站社工新人眼中的世间冷暖。",
			price:"2.99元",
			srcc:"picture/9_2018971.jpg"
		}, {
			bookname:"一块红布",
			zuozhe:"黄观",
			info:"征文大赛非虚构组入围作品。一场关于藏传佛教和信仰的探索之旅。",
			price:"1.99元",
			srcc:"picture/10_1946051.jpg"
		}, {
			bookname:"破烂王",
			zuozhe:"甲乙先生",
			info:"征文大赛小说组入围作品。上漂伤痕文学的温情之作。女孩与拾荒老人的忘年之交。",
			price:"1.99元",
			srcc:"picture/11_1758451.jpg"
		} ]
	};

	for ( var i = 0; i < 4; i++) {
		var xxoo = $("#ss");

		var li = $("<li></li>");
		li.addClass("item");
		var borderwrap = $("<div></div>");
		borderwrap.addClass("border-wrap");

		var cover = $("<div></div>");
		cover.addClass("cover");
		var a1 = $("<a></a>");
		a1.addClass("pic");
		a1.attr("href", "#");
		a1.attr("target", "_self");
		var img = $("<img width='110p' height='164px'></img>");
		img.attr("src",array1.elemen[i].srcc);a1.append(img);
		cover.append(a1);

		var info = $("<div></div>");
		info.addClass("info");
		var title = $("<h4></h4>");
		title.addClass("title");
		var a2 = $("<a>"+array1.elemen[i].bookname+"</a>");
		a2.attr("href", "#");
		title.append(a2);

		var author = $("<div></div>");
		author.addClass("author");
		var origauthor = $("<span>" + array1.elemen[i].zuozhe + "</span>");
		
		origauthor.addClass("orig-author");
		author.append(origauthor);

		var recintro = $("<div>"+array1.elemen[i].info+"</div>");
		recintro.addClass("rec-intro");
		var pricetag = $("<span>"+array1.elemen[i].price+"</span>");
		pricetag.addClass("price-tag");
		info.append(title);
		info.append(author);
		info.append(recintro);
		info.append(pricetag);
		borderwrap.append(cover);
		borderwrap.append(info);
		li.append(borderwrap);
		xxoo.append(li);

	}

}


function creatDuanZuoPin() {
	var array1 = {
			elemen : [ {
				categorytype : "非虚构 / 中短篇集",
				recintro : "更小巧、更轻薄、更精致的《我爱问连岳》。",
				title : "i问连岳·4",
				origauthor:"连岳",
				price : "2.99元",
				src : "picture/44_2272476.jpg"
			}, {
				categorytype : "虚构 / 中短篇集",
				recintro : "与我们擦肩而过的每一个人都有可能是杀手。",
				title : "亲爱的，你不知道我是哪种人",
				origauthor:"朱一叶",
				price : "1.99元",
				src : "picture/45_2254849.jpg"
			}, {
				categorytype : "非虚构 / 中短篇集",
				recintro : "阐释情爱中的微妙距离：两性关系就如“豪猪取暖”，越想靠近身上的硬刺越会刺向对方。",
				title : "我们都是取暖的豪猪",
				origauthor:"寇研",
				price : "3.99元",
				src :"picture/46_1919345.jpg"
			} , {
				categorytype : "虚构 / 中短篇集",
				recintro : "沈嘉柯异色短篇小说九则，每个都会都有一些奇谈异闻。",
				title : "回家请勿声张",
				origauthor:"沈嘉柯",
				price : "1.99元",
				src : "picture/47_1875814.jpg"
			}, {
				categorytype : "虚构 / 中篇",
				recintro : "单身母亲、性格乖戾的孩子、残忍的家庭暴力。",
				title : "双婴记",
				origauthor:"李晁",
				price : "0.99元",
				src : "picture/48_2156772.jpg"
			} ]
		};
	for ( var i= 0; i <5; i++) {

		var xxoo = $("#sl");

			var li = $("<li></li>");
			var borderwrap = $("<div></div>");
			borderwrap.addClass("border-wrap");

			var cover = $("<div></div>");
			cover.addClass("cover");
			
			var a1 = $("<a></a>");
			a1.addClass("pic");
			a1.attr("href","#");
			a1.attr("target","_self");
			var img = $("<img width='110p' height='164px'></img>");
			img.attr("src",array1.elemen[i].src);
		
			var panel=$("<div></div>");
			panel.addClass("panel");
			
			var categorytype=$("<div>"+array1.elemen[i].categorytype+"</div>");
			categorytype.addClass("category-type");
			
			var recintro=$("<div>"+array1.elemen[i].recintro+"</div>");
			recintro.addClass("rec-intro");
			panel.append(recintro);
			panel.append(categorytype);
			a1.append(panel);
			a1.append(img);
			cover.append(a1);
			
			var info = $("<div></div>");
			info.addClass("info");
			var title = $("<h4></h4>");
			title.addClass("title");
			var a2 = $("<a>"+array1.elemen[i].title+"</a>");
			a2.attr("href", "#");
			title.append(a2);

			var author = $("<div></div>");
			author.addClass("author");
			var origauthor = $("<span>"+array1.elemen[i].origauthor+"</span>");
			origauthor.addClass("orig-author");
			author.append(origauthor);
			
			var pricetag = $("<span>"+array1.elemen[i].price+"</span>");
			pricetag.addClass("price-tag");
			info.append(title);
			info.append(author);
			
			info.append(pricetag);
			borderwrap.append(cover);
			borderwrap.append(info);
			li.append(borderwrap);
			xxoo.append(li);
			
}
}

function creatHuaCe() {
	
	var array1 = {
			elemen : [ {
				categorytype : "漫画 / 中篇",
				recintro : "用高度凝练的图文语言和象征性的寓言，展示了一个人不愿向现实妥协的坦荡心路。",
				title : "夜空之外的黑色",
				origauthor:"拾穗人",
				price : "2.99元",
				src : "picture/24_2306377.jpg"
			}, {
				categorytype : "摄影 / 中篇",
				recintro : "没有严谨学术化的讲解，只有一个摄影师眼里的藏传佛教。",
				title : "藏传佛教",
				origauthor:"巴图鲁春天",
				price : "1.99元",
				src : "picture/25_2328416.jpg"
			}, {
				categorytype : "摄影 / 中篇",
				recintro : "不是西藏风光，亦不是西藏宗教，此作品更注重藏人的市井生活。",
				title : "偶遇西藏",
				origauthor:"迷路的埃及猫",
				price : "1.99元",
				src : "picture/26_2226869.jpg"
			}, {
				categorytype : "摄影 / 中篇",
				recintro : "南极之旅的记录，作者从自己摄影作品中精选出100张，以飨读者。",
				title : "就在世界尽头",
				origauthor:"carried",
				price : "1.99元",
				src : "picture/27_2228462.jpg"
			} , {
				categorytype : "绘画艺术 / 中篇",
				recintro : "这一册由艺术家Pamviles Apm集成的油画集，里面展现的，是他的思想，他的疯狂，和他的爱。",
				title : "梦幻与迷狂",
				origauthor:"Pamviles Apm",
				price : "1.99元",
				src : "picture/28_2205798.jpg"
			} ]
		};
	
	for ( var i= 0; i <5; i++) {

			var xxoo = $("#sli");

				var li = $("<li></li>");
				var borderwrap = $("<div></div>");
				borderwrap.addClass("border-wrap");

				var cover = $("<div></div>");
				cover.addClass("cover");
				
				var a1 = $("<a></a>");
				a1.addClass("pic");
				a1.attr("href","#");
				a1.attr("target","_self");
				var img =  $("<img width='110p' height='164px'></img>");
				img.attr("src",array1.elemen[i].src);
			
				var panel=$("<div></div>");
				panel.addClass("panel");
				
				var categorytype=$("<div>"+array1.elemen[i].categorytype+"</div>");
				categorytype.addClass("category-type");
				
				var recintro=$("<div>"+array1.elemen[i].recintro+"</div>");
				recintro.addClass("rec-intro");
				panel.append(recintro);
				panel.append(categorytype);
				a1.append(panel);
				a1.append(img);
				cover.append(a1);
				
				var info = $("<div></div>");
				info.addClass("info");
				var title = $("<h4></h4>");
				title.addClass("title");
				var a2 = $("<a>"+ array1.elemen[i].title + "</a>");
				a2.attr("href", "#");
				title.append(a2);

				var author = $("<div></div>");
				author.addClass("author");
				var origauthor = $("<span>" + array1.elemen[i].origauthor + "</span>");
				origauthor.addClass("orig-author");
				author.append(origauthor);
				
				var pricetag = $("<span>" + array1.elemen[i].price + "</span>");
				pricetag.addClass("price-tag");
				info.append(title);
				info.append(author);
				
				info.append(pricetag);
				borderwrap.append(cover);
				borderwrap.append(info);
				li.append(borderwrap);
				xxoo.append(li);
				
	}
	}

function creatZuiXinShangJia() {
	
	var array1 = {
			elemen : [ {
				categorytype : "虚构 / 中篇",
				recintro : "作品让你了解什么是“性瘾”",
				title : "性瘾",
				origauthor:"锤子",
				price : "1.99元",
				src : "picture/64_2274925.jpg?v=1386585842.0"
			}, {
				categorytype : "虚构 / 中短篇集",
				recintro : "关于跳楼者的九个短篇故事。",
				title : "跳楼者们的故事",
				origauthor:"马号街",
				price : "1.99元",
				src : "picture/65_1782989.jpg?v=1385967534.0"
			}, {
				categorytype : "虚构 / 中篇",
				recintro : "这是一个疯狂的爱情故事，青瓷是他的挚爱，也是他的劫难。",
				title : "青瓷",
				origauthor:"马拉",
				price : "1.99元",
				src : "picture/66_1964697.jpg?v=1387159343.0"
			}, {
				categorytype : "非虚构 / 中短篇集",
				recintro : "这是一部有趣的作品，有趣背后说的是人性，而人性都是相通的。",
				title : "求求你，感动我",
				origauthor:"此情",
				price : "1.99元",
				src : "picture/27_2228462.jpg"
			} , {
				categorytype : "虚构 / 中短篇集",
				recintro : "现代志异，不可能发生的却或许可能发生的事情都在小说中发生了。",
				title : "继续怪谈",
				origauthor:"乐色爆炸",
				price : "1.99元",
				src : "picture/68_1653620.jpg?v=1386838655.0"
			} ]
		};
	
	for ( var i= 0; i <5; i++) {

			var xxoo = $("#zuixin");

				var li = $("<li></li>");
				var borderwrap = $("<div></div>");
				borderwrap.addClass("border-wrap");

				var cover = $("<div></div>");
				cover.addClass("cover");
				
				var a1 = $("<a></a>");
				a1.addClass("pic");
				a1.attr("href","#");
				a1.attr("target","_self");
				var img =  $("<img width='110p' height='164px'></img>");
				img.attr("src",array1.elemen[i].src);
			
				var panel=$("<div></div>");
				panel.addClass("panel");
				
				var categorytype=$("<div>"+array1.elemen[i].categorytype+"</div>");
				categorytype.addClass("category-type");
				
				var recintro=$("<div>"+array1.elemen[i].recintro+"</div>");
				recintro.addClass("rec-intro");
				panel.append(recintro);
				panel.append(categorytype);
				a1.append(panel);
				a1.append(img);
				cover.append(a1);
				
				var info = $("<div></div>");
				info.addClass("info");
				var title = $("<h4></h4>");
				title.addClass("title");
				var a2 = $("<a>"+ array1.elemen[i].title + "</a>");
				a2.attr("href", "#");
				title.append(a2);

				var author = $("<div></div>");
				author.addClass("author");
				var origauthor = $("<span>" + array1.elemen[i].origauthor + "</span>");
				origauthor.addClass("orig-author");
				author.append(origauthor);
				
				var pricetag = $("<span>" + array1.elemen[i].price + "</span>");
				pricetag.addClass("price-tag");
				info.append(title);
				info.append(author);
				
				info.append(pricetag);
				borderwrap.append(cover);
				borderwrap.append(info);
				li.append(borderwrap);
				xxoo.append(li);
				
	}
	}



function creatTuijianZuoZhe() {
	var array1 = {
			elemen : [ {
				bookname : "马号街",
				text : "生于西蜀，藏身武汉大学中文系若干年，现在京津沪杭广港之间漂来荡去。职业：私家侦探，擅长婚外情调查、债务追讨、行踪狙击、隐私刺探等等。",
				aa1:"《老玩童的墓志铭》",
				aa2:"《刺杀马号街》",
				aa3:"《北京地铁百千臀》",
				src:"picture/84_4f7e32ddbefd0af.jpg"
			}, {
				bookname : "九月薇影",
				text : "九月薇影，八零年代某个深秋生于蜀地。现居川西北一隅历经沧桑的古城，教育照顾稚子。曾于《儿童文学》、《江河文学》、《文学与人生》等刊物发表小说散文数万字。",
				aa1:"《生死不离》",
				aa2:"《岛》",
				aa3:"《地雷阵》",
				src : "picture/85_8a56b6437fd131d.jpg"
			}, {
				bookname : "上官乱",
				text : "前记者，前编辑，前剧本、小说获奖屌丝，现编剧，现独立微杂志《周末乱侃》创办人，现小说创作人。",
				aa1:"《小镇贵族》",
				aa2:"《九观音》",
				aa3:"《北京地铁百千臀》",
				src : "picture/86_953b3b44af2aba6.jpg"
			}, {
				bookname : "魏思孝",
				text : "男，1986年生于山东淄博，写小说。首届王小菊文学奖获得者，著有《不明物》，短篇小说集《豁然头落》",
				aa1:"《禽兽不如》",
				aa2:"《优良杂种》",
				aa3:"《我对社会做出过贡献》",
				src : "picture/87_63a79bb9fdc542b.jpg"
			} ]
		};
	

	for ( var i = 0; i < 4; i++) {
		var xxoo = $("#tuijian");

		var li = $("<li></li>");
		li.addClass("item");
		var borderwrap = $("<div></div>");
		borderwrap.addClass("border-wrap");

		var avatar = $("<div></div>");
		avatar.addClass("avatar");
		var a1 = $("<a></a>");
		a1.attr("href", "#");
		
		var img = $("<img/>");
		img.attr("src",array1.elemen[i].src);
		
		a1.append(img);
		avatar.append(a1);

		var intro = $("<div></div>");
		intro.addClass("intro");
		var name = $("<h4></h4>");
		name.addClass("name");
		var a2 = $("<a>"+array1.elemen[i].bookname+"</a>");
		a2.attr("href", "#");
		name.append(a2);

		var text = $("<p>"+array1.elemen[i].text+"</p>");
		text.addClass("text");
		var magnumopus = $("<p></p>");
		magnumopus.addClass("magnum-opus");
var  aa1=$("<a>"+array1.elemen[i].aa1+"</a>");
aa1.attr("href", "#");	
var  aa2=$("<a>"+array1.elemen[i].aa2+"</a>");
aa2.attr("href", "#");	
var  aa3=$("<a>"+array1.elemen[i].aa3+"</a>");
aa3.attr("href", "#");	
magnumopus.append(aa1);
magnumopus.append(aa2);
magnumopus.append(aa3);
		intro.append(magnumopus);
		intro.append(name);
		intro.append(text);
		borderwrap.append(avatar);
		borderwrap.append(intro);
		li.append(borderwrap);
		xxoo.append(li);

	}

}




