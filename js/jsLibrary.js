//通过id和tagName获取元素
function $(name,tag){
	if(name.charAt(0) === '#'){
		name = name.slice(1)
		return document.getElementById(name);
	}else{
		tag = tag || document ; 
		return tag.getElementsByTagName(name);
	}
}


//获取样式的函数
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj)[attr];
	}
}
