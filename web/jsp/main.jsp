<%@ page language="java" import="java.util.*" pageEncoding="utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="zh-CN" class="">
<head>
    <title>豆瓣</title>
    <script src="../js/json2.js"></script>
    <script src="../js/jquery-1.4.2.js"></script>
    <script src="../js/main/main.js"></script>
    <link rel="stylesheet" href="../css\4__init_.css">
    <link rel="stylesheet" href="../css\5_anonymous_home.css">
    <!-- COLLECTED CSS -->
</head>

<body>


<div id="anony-nav">
    <div class="anony-nav-links">
        <ul>
            <li>
                <a target="_blank" class="lnk-book" href="book.jsp">豆瓣读书</a>
            </li>
            <li>
                <a target="_blank" class="lnk-movie"
                   href="movie.jsp">豆瓣电影</a>
            </li>
            <li>
                <a target="_blank" class="lnk-music"
                   href="music.jsp">豆瓣音乐</a>
            </li>
            <li>
                <a target="_blank" class="lnk-group"
                   href="group.jsp">豆瓣小组</a>
            </li>
            <li>
                <a target="_blank" class="lnk-events"
                   href="city.jsp">豆瓣同城</a>
            </li>
            <li>
                <a target="_blank" class="lnk-dongxi"
                   href="dongxi.jsp">豆瓣东西</a>
            </li>
        </ul>
    </div>

    <h1>
        <a href="main.jsp">豆瓣</a>
    </h1>

    <div class="anony-srh">
        <form action="http://www.douban.com/search" method="get">
					<span class="inp"><input type="text" maxlength="60"
                                             size="12" placeholder="书籍、电影、音乐、小组、小站、成员" name="q"
                                             autocomplete="off"> </span>
            <span class="bn"><input type="submit" value="搜索"> </span>
        </form>
    </div>
</div>


<div id="anony-reg">
    <div class="wrapper">


        <div class="login">
            <form id="lzform" name="lzform" method="post"
                  action="login1.jsp">
                <fieldset>
                    <legend>
                        登录
                    </legend>
                    <input type="hidden" value="index_nav" name="source">
                    <div class="item item-account">
                        <input type="text" name="form_email" id="form_email" value=""
                               class="inp" placeholder="邮箱/手机号" tabIndex="1">
                        <div class="opt">
                            <label for="form_remember">
                                <input name="remember" type="checkbox" id="form_remember"
                                       tabIndex="4">
                                记住我
                            </label>
                        </div>
                    </div>
                    <div class="item item-passwd">
                        <input name="form_password" placeholder="密码" id="form_password"
                               class="inp" type="password" tabIndex="2">
                        <div class="opt">
                            <a href="resetpassword.jsp">忘记密码</a>
                        </div>
                    </div>
                    <div class="item-submit">
                        <input value="登录" type="submit" class="bn-submit" tabIndex="4">
                    </div>
                </fieldset>
            </form>
        </div>

        <div class="reg">

            <a href="withus.jsp" class="lnk-reg">加入我们 <i>注册</i> </a>
            <div class="nb-info">
                <b>发现更多生活</b>
            </div>
        </div>
    </div>
</div>


<div id="anony-sns" class="section">
    <div class="wrapper">

        <!-- douban ad begin -->
        <div id="dale_anonymous_homepage_top_for_crazy_ad"></div>
        <!-- douban ad end -->


        <div class="side">


            <h2>
                线上活动
                &nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;
                <span class="pl">&nbsp;( <a
                        href="" target="_self">更多</a> )
						</span>
            </h2>

            <div class="online"></div>
        </div>
        <div class="main">
            <div class="mod">


                <h2>
                    热点内容
                    &nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;
                </h2>

                <div class="albums">
                </div>
                <div class="notes">
                    <ul>
                        <li class="first">
                            <div class="title">
                                <a href="">面试</a>
                            </div>
                            <div class="author">
                                ♞的日记
                            </div>
                            <p>
                                几年前我在一家编剧公司上班，主要的工作内容是撰写喜剧剧本。剧本首先要过领导这...
                            </p>
                        </li>

                        <li>
                            <a href="">我娃是个严肃的孩子。</a>
                        </li>
                        <li>
                            <a href="">配偶颂</a>
                        </li>
                        <li>
                            <a href="">金古梁笔下的不同江湖</a>
                        </li>
                        <li>
                            <a href="">《台湾行记》</a>
                        </li>
                        <li>
                            <a href="">【艳女列传·之四】伊娃·格林：恶之花</a>
                        </li>
                        <li>
                            <a href="">水彩画 速涂
                                睡莲步骤分解（详细多图，没流量慎入。。）</a>
                        </li>
                        <li>
                            <a href="">你要做那冬天里的绞肉机</a>
                        </li>
                        <li>
                            <a href="">家庭自制酱肉</a>
                        </li>
                        <li>
                            <a href="">糖果</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div id="dale_anonymous_home_page_top" class="extra"></div>

</div>


