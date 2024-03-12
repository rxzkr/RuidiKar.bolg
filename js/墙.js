//当前页面标记
(function(){
	$(".ul1 li").eq(2).css({
		backgroundColor:"rgba(0,0,0,0.3)",
		color:"#bababa",
        borderStyle:"solid",
        borderColor:"rgba(255,255,255,0.3)",
		height:"39px"
	});
	$("#ul2 li").eq(2).css({
		backgroundColor:"rgba(0,0,0,0.3)",
        color:"#bababa",
        borderStyle:"solid",
        borderColor:"rgba(255,255,255,0.3)",
        height:"80px"
	});
})()

//右箭头动画
$('pre').mouseenter(function(){
	$(this).children("img").eq(1).animate({marginLeft: '+=10px'}, 100);
	$(this).children("img").eq(1).animate({marginLeft: '-=10px'}, 100);
	$(this).children("img").eq(1).animate({marginLeft: '+=10px'}, 100);
	$(this).children("img").eq(1).animate({marginLeft: '-=10px'}, 100);
})
$('pre').mouseleave(function(){
	$(this).children("img").eq(1).stop(true).animate({
		marginLeft: '0px'
	  },200);
});