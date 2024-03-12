//d2框架整体居中+弹性布局
function b2_size(){
	$("html").scrollLeft(0);
	let b2=document.getElementById("d2");
	let W=window.innerWidth*0.6/1000;
	let H=(window.innerWidth-1000)/2;
	b2.style.left=H+"px";
	b2.style.transform="scale("+W+")";
	console.log(W);
}
(function(){//加载页面执行
	b2_size();
	b3_size();
})()
window.addEventListener('resize', function() {//改变大小执行
   b2_size();
	b3_size();
});

//d3框架位置计算
function b3_size(){
	let b3=document.getElementById("d3");
	let d2=document.getElementById("d2");
	let b2=window.getComputedStyle(d2).height.replace("px","");
	b3.style.top=b2*window.innerWidth*0.6/1000+400+"px";
}
//当前页面标记
(function(){
	$(".ul1 li").eq(4).css({
		backgroundColor:"rgba(0,0,0,0.3)",
		color:"#bababa",
        borderStyle:"solid",
        borderColor:"rgba(255,255,255,0.3)",
		height:"34px"
	});
	$("#ul2 li").eq(4).css({
		backgroundColor:"rgba(0,0,0,0.3)",
        color:"#bababa",
        borderStyle:"solid",
        borderColor:"rgba(255,255,255,0.3)",
        height:"75px"
	});
})()

//导航栏+icon显现
window.onscroll=function(){	
	var icon=document.querySelectorAll("#icon>img");
	var ul=document.querySelectorAll("#d1");
	if(document.documentElement.scrollTop>=260)
		{
			ul[0].style.top="0px";
			icon[1].style.opacity="1";
			icon[1].style.pointerEvents="";
		}
	else
		{
			ul[0].style.top="-80px";
			icon[1].style.opacity="0";
			icon[1].style.pointerEvents="none";
		}
}
//返回顶部按钮
var icon=document.querySelectorAll("#icon>img");
icon[1].onclick=function(){
	var head=document.querySelector(".box0");
	head.scrollIntoView();
}