<div id="anony-movie" class="section">
    <div class="wrapper">


        <div class="sidenav">
            <h2 class="section-title">
                <a href="">电影</a>
            </h2>


            <div class="side-links nav-anon">
                <ul>

                    <li>
                        <a href="">影讯&amp;购票</a>
                    </li>

                    <li>
                        <a href="">电视剧</a>
                    </li>

                    <li>
                        <a href="">排行榜</a>
                    </li>

                    <li>
                        <a href="">分类</a>
                    </li>

                    <li>
                        <a href="">影评</a>
                    </li>

                    <li class="site-nav-bt">
                        <a href="">预告片</a>
                    </li>


                </ul>
            </div>


            <div class="apps-list">
                <ul>
                    <li>
                        <a href="" class="lnk-icon"><i
                                class="app-icon app-icon-movie"></i> </a><a
                            href="">豆瓣电影</a>
                    </li>
                </ul>
            </div>

        </div>

        <div class="side">
            <div class="mod">


                <h2>
                    影片分类
                    &nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;
                    <span class="pl">&nbsp;( <a
                            href="http://movie.douban.com/tag/?view=type" target="_self">更多</a>
								) </span>
                </h2>

                <div class="tags list">
                    <ul>
                        <li>
                            <a href="">爱情</a>
                        </li>
                        <li>
                            <a href="">喜剧</a>
                        </li>
                        <li>
                            <a href="">动画</a>
                        </li>
                        <li>
                            <a href="">科幻</a>
                        </li>
                        <li>
                            <a href="">经典</a>
                        </li>
                        <li>
                            <a href="">动作</a>
                        </li>
                        <li>
                            <a href="">剧情</a>
                        </li>
                        <li>
                            <a href="">青春</a>
                        </li>
                        <li>
                            <a href="">悬疑</a>
                        </li>
                        <li>
                            <a href="">惊悚</a>
                        </li>
                        <li>
                            <a href="">犯罪</a>
                        </li>
                        <li>
                            <a href="">文艺</a>
                        </li>
                        <li>
                            <a href="">纪录片</a>
                        </li>
                        <li>
                            <a href="">励志</a>
                        </li>
                        <li>
                            <a href="">搞笑</a>
                        </li>
                        <li>
                            <a href="">恐怖</a>
                        </li>
                        <li>
                            <a href="">短片</a>
                        </li>
                        <li>
                            <a href="">战争</a>
                        </li>
                        <li>
                            <a href="">美国</a>
                        </li>
                        <li>
                            <a href="">日本</a>
                        </li>
                        <li>
                            <a href="">香港</a>
                        </li>
                        <li>
                            <a href="">英国</a>
                        </li>
                        <li>
                            <a href="">中国</a>
                        </li>
                        <li>
                            <a href="">法国</a>
                        </li>
                        <li>
                            <a href="">韩国</a>
                        </li>
                        <li>
                            <a href="">台湾</a>
                        </li>
                        <li>
                            <a href="">德国</a>
                        </li>
                        <li>
                            <a href="">意大利</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="mod">


                <h2>
                    近期热门
                    &nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;
                    <span class="pl">&nbsp;( <a
                            href="" target="_self">更多</a> ) </span>
                </h2>

                <div class="list1 movie-charts">
                    <ol>
                        <li>
                            <a href="">大明劫</a>
                        </li>
                        <li>
                            <a href="">飞虎出征</a>
                        </li>
                        <li>
                            <a href="">囚徒</a>
                        </li>
                        <li>
                            <a href="">菲利普船长</a>
                        </li>
                        <li>
                            <a href="">黑帮家族</a>
                        </li>
                        <li>
                            <a href="">安因冈</a>
                        </li>
                        <li>
                            <a href="">观相</a>
                        </li>
                        <li>
                            <a href="">嘿！小面</a>
                        </li>
                        <li>
                            <a href="">挨饿游戏</a>
                        </li>
                        <li>
                            <a href="">波西·杰克逊与魔兽之海</a>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="main">


            <h2>
                正在热映 ······
                <span class="pl">&nbsp;( <a
                        href="" target="_self">更多</a> )
						</span>
            </h2>

            <div class="movie-list list">
                <ul>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\11_p2159072475.jpg" alt="无人区"/> </a>
                        </div>
                        <div class="title">
                            <a href="">无人区</a>
                        </div>
                        <div class="rating">
                            <span class="allstar45"></span><i>8.4</i>
                        </div>
                        <a href=""
                           class="bn-link bn-ticket">选座购票</a>
                    </li>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\13_p2158164038.jpg" alt="四大名捕2"/> </a>
                        </div>
                        <div class="title">
                            <a href="">四大名捕2</a>
                        </div>
                        <div class="rating">
                            <span class="allstar25"></span><i>4.6</i>
                        </div>
                        <a href=""
                           class="bn-link bn-ticket">选座购票</a>
                    </li>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\15_p2157480930.jpg" alt="扫毒"/> </a>
                        </div>
                        <div class="title">
                            <a href="">扫毒</a>
                        </div>
                        <div class="rating">
                            <span class="allstar40"></span><i>7.6</i>
                        </div>
                        <a href=""
                           class="bn-link bn-ticket">选座购票</a>
                    </li>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\17_p2159078612.jpg" alt="地心引力"/> </a>
                        </div>
                        <div class="title">
                            <a href="">地心引力</a>
                        </div>
                        <div class="rating">
                            <span class="allstar40"></span><i>7.9</i>
                        </div>
                        <a href=""
                           class="bn-link bn-ticket">选座购票</a>
                    </li>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\19_p2160637375.jpg" alt="风暴"/> </a>
                        </div>
                        <div class="title">
                            <a href="">风暴</a>
                        </div>
                        <div class="rating">
                            <span class="txt-tip">暂无评分</span>
                        </div>
                        <a href=""
                           class="bn-link bn-ticket">选座购票</a>
                    </li>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\21_p2159525420.jpg" alt="双雄"/> </a>
                        </div>
                        <div class="title">
                            <a href="">双雄</a>
                        </div>
                        <div class="rating">
                            <span class="allstar30"></span><i>5.7</i>
                        </div>
                        <a href=""
                           class="bn-link bn-ticket">选座购票</a>
                    </li>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\23_p2156684911.jpg" alt="饥饿游戏2：星火燎原"/> </a>
                        </div>
                        <div class="title">
                            <a href="">饥饿游戏2：星...</a>
                        </div>
                        <div class="rating">
                            <span class="allstar40"></span><i>7.5</i>
                        </div>
                        <a href=""
                           class="bn-link bn-ticket">选座购票</a>
                    </li>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\25_p2158802659.jpg" alt="森林战士"/> </a>
                        </div>
                        <div class="title">
                            <a href="">森林战士</a>
                        </div>
                        <div class="rating">
                            <span class="allstar40"></span><i>7.3</i>
                        </div>
                        <a href=""
                           class="bn-link bn-ticket">选座购票</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</div>


