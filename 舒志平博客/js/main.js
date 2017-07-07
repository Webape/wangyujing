jQuery(document).ready(function($) {

	// 变色
	function changeColor(boxname){
		boxname.on("mouseenter",function(){
			$(this).stop().animate({"background-color": "#333"},"fast");
		})
		boxname.on("mouseleave",function(){
			$(this).stop().animate({"background-color": "#000"},"fast");
		})
	}
	changeColor($("#nav li"));
	changeColor($("#nav li"));
	changeColor($("#dropnav .list"));
	changeColor($("#dropnav .dropnav-content li"));

	// 选项卡
	$("#dropnav .list").on("click",function(){
		// alert($(this).index(".list"));
		if($("#dropnav .dropnav-content").eq($(this).index(".list")).css("display") == "none"){
			$("#dropnav .dropnav-content").hide().eq($(this).index(".list")).fadeIn();
			$(this).find(".angle").removeClass("fa fa-angle-right").addClass("fa fa-angle-down");
		}
		else {
			$("#dropnav .dropnav-content").hide();
			$(this).find(".angle").removeClass("fa fa-angle-down").addClass("fa fa-angle-right");
		}
	})


	// tab栏
	$(".tabs").on("click",function(){
		// alert($(this).index());
		$(".tabs").removeClass("line").eq($(this).index()).addClass("line");
		$(".tab-content").hide().eq($(this).index()).show();
;	})

	// 登录
	$("#topnav .login").on("click",function(event){
		// event.stopPropagation();
		if($("#topnav .register").css("display") == "none"){
			$("#topnav .register").fadeIn();
		}
		else {
			$("#topnav .register").hide();
		}
	})
	// $(document).on("click",function(event){
	// 	alert($(event.target));
	// })
});
