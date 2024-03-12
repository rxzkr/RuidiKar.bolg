//悬停图片放大
var img=document.querySelectorAll(".blowup");
for(let i=0;i<img.length;i++)
	{
		img[i].onmouseover=function(){
			img[i].style.transition="all 0.5s ease";
			img[i].style.transform="scale(1.05)";
		}
		img[i].onmouseout=function(){
			img[i].style.transform="scale(1.0)";
		}
	}

//d2框架整体居中+弹性布局
function b2_size(){
	$("html").scrollLeft(0);
	let b2=document.getElementById("d2");
	let W=window.innerWidth*0.8/1600;
	let H=(window.innerWidth-1600)/2;
	b2.style.left=H+"px";
	b2.style.transform="scale("+W+")";
}
(function(){//加载页面执行
	b2_size();
	b3_size();
	console.log("OK");
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
	b3.style.top=b2*window.innerWidth*0.8/1600+350+"px";
}

//导航栏显现
window.onscroll=function(){	
	var ul=document.querySelectorAll("#d1");
	if(document.documentElement.scrollTop>=260)
		{
			ul[0].style.top="0px";
		}
	else
		{
			ul[0].style.top="-80px";
		}
}
//加载动画隐藏
$(window).on("load",function(){
	$("#load").fadeOut("slow");
});