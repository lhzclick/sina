//大图切换
var middleImg = $('#middleImg');
var middleImgLi = $('li',middleImg);
var middleImgImg = $('img',middleImg);
for(var i = 0 ; i < middleImgLi.length ; i ++){
	middleImgLi[i].index = i;
	middleImgLi[i].onclick = function (){
		n = this.index ;
		swich();
	}
}
var timer = null ;
var n = 0 ;
timer = setInterval(function(){
	n ++ ;
	n = n == middleImgLi.length ? 0 : n ;
	swich();
},3000)
//带小圆点大背景图切换的函数
function swich(){
	for(var i = 0 ; i < middleImgLi.length ; i ++){
			middleImgImg[i].style.display = 'none';
			middleImgLi[i].style.backgroundColor = '';
		}
	middleImgImg[n].style.display = 'block';
	middleImgLi[n].style.backgroundColor = '#5db5ec';
}


//第一页底部小三角的切换
var small = $('#small');
var imgDiv = $('article',$('#small'));
var ico = $('section',$('#small'));
tabAngle(imgDiv,ico);


//小三角切换函数
function tabAngle(hover,change) {
	for(var i = 0 ; i <hover.length; i ++){
	hover[i].index = i ;
	hover[i].onmouseover = function (){
		for(var i = 0 ; i < hover.length ; i ++){
			change[i].style.display = 'none';
		}
		change[this.index].style.display = 'block';
	}
}
}