<div id="anony-dongxi" class="section">
    <div class="wrapper">


        <div class="sidenav">
            <h2 class="section-title">
                <a
                        href="">东西</a>
            </h2>


            <div class="side-links nav-anon">
                <ul>


                    <li>
                        <a
                                href="">东西</a>
                    </li>


                    <li>
                        <a
                                href="">图文</a>
                    </li>

                </ul>
            </div>

        </div>

        <div class="side">
            <div class="mod">

                <h2>
                    东西分类
                    &nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;
                    <span class="pl">&nbsp;( <a
                            href=""
                            target="_self">更多</a> ) </span>
                </h2>


                <div class="tags list dongxi-tags-list">
                    <ul>
                        <li>
                            <a
                                    href="">他的</a>
                        </li>
                        <li>
                            <a
                                    href="">她的</a>
                        </li>
                        <li>
                            <a
                                    href="">居家</a>
                        </li>
                        <li>
                            <a
                                    href="">数码</a>
                        </li>
                        <li>
                            <a
                                    href="">户外</a>
                        </li>
                        <li>
                            <a
                                    href="">美妆</a>
                        </li>
                        <li>
                            <a
                                    href="">吃喝</a>
                        </li>
                        <li>
                            <a
                                    href="">母婴</a>
                        </li>
                        <li>
                            <a
                                    href="">Geek</a>
                        </li>
                        <li>
                            <a
                                    href="">设计感</a>
                        </li>
                        <li>
                            <a
                                    href="">二次元</a>
                        </li>
                        <li>
                            <a
                                    href="">原创手工</a>
                        </li>
                        <li>
                            <a
                                    href="">真体验</a>
                        </li>
                        <li>
                            <a
                                    href="">礼品盒</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="mod">

                <h2>
                    热门图文
                    &nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;
                    <span class="pl">&nbsp;( <a
                            href=""
                            target="_self">更多</a> ) </span>
                </h2>


                <div class="list articles-list">
                    <ul>
                        <li class="first">
                            <div class="pic">
                                <a
                                        href="">
                                    <img src="picture\26_p7306.jpg" width="48" height="48"
                                         alt="当你我不能自由呼吸（3M口罩部分评测）"> </a>
                            </div>
                            <div class="content">
                                <a
                                        href=""
                                        class="title" title="当你我不能自由呼吸（3M口罩部分评测）">当你我不能自由呼吸（3M口罩...</a>
                                <div class="desc">
                                    。。。。。。厚...
                                </div>
                            </div>
                        </li>
                        <li class="">
                            <div class="pic">
                                <a
                                        href="">
                                    <img src="picture\27_p2539.jpg" width="48" height="48"
                                         alt="MUJI性价比突出与本宫多次回购之商品！"> </a>
                            </div>
                            <div class="content">
                                <a
                                        href=""
                                        class="title" title="MUJI性价比突出与本宫多次回购之商品！">MUJI性价比突出与本宫多次回...</a>
                                <div class="desc">
                                    MUJI这个牌子大家都不陌生 这可是文艺清新装*与简约实用相结合（B...
                                </div>
                            </div>
                        </li>
                        <li class="">
                            <div class="pic">
                                <a
                                        href="">
                                    <img src="picture\28_p2467.jpg" width="48" height="48"
                                         alt="婶儿完全不能直视的男士装扮"> </a>
                            </div>
                            <div class="content">
                                <a
                                        href=""
                                        class="title" title="婶儿完全不能直视的男士装扮">婶儿完全不能直视的男士装扮</a>
                                <div class="desc">
                                    说起来我不是一个矫情逼，但是有些男士装扮我真的没有办法在...
                                </div>
                            </div>
                        </li>
                        <li class="">
                            <div class="pic">
                                <a
                                        href="">
                                    <img src="picture\29_p2118.jpg" width="48" height="48"
                                         alt="【吐槽专用】这种衣服要不是模特长得好看穿出去简直找死！"> </a>
                            </div>
                            <div class="content">
                                <a
                                        href=""
                                        class="title" title="【吐槽专用】这种衣服要不是模特长得好看穿出去简直找死！">【吐槽专用】这种衣服要不是...</a>
                                <div class="desc">
                                    1. 【裂帛】只有漂亮的妹子才能把这件衣服穿出文艺范儿好嘛！平民...
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="main">

            <h2>
                热门东西
                &nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;
                <span class="pl">&nbsp;( <a
                        href="http://dongxi.douban.com?dcs=anonymous-home-more-shows&amp;dcm=douban"
                        target="_self">更多</a> ) </span>
            </h2>


            <div class="list shows-list">
                <ul>
                    <li title="欧洲设计大奖 神奇看不见的隐形悬浮书架">
                        <div class="pic">
                            <a
                                    href="">
                                <img src="picture\30_p1669.jpg" alt="欧洲设计大奖 神奇看不见的隐形悬浮书架"
                                     class="cover-image" width="150" height="150"> <span
                                    class="price"> ￥145.00 </span> </a>
                        </div>
                        <div class="title">
                            <a
                                    href="">欧洲设计大奖
                                神奇看不见的隐形悬...</a>
                        </div>
                    </li>
                    <li title="【叫我女王大人！】T恤">
                        <div class="pic">
                            <a
                                    href="">
                                <img src="picture\31_p5754815.jpg" alt="【叫我女王大人！】T恤"
                                     class="cover-image" width="150" height="150"> <span
                                    class="price"> ￥99.00 </span> </a>
                        </div>
                        <div class="title">
                            <a
                                    href="">【叫我女王大人！】T恤</a>
                        </div>
                    </li>
                    <li title="空气动力城市代步车 预定">
                        <div class="pic">
                            <a
                                    href="">
                                <img src="picture\32_p969581.jpg" alt="空气动力城市代步车 预定"
                                     class="cover-image" width="150" height="150"> <span
                                    class="price"> ￥139,999.00 </span> </a>
                        </div>
                        <div class="title">
                            <a
                                    href="">空气动力城市代步车
                                预定</a>
                        </div>
                    </li>
                    <li title="鸵鸟枕头头套办公室午休睡眠枕 旅行枕护颈枕健康枕创意礼物搞怪">
                        <div class="pic">
                            <a
                                    href="http://dongxi.douban.com/show/1263367/?dcs=anonymous-home-pic&amp;dcm=douban">
                                <img src="picture\33_p5107995.jpg"
                                     alt="鸵鸟枕头头套办公室午休睡眠枕 旅行枕护颈枕健康枕创意礼物搞怪" class="cover-image"
                                     width="150" height="150"> <span class="price">
											￥40.00 </span> </a>
                        </div>
                        <div class="title">
                            <a
                                    href="">鸵鸟枕头头套办公室午休睡眠枕
                                旅...</a>
                        </div>
                    </li>
                    <li title="【当学霸，嫁力宏】英文学习卫生纸">
                        <div class="pic">
                            <a
                                    href="">
                                <img src="picture\34_p5049923.jpg" alt="【当学霸，嫁力宏】英文学习卫生纸"
                                     class="cover-image" width="150" height="150"> <span
                                    class="price"> ￥7.99 </span> </a>
                        </div>
                        <div class="title">
                            <a
                                    href="">【当学霸，嫁力宏】英文学习卫生纸</a>
                        </div>
                    </li>
                    <li title="澳洲羊驼~（注意这是一对两只的价格哦）">
                        <div class="pic">
                            <a
                                    href="">
                                <img src="picture\35_p1599564.jpg" alt="澳洲羊驼~（注意这是一对两只的价格哦）"
                                     class="cover-image" width="150" height="150"> <span
                                    class="price"> ￥98,000.00 </span> </a>
                        </div>
                        <div class="title">
                            <a
                                    href="">澳洲羊驼~（注意这是一对两只的价...</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div id="dale_anonymous_home_page_middle" class="extra"></div>

</div>


