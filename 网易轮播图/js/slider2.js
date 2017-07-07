window.onload = function(){
    function $(id){return document.getElementById(id);}

    var slider_main = $("slider_main");
    var slider_ctrl = $("slider_ctrl");
    var imgs = slider_main.children;
    var w_slider = $("w_slider");

    //节点操作
    for(var i=0;i<imgs.length;i++){
        var span = document.createElement("span");
        slider_ctrl.insertBefore(span,slider_ctrl.children[1]);
        span.innerHTML = imgs.length - i;
    }
    var spans = slider_ctrl.children;
    for(var i=1;i<spans.length-1;i++){
        spans[i].className = "slider-ctrl-con";
    }
    spans[1].className = "slider-ctrl-con current";
    //节点操作结束

    //图片操作开始
    var scrollWidth = w_slider.clientWidth;
    for(var i=1;i<imgs.length;i++){
        imgs[i].style.left = scrollWidth + "px";
    }

    var iNow = 0;
    for(var k in spans){
        spans[k].onclick = function(){
            if(this.className == "slider-ctrl-prev"){
                //alert("您点击了左侧按钮");
                animate(imgs[iNow],{left: scrollWidth});
                -- iNow < 0 ? iNow=imgs.length-1 : iNow;
                imgs[iNow].style.left = -scrollWidth + "px";
                animate(imgs[iNow],{left: 0});
                setSpan();

            }
            else if(this.className == "slider-ctrl-next"){
                //alert("您点击了右侧按钮");
                autoplay();
            }
            else {
                //alert("你点击了底部按钮");
                var that = this.innerHTML-1;
                //alert(that);
                if(that > iNow){
                    animate(imgs[iNow],{left: -scrollWidth});
                    imgs[that].style.left = scrollWidth + "px";
                }
                else if(that < iNow){
                    animate(imgs[iNow],{left: scrollWidth});
                    imgs[that].style.left = -scrollWidth + "px";
                }
                iNow = that;
                animate(imgs[iNow],{left: 0});
                setSpan();
            }
        }

    }

    function setSpan(){
        for(var i=1;i<spans.length-1;i++){
            spans[i].className = "slider-ctrl-con";
        }
        spans[iNow+1].className = "slider-ctrl-con current";
    }

    var timer = null;
    timer = setInterval(autoplay,2000)

    function autoplay(){
        animate(imgs[iNow],{left: -scrollWidth});
        ++ iNow > imgs.length-1 ? iNow=0 : iNow;
        imgs[iNow].style.left = scrollWidth + "px";
        animate(imgs[iNow],{left: 0});
        setSpan();
    }

    w_slider.onmouseover = function(){
        clearInterval(timer);
    }
    w_slider.onmouseout = function(){
        clearInterval(timer);
        timer = setInterval(autoplay,2000);
    }



}
