//第三页底部灰色块和小三角的切换
tabAngle($('img',$('#div4')),$('aside',$('#div4')),$('div',$('#div4')));

//灰色块和小三角切换函数
function tabAngle(hover,change1,change2) {
	for(var i = 0 ; i <hover.length; i ++){
		hover[i].index = i ;
		hover[i].onmouseover = function (){
			for(var i = 0 ; i < hover.length ; i ++){
				change1[i].style.display = 'none';
				change2[i].style.display = 'none';
			}
			change1[this.index].style.display = 'block';
			change2[this.index].style.display = 'block';
		}
	}
}