<div id="anony-book" class="section">
    <div class="wrapper">


        <div class="sidenav">
            <div class="mod">
                <h2 class="section-title">
                    <a href="http://book.douban.com">读书</a>
                </h2>


                <div class="side-links nav-anon">
                    <ul>

                        <li>
                            <a href="http://book.douban.com/tag/">分类浏览</a>
                        </li>

                        <li>
                            <a target="_blank"
                               href="">阅读</a>
                            <img style="top: 4px; position: absolute;"
                                 src="picture\36_new_menu.gif"/>
                        </li>

                        <li>
                            <a href="">作者</a>
                        </li>

                        <li>
                            <a href="">书评</a>
                        </li>


                        <li class="site-nav-prom">
                            <a class="lnk-buy" href=""><em>购书单</em>
                            </a>
                        </li>

                    </ul>
                </div>

            </div>


            <div class="apps-list">
                <ul>
                    <li>
                        <a href="" class="lnk-icon"><i
                                class="app-icon app-icon-read"></i> </a><a
                            href="">豆瓣阅读</a>
                    </li>
                    <li>
                        <a href=""
                           class="lnk-icon"><i class="app-icon app-icon-read-notes"></i>
                        </a><a href="">豆瓣笔记</a>
                    </li>
                    <li>
                        <a href="" class="lnk-icon"><i
                                class="app-icon app-icon-cart"></i> </a><a
                            href="">豆瓣购书单</a>
                    </li>
                </ul>
            </div>

        </div>

        <div class="side">

            <div class="mod">

                <h2>
                    热门标签
                    &nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;
                    <span class="pl">&nbsp;( <a
                            href="http://book.douban.com/tag/?view=type" target="_self">更多</a>
								) </span>
                </h2>

                <div class="book-cate-mod">
                    <div class="cate book-cate">
                        <ul>
                            <li class="cate-label">
                                [文学]
                            </li>
                            <li>
                                <a href="">小说</a>
                            </li>
                            <li>
                                <a href="">随笔</a>
                            </li>
                            <li>
                                <a href="">散文</a>
                            </li>
                            <li>
                                <a href="">日本文学</a>
                            </li>
                            <li>
                                <a href="">童话</a>
                            </li>
                            <li>
                                <a href="">诗歌</a>
                            </li>
                            <li>
                                <a href="">名著</a>
                            </li>
                            <li>
                                <a href="">港台</a>
                            </li>
                            <li>
                                <a href="">更多</a>
                            </li>
                        </ul>
                    </div>
                    <div class="cate book-cate">
                        <ul>
                            <li class="cate-label">
                                [流行]
                            </li>
                            <li>
                                <a href="">漫画</a>
                            </li>
                            <li>
                                <a href="">绘本</a>
                            </li>
                            <li>
                                <a href="">推理</a>
                            </li>
                            <li>
                                <a href="">青春</a>
                            </li>
                            <li>
                                <a href="">言情</a>
                            </li>
                            <li>
                                <a href="">科幻</a>
                            </li>
                            <li>
                                <a href="">武侠</a>
                            </li>
                            <li>
                                <a href="">奇幻</a>
                            </li>
                            <li>
                                <a href="">更多</a>
                            </li>
                        </ul>
                    </div>
                    <div class="cate book-cate">
                        <ul>
                            <li class="cate-label">
                                [文化]
                            </li>
                            <li>
                                <a href="">历史</a>
                            </li>
                            <li>
                                <a href="">哲学</a>
                            </li>
                            <li>
                                <a href="">传记</a>
                            </li>
                            <li>
                                <a href="">设计</a>
                            </li>
                            <li>
                                <a href="">建筑</a>
                            </li>
                            <li>
                                <a href="">电影</a>
                            </li>
                            <li>
                                <a href="">回忆录</a>
                            </li>
                            <li>
                                <a href="">音乐</a>
                            </li>
                            <li>
                                <a href="">更多</a>
                            </li>
                        </ul>
                    </div>
                    <div class="cate book-cate">
                        <ul>
                            <li class="cate-label">
                                [生活]
                            </li>
                            <li>
                                <a href="">旅行</a>
                            </li>
                            <li>
                                <a href="">励志</a>
                            </li>
                            <li>
                                <a href="">职场</a>
                            </li>
                            <li>
                                <a href="">美食</a>
                            </li>
                            <li>
                                <a href="">教育</a>
                            </li>
                            <li>
                                <a href="">灵修</a>
                            </li>
                            <li>
                                <a href="">健康</a>
                            </li>
                            <li>
                                <a href="">家居</a>
                            </li>
                            <li>
                                <a href="">更多</a>
                            </li>
                        </ul>
                    </div>
                    <div class="cate book-cate">
                        <ul>
                            <li class="cate-label">
                                [经管]
                            </li>
                            <li>
                                <a href="">经济学</a>
                            </li>
                            <li>
                                <a href="">管理</a>
                            </li>
                            <li>
                                <a href="">金融</a>
                            </li>
                            <li>
                                <a href="">商业</a>
                            </li>
                            <li>
                                <a href="">营销</a>
                            </li>
                            <li>
                                <a href="">理财</a>
                            </li>
                            <li>
                                <a href="">股票</a>
                            </li>
                            <li>
                                <a href="">企业史</a>
                            </li>
                            <li>
                                <a href="">更多</a>
                            </li>
                        </ul>
                    </div>
                    <div class="cate book-cate">
                        <ul>
                            <li class="cate-label">
                                [科技]
                            </li>
                            <li>
                                <a href="">科普</a>
                            </li>
                            <li>
                                <a href="">互联网</a>
                            </li>
                            <li>
                                <a href="">编程</a>
                            </li>
                            <li>
                                <a href="">交互设计</a>
                            </li>
                            <li>
                                <a href="">算法</a>
                            </li>
                            <li>
                                <a href="">通信</a>
                            </li>
                            <li>
                                <a href="">神经网络</a>
                            </li>
                            <li>
                                <a href="">更多</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">

            <div class="mod">

                <h2>
                    新书速递
                    &nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;
                    <span class="pl">&nbsp;( <a
                            href="" target="_self">更多</a> ) </span>
                </h2>

                <div class="book-list list">
                    <ul>
                        <li>
                            <div class="pic">
                                <a href=""><img
                                        src="picture\38_2282951.jpg?v=1386240506.0" alt="呼吸的意义"/>
                                </a>
                            </div>
                            <div class="title">
                                <a href="">呼吸的意义</a>
                            </div>
                            <div class="author">
                                黑荔枝
                            </div>
                            <a href=""
                               target="_blank" class="bn-link">免费试读</a>
                        <li>
                            <div class="pic">
                                <a href=""><img
                                        src="picture\40_2280361.jpg?v=1386169200.0"
                                        alt="我爱你，时间没什么了不起"/> </a>
                            </div>
                            <div class="title">
                                <a href="">我爱你，时间没...</a>
                            </div>
                            <div class="author">
                                宋小君 毛 ...
                            </div>
                            <a href=""
                               target="_blank" class="bn-link">免费试读</a>
                        <li>
                            <div class="pic">
                                <a href=""><img
                                        src="picture\42_2285682.jpg?v=1386321531.0" alt="逃离"/> </a>
                            </div>
                            <div class="title">
                                <a href="">逃离</a>
                            </div>
                            <div class="author">
                                〔加〕艾丽丝·...
                            </div>
                            <a href=""
                               target="_blank" class="bn-link">免费试读</a>
                        <li>
                            <div class="pic">
                                <a href=""><img
                                        src="picture\44_2081478.jpg?v=1385437883.0" alt="公正"/>
                                </a>
                            </div>
                            <div class="title">
                                <a href="">公正</a>
                            </div>
                            <div class="author">
                                〔美〕迈克尔·...
                            </div>
                            <a href=""
                               target="_blank" class="bn-link">免费试读</a>
                    </ul>
                </div>
            </div>

            <div class="mod">

                <h2>
                    原创数字作品
                    &nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;
                    <span class="pl">&nbsp;( <a
                            href=""
                            target="_self">更多</a> ) </span>
                </h2>

                <div class="book-list list">
                    <ul>
                        <li>
                            <div class="pic">
                                <a href="" target="_blank"><img
                                        src="picture\46_2104561.jpg?v=1384394154.0" alt="以她之名：第一次接触"/>
                                </a>
                            </div>
                            <div class="title">
                                <a href="" target="_blank">以她之名：第一...</a>
                            </div>
                            <div class="author">
                                〔美〕迈克尔·R·希克斯
                            </div>
                            <div class="price">
                                18.00元
                            </div>
                            <a href=""
                               target="_blank" class="bn-link">免费试读</a>
                        <li>
                            <div class="pic">
                                <a href=""
                                   target="_blank"><img
                                        src="picture\48_2236346.jpg?v=1386465413.0"
                                        alt="九州幻想·九歌（2013.12）"/> </a>
                            </div>
                            <div class="title">
                                <a href=""
                                   target="_blank">九州幻想·九歌...</a>
                            </div>
                            <div class="author">
                                骑桶人 主编
                            </div>
                            <div class="price">
                                2.99元
                            </div>
                            <a href=""
                               target="_blank" class="bn-link">免费试读</a>
                        <li>
                            <div class="pic">
                                <a href=""
                                   target="_blank"><img
                                        src="picture\50_1872918.jpg?v=1383618724.0" alt="一个人"/>
                                </a>
                            </div>
                            <div class="title">
                                <a href="http://read.douban.com/ebook/1872918"
                                   target="_blank">一个人</a>
                            </div>
                            <div class="author">
                                肉腾腾
                            </div>
                            <div class="price">
                                1.99元
                            </div>
                            <a href=""
                               target="_blank" class="bn-link">免费试读</a>
                        <li>
                            <div class="pic">
                                <a href=""
                                   target="_blank"><img
                                        src="picture\52_475730.jpg?v=1362125033.0"
                                        alt="佛，到底讲了些什么？"/> </a>
                            </div>
                            <div class="title">
                                <a href=""
                                   target="_blank">佛，到底讲了些...</a>
                            </div>
                            <div class="author">
                                林欣浩
                            </div>
                            <div class="price">
                                5.99元
                            </div>
                            <a href=""
                               target="_blank" class="bn-link">免费试读</a>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</div>


