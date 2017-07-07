var btn = document.getElementById("btn");
var wrap = document.getElementById("wrap");
var lis = document.getElementsByTagName("li");
var point = btn.children;

wrap.onmouseover = function(){
    animate(btn,{opacity: 100});
}
wrap.onmouseout = function(){
    animate(btn,{opacity: 0});
}
//所有的图片信息都储存在json
var json = [
    {   //  1
        width:400,
        top:20,
        left:50,
        opacity:20,
        z:2
    },
    {  // 2
        width:600,
        top:70,
        left:0,
        opacity:80,
        z:3
    },
    {   // 3
        width:800,
        top:100,
        left:200,
        opacity:100,
        z:4
    },
    {  // 4
        width:600,
        top:70,
        left:600,
        opacity:80,
        z:3
    },
    {   //5
        width:400,
        top:20,
        left:750,
        opacity:20,
        z:2
    }
];

change();
var jieliu = true;
for(var k in point){
    point[k].onclick = function(){
        if(this.className == "prev"){
           // alert("左侧按钮");
            if(jieliu == true){
                change(false);
                jieliu = false;
            }
        }
        else if(this.className == "next"){
            //alert("右侧按钮");
            if(jieliu == true){
                change(true);
                jieliu = false;
            }
        }
    }
}

function change(flag){
    if(flag){
        json.unshift(json.pop());       //删除最后一个json，并添加到第一个
    }
    else {
        json.push(json.shift());        //移除第一个json，并添加到最后面
    }

    for(var i=0;i<json.length;i++){
        animate(lis[i],{
            width: json[i].width,
            top: json[i].top,
            left: json[i].left,
            opacity: json[i].opacity,
            zIndex: json[i].z
        },function(){ jieliu = true})
    }
}
