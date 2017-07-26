$(function(){
    var current = null;
    var scrollTop = null;
    $(window).on("load scroll", function () {
        // console.log($(this).scrollTop());
        scrollTop = $(this).scrollTop();
        if(scrollTop < 600) {
            $(".facade h1").removeClass("animate-init").addClass("animate-done");
            $(".facade .phone-1").removeClass("animate-init").addClass("animate-done");
            $(".facade .shadow").removeClass("animate-init").addClass("animate-done");
            $("nav a").eq(0).addClass("current").siblings().removeClass("current");
            current = 30;
        }
        else if(scrollTop < 1400) {
            $(".deploy h1").removeClass("animate-init").addClass("animate-done");
            $(".deploy h2").removeClass("animate-init").addClass("animate-done");
            $(".deploy .phone-2").removeClass("animate-init").addClass("animate-done");
            $("nav a").eq(1).addClass("current").siblings().removeClass("current");
            current = 130;
        }
        else if(scrollTop < 2200) {
            $(".model h1").removeClass("animate-init").addClass("animate-done");
            $(".model h2").removeClass("animate-init").addClass("animate-done");
            $(".model .argument").removeClass("animate-init").addClass("animate-done");
            $(".model .phone-3").removeClass("animate-init").addClass("animate-done");
            $("nav a").eq(2).addClass("current").siblings().removeClass("current");
            current = 230;

        }
        else if(scrollTop < 3000) {
            $(".explain h1").removeClass("animate-init").addClass("animate-done");
            $(".explain h2").removeClass("animate-init").addClass("animate-done");
            $(".explain .phone-types .phone-types-items").removeClass("animate-init").addClass("animate-done");
            $("nav a").eq(3).addClass("current").siblings().removeClass("current");
            current = 330;
        }
        else if(scrollTop < 3800) {
            $(".other h1").removeClass("animate-init").addClass("animate-done");
            $(".other h2").removeClass("animate-init").addClass("animate-done");
            $(".other .bg-animation").removeClass("animate-init").addClass("animate-done");
            $("nav a").eq(4).addClass("current").siblings().removeClass("current");
            current = 430;
        }
        $("nav .line").css("left",current);
    });

    // 吸顶导航
    $(window).on("scroll",function(){
        var scroll = $(this).scrollTop();
        if(scroll > 100) {
            $("header").addClass("header-animate-done");
            $(".logo span").addClass("logo-animate-done");
            $("nav a").addClass("nav-animate-done");
        }
        else {
            $("header").removeClass("header-animate-done");
            $(".logo span").removeClass("logo-animate-done");
            $("nav a").removeClass("nav-animate-done");
        }
    })

    // 定位双向绑定
    $("nav a").on("click",function(){
        // alert($(this).index());
        var index = $(this).index();
        $(window).scrollTop(index * 800);
        $("nav a").eq(index).addClass("current").siblings().removeClass("current");
    })

    // 导航滑动门特效
    $("nav a:lt(5)").on("mouseenter",function(){
        $("nav .line").css("left",$(this).index() * 100 + 30);
    });
    $("nav a:lt(5)").on("mouseleave",function(){
        $("nav .line").css("left",current);
    })
})