//当前页面标记
(function(){
	$(".ul1 li").eq(5).css({
		backgroundColor:"rgba(0,0,0,0.3)",
		color:"#bababa",
        borderStyle:"solid",
        borderColor:"rgba(255,255,255,0.3)",
		height:"39px"
	});
	$("#ul2 li").eq(5).css({
		backgroundColor:"rgba(0,0,0,0.3)",
        color:"#bababa",
        borderStyle:"solid",
        borderColor:"rgba(255,255,255,0.3)",
        height:"80px"
	});
})()

//格子黑幕升降
var blackbox=document.querySelectorAll(".d2-3blackbox");
var box=document.querySelectorAll(".d2-3box");
for(let i=0;i<box.length;i++)
	{
		box[i].onmouseover=function(){
			blackbox[i].style.top="0%";
		}
		box[i].onmouseout=function(){
			blackbox[i].style.top="80%";
		}
	}
var d2321=document.getElementById("d2-3-2-1");
var d2331=document.getElementById("d2-3-3-1");
var blacbox2=document.querySelectorAll(".d2-3blackbox2");
d2321.onmouseover=function(){
	blacbox2[0].style.opacity="1";
}
d2321.onmouseout=function(){
	blacbox2[0].style.opacity="0";
}
d2331.onmouseover=function(){
	blacbox2[1].style.opacity="1";
}
d2331.onmouseout=function(){
	blacbox2[1].style.opacity="0";
}