<div id="anony-music" class="section">
    <div class="wrapper">


        <div class="sidenav">
            <h2 class="section-title">
                <a href="">音乐</a>
            </h2>


            <div class="side-links nav-anon">
                <ul>

                    <li>
                        <a href="">音乐人</a>
                    </li>

                    <li>
                        <a href="">排行榜</a>
                    </li>

                    <li>
                        <a href="">分类浏览</a>
                    </li>

                    <li>
                        <a href="">豆瓣FM</a>
                    </li>

                </ul>
            </div>


            <div class="apps-list">
                <ul>
                    <li>
                        <a href="" class="lnk-icon"><i
                                class="app-icon app-icon-fm"></i> </a><a
                            href="">豆瓣FM</a>
                    </li>
                    <li>
                        <a href="" class="lnk-icon"><i
                                class="app-icon app-icon-artists"></i> </a><a
                            href="">豆瓣音乐人</a>
                    </li>
                </ul>
            </div>

        </div>

        <div class="side">
            <div class="mod">


                <h2>
                    本周流行音乐人 ······
                    <span class="pl">&nbsp;( <a
                            href="" target="_self">更多</a> )
							</span>
                </h2>

                <div class="list1 artist-charts">
                    <ul>
                        <li>
                            <span class="num">1.</span>
                            <div class="pic">
                                <a href=""><img
                                        src="picture\54_88ba3d2aa048f31.jpg" width="48"> </a>
                            </div>
                            <div class="content">
                                <a href="">果味VC</a>
                                <div class="desc">
                                    流派: 摇滚 Rock
                                    <br>
                                    20486人关注
                                </div>
                            </div>
                        </li>
                        <li>
                            <span class="num">2.</span>
                            <div class="pic">
                                <a href=""><img
                                        src="picture\56_9e81d82cab2c269.jpg" width="48"> </a>
                            </div>
                            <div class="content">
                                <a href="">白水</a>
                                <div class="desc">
                                    流派: 原声 Soundtrack
                                    <br>
                                    24371人关注
                                </div>
                            </div>
                        </li>
                        <li>
                            <span class="num">3.</span>
                            <div class="pic">
                                <a href=""><img
                                        src="picture\58_bfd470c42dfec70.jpg" width="48"> </a>
                            </div>
                            <div class="content">
                                <a href="">Mc.方仔aka.Royshine</a>
                                <div class="desc">
                                    流派: 说唱 Rap
                                    <br>
                                    2514人关注
                                </div>
                            </div>
                        </li>
                        <li>
                            <span class="num">4.</span>
                            <div class="pic">
                                <a href=""><img
                                        src="picture\60_fc9d452c28600e9.jpg" width="48"> </a>
                            </div>
                            <div class="content">
                                <a href="">丁可</a>
                                <div class="desc">
                                    流派: 古典 Classical
                                    <br>
                                    15661人关注
                                </div>
                            </div>
                        </li>
                        <li>
                            <span class="num">5.</span>
                            <div class="pic">
                                <a href=""><img
                                        src="picture\62_e9e2a7e6d0d793d.jpg" width="48"> </a>
                            </div>
                            <div class="content">
                                <a href="">脑浊</a>
                                <div class="desc">
                                    流派: 摇滚 Rock
                                    <br>
                                    21768人关注
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="main">


            <h2>
                豆瓣新碟榜
                &nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;
                <span class="pl">&nbsp;( <a
                        href="" target="_self">更多</a> ) </span>
            </h2>

            <div class="album-list list">
                <ul>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\64_s27157626.jpg" alt="时间的歌"/> </a>
                        </div>
                        <div class="title">
                            1.
                            <a href="">时间的歌</a>
                        </div>
                        <div class="artist">
                            <a href="">陈绮贞</a>
                        </div>
                        <div class="rating">
                            <span class="allstar40"></span><i>7.3</i>
                        </div>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\66_s27158662.jpg" alt="渺小"/> </a>
                        </div>
                        <div class="title">
                            2.
                            <a href="">渺小</a>
                        </div>
                        <div class="artist">
                            <a href="">田馥甄 Hebe</a>
                        </div>
                        <div class="rating">
                            <span class="allstar40"></span><i>7.7</i>
                        </div>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\68_s27163800.jpg" alt="真的假的"/> </a>
                        </div>
                        <div class="title">
                            3.
                            <a href="">真的假的</a>
                        </div>
                        <div class="artist">
                            <a href="">陶晶莹</a>
                        </div>
                        <div class="rating">
                            <span class="allstar35"></span><i>6.8</i>
                        </div>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\70_s27158068.jpg" alt="江湖"/> </a>
                        </div>
                        <div class="title">
                            4.
                            <a href="">江湖</a>
                        </div>
                        <div class="artist">
                            <a href="">周华健</a>
                        </div>
                        <div class="rating">
                            <span class="allstar35"></span><i>7.0</i>
                        </div>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\72_s27157608.jpg" alt="Britney Jean"/> </a>
                        </div>
                        <div class="title">
                            5.
                            <a href="">Britney
                                Jean</a>
                        </div>
                        <div class="artist">
                            <a href="">Britney Spears</a>
                        </div>
                        <div class="rating">
                            <span class="allstar35"></span><i>6.9</i>
                        </div>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\74_s27142648.jpg" alt="Foreverly"/> </a>
                        </div>
                        <div class="title">
                            6.
                            <a href="">Foreverly</a>
                        </div>
                        <div class="artist">
                            <a href="">Billie Joe Armstrong Norah Jones</a>
                        </div>
                        <div class="rating">
                            <span class="allstar40"></span><i>8.2</i>
                        </div>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\76_s27167975.jpg"
                                    alt="12月的奇迹 (Korean Ver)"/> </a>
                        </div>
                        <div class="title">
                            7.
                            <a href="">12月的奇迹
                                (Korean Ver)</a>
                        </div>
                        <div class="artist">
                            <a href="">EXO</a>
                        </div>
                        <div class="rating">
                            <span class="allstar45"></span><i>8.5</i>
                        </div>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\78_s27168018.jpg"
                                    alt="12月的奇迹 (Chinese Ver)"/> </a>
                        </div>
                        <div class="title">
                            8.
                            <a href="">12月的奇迹
                                (Chinese Ver)</a>
                        </div>
                        <div class="artist">
                            <a href="">EXO</a>
                        </div>
                        <div class="rating">
                            <span class="allstar45"></span><i>8.5</i>
                        </div>
                </ul>
            </div>
        </div>
    </div>

    <div id="dale_anonymous_home_page_middle_2" class="extra"></div>

