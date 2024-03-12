//通过选择器获取小图标
let logobox=document.querySelectorAll(".ul1 li");//获取悬停范围
let logo=document.querySelectorAll(".ul1 li img");//获取修改对象
//定义图片修改函数
function logoalter(num,SRC1,SRC2)
	{
	logobox[num].onmouseover=function()
		{
			logo[num].src=SRC1;
		}
	logobox[num].onmouseout=function()
		{
			logo[num].src=SRC2;
		}
}

for(let i=0;i<6;i++)
	{
		let SRC1,SRC2;
		switch(i)
			{
				case 0:SRC1="img/UI/檐.svg";SRC2="img/UI/black/檐.svg";break;
				case 1:SRC1="img/UI/墙.svg";SRC2="img/UI/black/墙.svg";break;
				case 2:SRC1="img/UI/柱.svg";SRC2="img/UI/black/柱.svg";break;
				case 3:SRC1="img/UI/窗.svg";SRC2="img/UI/black/窗.svg";break;
				case 4:SRC1="img/UI/门.svg";SRC2="img/UI/black/门.svg";break;
				case 5:SRC1="img/UI/栏.svg";SRC2="img/UI/black/栏.svg";break;
			}
		logoalter(i,SRC1,SRC2);
	}


//工具栏隐藏
// let ul=document.getElementsByClassName("ul1");
// ul[0].onmouseover=function(){
// 	ul[0].style.top="15px";
// 	ul[0].onmouseout=function(){
// 	ul[0].style.top="-70px";
// 	}
// }

window.onload=function(){
	//卷轴弹性布局+飞行动画
let wAlter=document.getElementsByClassName("box3");//获取缩放对象:卷轴
(function(){
	
	let W=window.innerWidth*0.5/676;//定义缩放值
	let H=window.innerHeight*0.3;
	let R=window.innerWidth*0.4;
	wAlter[0].style.transform="scale("+W+")";
	wAlter[0].style.pointerEvents="none";
	
	wAlter[0].style.top=H-75+"px";
	wAlter[0].style.left=R-300+"px";
	wAlter[0].style.opacity=1;
	wAlter[0].style.rotate=360+"deg";
	
	setTimeout(function(){
		juanzhou();
	},1050)
})()

//卷轴展开动画
let shade = document.querySelector('.box2')
let jl=document.getElementById("juanzhou");
let jr=document.getElementById("juanzhou2");

function juanzhou()
{
	wAlter[0].style.pointerEvents="";
	jl.style.left=5+"%";
	jl.style.width=100+"%";
	jr.style.left=4295+"%";
	jr.style.width=100+"%";
	shade.style.WebkitMaskSize="100% 100%";
	console.log("触发提示");
}
}
