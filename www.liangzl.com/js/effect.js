$(document).ready(function(){ 
    $(".fir-sentence").animate({
        opacity: 1,
        right: 200
    },2500,function(){
        $(".sec-sentence").animate({
            opacity: 1,
            right: 150
        },2500,function(){
            $(".thr-sentence").animate({
                opacity: 1,
            },2500);
        });
    });
    $(".mess-soc span").on("mouseenter",function(){
        //alert($(this).index());
        $(".rel").eq($(this).index()).stop().animate({
            "opacity": 1,
            "top": 25
        })

    })  
    $(".mess-soc span").on("mouseleave",function(){
        //alert($(this).index());
        $(".rel").eq($(this).index()).stop().animate({
            "opacity": 0,
            "top": 15
        })

    })

    $(".inform").on("mouseenter",function(){
        $(this).stop().animate({
            "opacity": 0.9
        });
    }).on("mouseleave",function(){
        $(this).stop().animate({
            "opacity": 0.7
        })
    })

    $(".scroll").on("mouseenter",function(){
        clearInterval(timer);
        $(".btn").fadeIn();
    }).on("mouseleave",function(){
        $(".btn").fadeOut();
        timer = setInterval(autoplay,3000)
    });

    $(".pointer span").on("mouseenter",function(){
        $(this).addClass("staring").siblings().removeClass("staring");
        $(".scroll li").eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
    })
    var iNow = 0;
    $(".btn-prev").on("click",function(){
        $(".scroll li").eq(iNow).stop().fadeOut();
        --iNow < 0 ? iNow = $(".scroll li").length - 1 : iNow;
        $(".scroll li").eq(iNow).stop().fadeIn();
        $(".pointer span").eq(iNow).addClass("staring").siblings().removeClass("staring");
    })
    $(".btn-next").on("click",function(){
        autoplay();
    })

    // 开启定时器
    var timer = null;
    timer = setInterval(autoplay,3000);
    function autoplay(){
        $(".scroll li").eq(iNow).stop().fadeOut();
        ++iNow > $(".scroll li").length-1 ? iNow = 0 : iNow;
        $(".scroll li").eq(iNow).stop().fadeIn();
        $(".pointer span").eq(iNow).addClass("staring").siblings().removeClass("staring");
    }

    // 瀑布流相册js部分
    var num = Math.floor($(".album").width() / $(".frame").outerWidth(true));
    //alert(num)
    var imgHeight = [];   // 存放第一行图片的高度
    for(var i = 0; i < $(".frame").length; i++){
        if(i < num){
            imgHeight[i] = $(".frame").eq(i).outerHeight(true);
        }
        else{
            var minHeight = Math.min.apply(null,imgHeight); // 第一行图片高度的最小值
            var index = findMinImgLocation(imgHeight,minHeight);    // 最小图片的序号
            $(".frame").eq(i).css({
                "position": "absolute",
                "top": minHeight,
                "left": $(".frame").eq(index).offset().left - $(".album .wrap").offset().left - 5
            });
            imgHeight[index] = imgHeight[index] + $(".frame").eq(i).outerHeight(true);
        }
    }

    // console.log(imgHeight);
    var maxHeight = Math.max.apply(null,imgHeight);
    // alert(maxHeight);
    $(".wrap").height(maxHeight + 10);

    // console.log($(".album .wrap").offset().left);
    // console.log($(".frame").eq(0).offset().left);
    // console.log(imgHeight);
    function findMinImgLocation(imgHeight,minHeight){
        for(var k in imgHeight){
            if(imgHeight[k] == minHeight){
                return k
            }
        }
    }
    // 小圆圈
    $(".mood-msg li").on("mouseenter",function(){
        $(this).find(".point span").addClass("point-on");
    }).on("mouseleave",function(){
        $(this).find(".point span").removeClass("point-on");
    })

    // 渐变色按钮
    $(".sm-msg button").hover(function(){
        $(this).stop().animate({backgroundColor: "#3c9"},"fast");
    },function(){
        $(this).stop().animate({backgroundColor: "#add8e6"},"fast");
    })

    // 弹出层success
    $(".sm-msg button").on("click",function(){
        $(".success").css("display","block");
        setTimeout(boxHidden, 3000)
        function boxHidden(){
            $(".success").fadeOut();
        }
    })
});
