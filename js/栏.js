//当前页面标记
(function(){
	$(".ul1 li").eq(6).css({
		backgroundColor:"rgba(0,0,0,0.3)",
		color:"#bababa",
        borderStyle:"solid",
        borderColor:"rgba(255,255,255,0.3)",
		height:"39px"
	});
	$("#ul2 li").eq(6).css({
		backgroundColor:"rgba(0,0,0,0.3)",
        color:"#bababa",
        borderStyle:"solid",
        borderColor:"rgba(255,255,255,0.3)",
        height:"80px"
	});
})()

//格子黑幕升降
var blackbox=document.querySelectorAll(".d2-1blackbox");
var box=document.querySelectorAll(".d2-1box");
for(let i=0;i<box.length;i++)
	{
		box[i].onmouseover=function(){
			blackbox[i].style.top="0%";
		}
		box[i].onmouseout=function(){
			blackbox[i].style.top="80%";
		}
	}
var d2331=document.getElementById("d2-1-2-1");
var blacbox2=document.querySelectorAll(".d2-1blackbox2");

d2331.onmouseover=function(){
	blacbox2[0].style.opacity="1";
}
d2331.onmouseout=function(){
	blacbox2[0].style.opacity="0";
}

//轮播图

function banner(){
	var box=document.querySelectorAll(".d2-1-1-1img");
	if(box[0].style.left==="-200%")
		{
			for(var i=0;i<box.length;i++)
				box[i].style.left=i*100+"%";
			return;
		}
		
	for(var j=0;j<box.length;j++)
		{
			box[j].style.left=Number(box[j].style.left.slice(0,box[j].style.left.length-1))-100+"%";
		}
}

setInterval(() => {banner();}, 3000);

//轮播图
var left=document.getElementById("lbt");
var right=document.getElementById("rbt");
var bt=document.querySelectorAll(".bt");
var imgs=document.getElementById("imgs");

let index=0;
let time;
function position(){
	imgs.style.left=(index*(-100))+"%";
	$(".bt").eq(index).css({'backgroundColor':"aliceblue"});
	$(".bt").eq(index).siblings().css({'backgroundColor':"rgb(77, 77, 77)"});
	setTimeout(function(){
		$(".d2-1-1-1img").eq(index).children("a").css({'top':'0'});
		$(".d2-1-1-1img").eq(index).siblings("li").children("a:odd").css({'top':'-100%'});
		$(".d2-1-1-1img").eq(index).siblings("li").children("a:even").css({'top':'100%'});
	},200);
}
position();
function add(){
	if(index>=bt.length-1){
		index=0;
	}
	else{
		index++;
	}
}
function desc(){
	if(index<1){
       index=bt.length-1;
    }
    else{
        index--;
    }
}
function timer(){
	time=setInterval(function(){
		index++;
		desc();
        add();
        position();
    },5000);
}

left.addEventListener("click",()=>{
	desc()
	position()
	clearInterval(time)
	timer()
})
right.addEventListener("click",()=>{
	add()
	position()
	clearInterval(time)
	timer()
})
timer()
$("#boult").mouseenter(function(){$(this).animate({opacity: '1'}, 100);})
$("#boult").mouseleave(function(){$(this).animate({opacity: '0'}, 100);})