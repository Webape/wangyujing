window.onload = function(){
    function $(id){return document.getElementById(id);}

    var slider_main = $("slider_main");
    var slider_ctrl = $("slider_ctrl");
    var slider_next = $("slider_next");
    var slider_imgs = slider_main.children;
    var w_slider = $("w_slider");

    //操作节点开始
    for(var i=0;i<slider_imgs.length;i++){
        var span = document.createElement("span");
        span.className = "slider-ctrl-con";
        span.innerHTML = slider_imgs.length - i;
        slider_ctrl.insertBefore(span,slider_ctrl.children[1]);
    }
    var spans = slider_ctrl.children;
    spans[1].setAttribute("class","slider-ctrl-con current");
    //操作节点结束

    //加载完第一张图片留在左侧，其余图片留在右侧
    var scrollWidth = w_slider.clientWidth;
    for(var i=1;i<slider_imgs.length;i++){
        slider_imgs[i].style.left = scrollWidth + "px";
    }

    var iNow = 0;
    for(var k in spans){
        spans[k].onclick = function(){

            //左侧按钮
            if(this.className == "slider-ctrl-left"){
                animate(slider_imgs[iNow],{left: scrollWidth});
                --iNow < 0 ? iNow = slider_imgs.length-1 : iNow;
                slider_imgs[iNow].style.left = -scrollWidth + "px";
                animate(slider_imgs[iNow],{left: 0});
                setSpan();
            }
            //右侧按钮
            else if(this.className == "slider-ctrl-right"){
                autoplay();
            }
            //底部小按钮
            else {
                var that = this.innerHTML - 1;
                if(that > iNow){
                    animate(slider_imgs[iNow],{left: -scrollWidth});
                    slider_imgs[that].style.left = scrollWidth + "px";
                }
                else if(that < iNow){
                    animate(slider_imgs[iNow],{left:scrollWidth});
                    slider_imgs[that].style.left = -scrollWidth + "px";
                }
                iNow = that;
                animate(slider_imgs[iNow],{left: 0});
                setSpan();
            }
        }
    }

    //开启定时器 定时器其实就是右侧按钮操作
    var timer = null;
    timer = setInterval(autoplay,2000);
    function autoplay(){
        animate(slider_imgs[iNow],{left: -scrollWidth});
        ++iNow > slider_imgs.length-1 ? iNow = 0 : iNow;
        slider_imgs[iNow].style.left = scrollWidth + "px";
        animate(slider_imgs[iNow],{left: 0});
        setSpan();
    }

    w_slider.onmouseover = function(){
        clearInterval(timer);
    }
    w_slider.onmouseout = function(){
        clearInterval(timer);        //要开启定时器，先清除定时器
        timer = setInterval(autoplay,2000)
    }
    // 按钮函数
    function setSpan(){
        for(var i=1;i<spans.length-1;i++){
            spans[i].className = "slider-ctrl-con";
        }
        spans[iNow+1].className = "slider-ctrl-con current";
    }
}
