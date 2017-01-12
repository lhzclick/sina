//第二页底部小三角的切换
tabAngle($('li',$('#div5')),$('section',$('#div5')));

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
