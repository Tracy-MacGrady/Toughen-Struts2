Do(function(){var MOTION_SPEED=120,SEL_SUBMENU=".dropdown-submenu",SEL_SUBMENU_LIST=".submenu-list",FLAG_ACTIVE="active";$(".dropdown-menu").on("click",SEL_SUBMENU,function(e){var dropdownMenu=$(e.delegateTarget),currSubmenu=$(e.currentTarget),actived=currSubmenu.hasClass(FLAG_ACTIVE);actived||dropdownMenu.find(SEL_SUBMENU).removeClass(FLAG_ACTIVE).end().find(SEL_SUBMENU_LIST).hide(MOTION_SPEED),currSubmenu.toggleClass(FLAG_ACTIVE).find(SEL_SUBMENU_LIST).toggle(MOTION_SPEED)})}),Do("ui/slide",function(){var Slide=Ark.Slide,slideScreen=$(".slide-screen");if(slideScreen.length){var slideAction=$(".slide-action");new Slide(slideScreen,{nav:$(".slide-controls"),nextBtn:slideAction.find(".next"),prevBtn:slideAction.find(".prev"),loop:!0,autoplay:!0})}var hotBooks=$(".hot-books"),hotWokrsTrack=hotBooks.find(".carousel");new Slide(hotWokrsTrack,{nextBtn:hotBooks.find(".slide-next"),prevBtn:hotBooks.find(".slide-prev")});var newWorks=$(".new-works"),newWorksTrack=newWorks.find(".carousel");new Slide(newWorksTrack,{nextBtn:newWorks.find(".slide-next"),prevBtn:newWorks.find(".slide-prev")});var featureBooks=$(".featured-books"),featureBooksTrack=featureBooks.find(".carousel");new Slide(featureBooksTrack,{nextBtn:featureBooks.find(".slide-next"),prevBtn:featureBooks.find(".slide-prev")});var discountBooks=$(".discount-books"),discountBooksTrack=discountBooks.find(".carousel");new Slide(discountBooksTrack,{nextBtn:discountBooks.find(".slide-next"),prevBtn:discountBooks.find(".slide-prev")})}),Do("widget/tabs",function(){$.fn.splat=function(){return this.map(function(i,el){return $(el)})};var worksFormTabs=$("#works-form-tabs li"),worksList=$(".rankings .list"),rankingTabs=new Tabs(worksFormTabs.splat(),worksList.splat());rankingTabs.initState(0)});