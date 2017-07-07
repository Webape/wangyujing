/**
 * Created by 拉布拉卡 on 2017/3/18.
 */
function $(id){ return document.getElementById(id);}

function show(obj){ obj.style.display = "block";}
function hide(obj){ obj.style.display = "none";}

function scroll(){
    if(window.pageXOffset != null){         //ie9+ 和其他浏览器
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compat == "CSS1Compat"){       // 声明的了 DTD
        return {                            // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {                                //怪异模式
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}

function client() {
    if(window.innerWidth != null)  // ie9 +  最新浏览器
    {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    else if(document.compatMode === "CSS1Compat")  // 标准浏览器
    {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
    return {   // 怪异浏览器
        width: document.body.clientWidth,
        height: document.body.clientHeight

    }
}