</div>


<div id="anony-group" class="section">
    <div class="wrapper">


        <div class="sidenav">
            <h2 class="section-title">
                <a href="">小组</a>
            </h2>


            <div class="side-links nav-anon">
                <ul>

                    <li>
                        <a href="">精选</a>
                    </li>

                    <li>
                        <a href="">文化</a>
                    </li>

                    <li>
                        <a href="">行摄</a>
                    </li>

                    <li>
                        <a href="">娱乐</a>
                    </li>

                    <li>
                        <a href="">时尚</a>
                    </li>

                    <li>
                        <a href="">生活</a>
                    </li>

                    <li>
                        <a href="">科技</a>
                    </li>

                </ul>
            </div>


            <div class="apps-list">
                <ul>
                    <li>
                        <a href="" class="lnk-icon"><i
                                class="app-icon app-icon-group"></i> </a><a
                            href="">豆瓣小组</a>
                    </li>
                </ul>
            </div>

        </div>

        <div class="side">
            <div class="mod">

                <h2>
                    小组分类
                    &nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;
                </h2>

                <div class="cate group-cate">
                    <ul>
                        <li class="cate-label">
                            <a href="">兴趣&raquo;
                            </a>
                        </li>
                        <li>
                            <a href="">旅行</a>
                        </li>
                        <li>
                            <a href="">摄影</a>
                        </li>
                        <li>
                            <a href="">影视</a>
                        </li>
                        <li>
                            <a href="">音乐</a>
                        </li>
                        <li>
                            <a href="">文学</a>
                        </li>
                        <li>
                            <a href="">游戏</a>
                        </li>
                        <li>
                            <a href="">动漫</a>
                        </li>
                        <li>
                            <a href="">运动</a>
                        </li>
                        <li>
                            <a href="">戏曲</a>
                        </li>
                        <li>
                            <a href="">桌游</a>
                        </li>
                        <li>
                            <a href="">怪癖</a>
                        </li>
                    </ul>
                </div>
                <div class="cate group-cate">
                    <ul>
                        <li class="cate-label">
                            <a href="">生活&raquo;
                            </a>
                        </li>
                        <li>
                            <a href="">健康</a>
                        </li>
                        <li>
                            <a href="">美食</a>
                        </li>
                        <li>
                            <a href="">宠物</a>
                        </li>
                        <li>
                            <a href="">美容</a>
                        </li>
                        <li>
                            <a href="">化妆</a>
                        </li>
                        <li>
                            <a href="">护肤</a>
                        </li>
                        <li>
                            <a href="">服饰</a>
                        </li>
                        <li>
                            <a href="">公益</a>
                        </li>
                        <li>
                            <a href="">家庭</a>
                        </li>
                        <li>
                            <a href="">育儿</a>
                        </li>
                        <li>
                            <a href="">汽车</a>
                        </li>
                    </ul>
                </div>
                <div class="cate group-cate">
                    <ul>
                        <li class="cate-label">
                            <a href="">购物&raquo;
                            </a>
                        </li>
                        <li>
                            <a href="">淘宝</a>
                        </li>
                        <li>
                            <a href="">二手</a>
                        </li>
                        <li>
                            <a href="">团购</a>
                        </li>
                        <li>
                            <a href="">数码</a>
                        </li>
                        <li>
                            <a href="">品牌</a>
                        </li>
                        <li>
                            <a href="">文具</a>
                        </li>
                    </ul>
                </div>
                <div class="cate group-cate">
                    <ul>
                        <li class="cate-label">
                            <a href="">社会&raquo;
                            </a>
                        </li>
                        <li>
                            <a href="">求职</a>
                        </li>
                        <li>
                            <a href="">租房</a>
                        </li>
                        <li>
                            <a href="">励志</a>
                        </li>
                        <li>
                            <a href="">留学</a>
                        </li>
                        <li>
                            <a href="">出国</a>
                        </li>
                        <li>
                            <a href="">理财</a>
                        </li>
                        <li>
                            <a href="">传媒</a>
                        </li>
                        <li>
                            <a href="">创业</a>
                        </li>
                        <li>
                            <a href="">考试</a>
                        </li>
                    </ul>
                </div>
                <div class="cate group-cate">
                    <ul>
                        <li class="cate-label">
                            <a href="">艺术&raquo;
                            </a>
                        </li>
                        <li>
                            <a href="">设计</a>
                        </li>
                        <li>
                            <a href="">手工</a>
                        </li>
                        <li>
                            <a href="">展览</a>
                        </li>
                        <li>
                            <a href="">曲艺</a>
                        </li>
                        <li>
                            <a href="">舞蹈</a>
                        </li>
                        <li>
                            <a href="">雕塑</a>
                        </li>
                        <li>
                            <a href="">纹身</a>
                        </li>
                    </ul>
                </div>
                <div class="cate group-cate">
                    <ul>
                        <li class="cate-label">
                            <a href="">学术&raquo;
                            </a>
                        </li>
                        <li>
                            <a href="">人文</a>
                        </li>
                        <li>
                            <a href="">社科</a>
                        </li>
                        <li>
                            <a href="">自然</a>
                        </li>
                        <li>
                            <a href="">建筑</a>
                        </li>
                        <li>
                            <a href="">国学</a>
                        </li>
                        <li>
                            <a href="">语言</a>
                        </li>
                        <li>
                            <a href="">宗教</a>
                        </li>
                        <li>
                            <a href="">哲学</a>
                        </li>
                        <li>
                            <a href="">软件</a>
                        </li>
                        <li>
                            <a href="">硬件</a>
                        </li>
                        <li>
                            <a href="">互联网</a>
                        </li>
                    </ul>
                </div>
                <div class="cate group-cate">
                    <ul>
                        <li class="cate-label">
                            <a href="">情感&raquo;
                            </a>
                        </li>
                        <li>
                            <a href="">恋爱</a>
                        </li>
                        <li>
                            <a href="">心情</a>
                        </li>
                        <li>
                            <a href="">心理学</a>
                        </li>
                        <li>
                            <a href="">星座</a>
                        </li>
                        <li>
                            <a href="">塔罗</a>
                        </li>
                        <li>
                            <a href="">LES</a>
                        </li>
                        <li>
                            <a href="">GAY</a>
                        </li>
                    </ul>
                </div>
                <div class="cate group-cate">
                    <ul>
                        <li class="cate-label">
                            <a href="">闲聊&raquo;
                            </a>
                        </li>
                        <li>
                            <a href="">吐槽</a>
                        </li>
                        <li>
                            <a href="">笑话</a>
                        </li>
                        <li>
                            <a href="">直播</a>
                        </li>
                        <li>
                            <a href="">八卦</a>
                        </li>
                        <li>
                            <a href="">发泄</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="main">


            <h2>
                热门小组
                &nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;
                <span class="pl">&nbsp;( <a
                        href="" target="_self">更多</a>
							) </span>
            </h2>

            <div class="group-list list">
                <ul>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\80_g116837-3.jpg" alt="" width="48"/> </a>
                        </div>
                        <div class="info">
                            <div class="title">
                                <a href="">没有厨房我也爱做饭</a>
                            </div>
                            42672 个成员
                        </div>
                    </li>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\82_g41454-2.jpg" alt="" width="48"/> </a>
                        </div>
                        <div class="info">
                            <div class="title">
                                <a href="">课文回忆录</a>
                            </div>
                            12923 个成员
                        </div>
                    </li>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\84_g91671-5.jpg" alt="" width="48"/> </a>
                        </div>
                        <div class="info">
                            <div class="title">
                                <a href="">像一位孤独的诗人</a>
                            </div>
                            19955 个成员
                        </div>
                    </li>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\86_g17574-1.jpg" alt="" width="48"/> </a>
                        </div>
                        <div class="info">
                            <div class="title">
                                <a href="">我想开书店</a>
                            </div>
                            21778 个成员
                        </div>
                    </li>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\88_g228736-1.jpg" alt="" width="48"/> </a>
                        </div>
                        <div class="info">
                            <div class="title">
                                <a href="">破越古怪问题研究所</a>
                            </div>
                            64069 个成员
                        </div>
                    </li>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\90_g93611-2.jpg" alt="" width="48"/> </a>
                        </div>
                        <div class="info">
                            <div class="title">
                                <a href="">减肥餐设计与体型管理3.0</a>
                            </div>
                            132173 个成员
                        </div>
                    </li>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\92_g19930-3.jpg" alt="" width="48"/> </a>
                        </div>
                        <div class="info">
                            <div class="title">
                                <a href="">实况足球</a>
                            </div>
                            9184 个成员
                        </div>
                    </li>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\94_g40487-1.jpg" alt="" width="48"/> </a>
                        </div>
                        <div class="info">
                            <div class="title">
                                <a href="">我要做漫画家！！</a>
                            </div>
                            20237 个成员
                        </div>
                    </li>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\96_g74892-4.jpg" alt="" width="48"/> </a>
                        </div>
                        <div class="info">
                            <div class="title">
                                <a href="">科学松鼠会读者花园</a>
                            </div>
                            114727 个成员
                        </div>
                    </li>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\98_g223913-3.jpg" alt="" width="48"/> </a>
                        </div>
                        <div class="info">
                            <div class="title">
                                <a href="">||---胶---片---日---记---||</a>
                            </div>
                            8768 个成员
                        </div>
                    </li>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\100_g246109-1.jpg" alt="" width="48"/> </a>
                        </div>
                        <div class="info">
                            <div class="title">
                                <a href="">哦？地球上竟然还有这种事？！</a>
                            </div>
                            15504 个成员
                        </div>
                    </li>
                    <li>
                        <div class="pic">
                            <a href=""><img
                                    src="picture\102_g10469-6.jpg" alt="" width="48"/> </a>
                        </div>
                        <div class="info">
                            <div class="title">
                                <a href="">生活·读书·新知</a>
                            </div>
                            94294 个成员
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</div>


<div id="anony-events" class="section">
    <div class="wrapper">


        <div class="sidenav">
            <h2 class="section-title">
                <a href="">同城</a>
            </h2>


            <div class="side-links nav-anon">
                <ul>


                    <li>
                        <a href="">同城活动</a>
                    </li>

                    <li>
                        <a href="">主办方</a>
                    </li>

                    <li>
                        <a href="">舞台剧</a>
                    </li>


                </ul>
            </div>


            <div class="apps-list">
                <ul>
                    <li>
                        <a href="" class="lnk-icon"><i
                                class="app-icon app-icon-location"></i> </a><a
                            href="">豆瓣同城</a>
                    </li>
                </ul>
            </div>

        </div>

        <div class="side">

            <div class="mod">

                <h2>
                    活动标签
                    &nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;
                </h2>

                <div class="cate events-cate">
                    <ul>
                        <li class="cate-label">
                            <a
                                    href="">音乐&raquo;</a>
                        </li>
                        <li>
                            <a
                                    href="">小型现场</a>
                        </li>
                        <li>
                            <a
                                    href="">音乐会</a>
                        </li>
                        <li>
                            <a
                                    href="">演唱会</a>
                        </li>
                        <li>
                            <a
                                    href="">音乐节</a>
                        </li>
                    </ul>
                </div>
                <div class="cate events-cate">
                    <ul>
                        <li class="cate-label">
                            <a
                                    href="">戏剧&raquo;</a>
                        </li>
                        <li>
                            <a
                                    href="">话剧</a>
                        </li>
                        <li>
                            <a
                                    href="">音乐剧</a>
                        </li>
                        <li>
                            <a
                                    href="">舞剧</a>
                        </li>
                        <li>
                            <a
                                    href="">歌剧</a>
                        </li>
                        <li>
                            <a
                                    href="">戏曲</a>
                        </li>
                    </ul>
                </div>
                <div class="cate events-cate">
                    <ul>
                        <li class="cate-label">
                            <a
                                    href="">聚会&raquo;</a>
                        </li>
                        <li>
                            <a
                                    href="">生活</a>
                        </li>
                        <li>
                            <a
                                    href="">摄影</a>
                        </li>
                        <li>
                            <a
                                    href="">外语</a>
                        </li>
                        <li>
                            <a
                                    href="">桌游</a>
                        </li>
                        <li>
                            <a
                                    href="">交友</a>
                        </li>
                        <li>
                            <a
                                    href="">夜店</a>
                        </li>
                        <li>
                            <a
                                    href="">集市</a>
                        </li>
                    </ul>
                </div>
                <div class="cate events-cate">
                    <ul>
                        <li class="cate-label">
                            <a
                                    href="">电影&raquo;</a>
                        </li>
                        <li>
                            <a
                                    href="">主题放映</a>
                        </li>
                        <li>
                            <a
                                    href="">影展</a>
                        </li>
                        <li>
                            <a
                                    href="">影院活动</a>
                        </li>
                    </ul>
                </div>
                <div class="cate events-cate">
                    <ul>
                        <li class="cate-label">
                            <a
                                    href="">其他&raquo;</a>
                        </li>
                        <li>
                            <a
                                    href="">讲座</a>
                        </li>
                        <li>
                            <a
                                    href="">展览</a>
                        </li>
                        <li>
                            <a
                                    href="">运动</a>
                        </li>
                        <li>
                            <a
                                    href="">旅行</a>
                        </li>
                        <li>
                            <a
                                    href="">公益</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="main">


            <h2>
                北京 · 本周热门活动
                &nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;
                <span class="pl">&nbsp;( <a
                        href="" target="_self">更多</a> ) </span>
            </h2>

            <div class="events-list list">
                <ul>
                    <li>
                        <div class="pic">
                            <a href=""> <img
                                    src="picture\103_287125af7b627c7.jpg" width="70"> </a>
                        </div>
                        <div class="info">
                            <div class="title">
                                <a href=""
                                   title="与插画大师亲密接触 儿童插画师洛朗•里夏尔见面会"> 与插画大师亲密接触
                                    儿童插画师洛朗•里夏尔见面会 </a>
                            </div>
                            <div class="datetime">
                                12月19日 周四 15:30 - 17:30
                            </div>
                            <address title="今日美术馆，北京市朝阳区百子湾路32号">
                                今日美术馆，北京市朝阳区...
                            </address>
                            <div class="follow">
                                96人关注
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="pic">
                            <a href=""> <img
                                    src="picture\105_36357b9913c8268.jpg" width="70"> </a>
                        </div>
                        <div class="info">
                            <div class="title">
                                <a href=""
                                   title="第十一届囧展秋季场 （活动时间变更）"> 第十一届囧展秋季场 （活动时间变更） </a>
                            </div>
                            <div class="datetime">
                                1月5日 周日 10:00 - 16:30
                            </div>
                            <address title="国家会议中心">
                                国家会议中心
                            </address>
                            <div class="follow">
                                149人关注
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="pic">
                            <a href=""> <img
                                    src="picture\107_b0fbecbbde261bd.jpg" width="70"> </a>
                        </div>
                        <div class="info">
                            <div class="title">
                                <a href=""
                                   title="台湾果陀剧场话剧《淡水小镇》"> 台湾果陀剧场话剧《淡水小镇》 <span
                                        class="title-badge title-tickets-badge">正在售票</span> </a>
                            </div>
                            <div class="datetime">
                                1月8日 周三 - 1月10日 周五
                            </div>
                            <address title="国家大剧院">
                                国家大剧院
                            </address>
                            <div class="follow">
                                405人关注
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="pic">
                            <a href=""> <img
                                    src="picture\109_ae9f88344ed9fe2.jpg" width="70"> </a>
                        </div>
                        <div class="info">
                            <div class="title">
                                <a href=""
                                   title="170期丹若 ～零基础油画~创作~临摹【Shirley-纯白】"> 170期丹若
                                    ～零基础油画~创作~临摹【Shirley-纯白】 <span
                                            class="title-badge title-tickets-badge">正在售票</span> </a>
                            </div>
                            <div class="datetime">
                                12月15日 周日 13:30 - 16:30
                            </div>
                            <address title="海淀区学院路甲五号768创意园区B座北区1212">
                                海淀区学院路甲五号768创意...
                            </address>
                            <div class="follow">
                                1人关注
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</div>


<div class="wrapper">
    <div id="dale_anonymous_home_page_bottom" class="extra"></div>
    <div id="ft">



				<span id="icp" class="fleft gray-link"> &copy; 2005－2013
					douban.com, all rights reserved <br> <a
                            href="">京ICP证090015号</a> 京ICP备11027288号
					网络视听许可证<a href=""
                              target="_blank">0110418</a>号 <br>文网文[2012]0704-231号 <img
                            src="picture/111_biaoshi.jpg" align="absmiddle">
					京公网安备110105000728&nbsp;&nbsp;新出网证(京)字129号 </span>

        <span class="fright"> <a href="">关于豆瓣</a>
					· <a href="">在豆瓣工作</a> · <a
                    href="">联系我们</a> · <a
                    href="">免责声明</a> · <a
                    href="">帮助中心</a> · <a
                    href="" target="_blank">开发者</a> · <a
                    href="">移动应用</a> · <a
                    href="">豆瓣广告</a> </span>


    </div>
</div>

<script src="css\6__init_.js" data-cfg-corelib="css\7_jquery.min.js"></script>
<script type="text/javascript" src="css\8_2c927a9279d44919.js"></script>
</body>
</html>



