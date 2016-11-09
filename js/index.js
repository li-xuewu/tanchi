$(function(){
	var box=$("#scene");
	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 20; j++) {
			var div=$("<div>");
			div.id=i+"-"+j;
			box.appendChild(div);
		}
	}
	     //    坐标，设置蛇的位置
	 var she=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
	 for (var i = 0; i < she.length; i++) {
	 	//        she的id(坐标) 
	 	var obj=$("#"+she[i].x+"-"+she[i].y);
	 	obj.className="she";
	 };
	 // 随机获取食物
	 function getFood(){
	 	// 判断 不要food和she对上
	 	do{
	 		var x=Math.floor(Math.random()*20);
	 	    var y=Math.floor(Math.random()*20);
	 	}while(panduan(x,y));
	 	var obj=$("#"+x+"-"+y)
	 	obj.className="food";
	 	return {x:x,y:y};
	 }
	 function panduan(a,b){
	 	for (var i = 0; i < she.length; i++) {
	 		if(she[i].x==a&&she[i].y==b){
                  return true;
	 		}
	 	}
	 	return false;
	 }
	 var food=getFood();
	 // var foodobj=$("#"+food.x+"-"+food.y);
	 // foodobj.className="food";
	 var fangxiang="you";
     var a
     var b
	 function move(){
	 	var oldt=she[she.length-1];
	 	if(fangxiang=="you"){
	 	var newt=$("#"+oldt.x+"-"+(oldt.y+1));
	 	if(newt==undefined||panduan(oldt.x,oldt.y+1)){
	 		alert("game over");
	 		clearInterval(t);
	 		return;
	 	}
	 	a=oldt.x;
	 	b=oldt.y+1;
	 	newt.className="she";
	 	// 新头{x:oldt.x,y:oldt.y+1}
	 	// 放入新头
	 	she.push({x:oldt.x,y:oldt.y+1});
	 }
	 else if(fangxiang=="zuo"){
				var newtou=$("#"+oldt.x+"-"+(oldt.y-1));
		//撞墙或者撞自己游戏结束
		if(newtou==undefined||panduan(oldt.x,oldt.y-1)){
			alert("game over")
			clearInterval(t);
			return;
		}
		a=oldt.x;
		b=oldt.y-1;
         newtou.className="she";
		she.push({x:oldt.x,y:oldt.y-1});
		}
		else if(fangxiang=="xia"){
			var newtou=$("#"+(oldt.x+1)+"-"+oldt.y);
		//撞墙或者撞自己游戏结束
		if(newtou==undefined||panduan(oldt.x+1,oldt.y)){
			alert("game over")
			clearInterval(t);
			return;
		}
		a=oldt.x+1;
		b=oldt.y;
         newtou.className="she";
		she.push({x:oldt.x+1,y:oldt.y});
		}
		else if(fangxiang=="shang"){
			var newtou=$("#"+(oldt.x-1)+"-"+oldt.y);
		//撞墙或者撞自己游戏结束
		if(newtou==undefined||panduan(oldt.x-1,oldt.y)){
			alert("game over")
			clearInterval(t);
			return;
		}
		a=oldt.x-1;
		b=oldt.y;
        newtou.className="she";
		she.push({x:oldt.x-1,y:oldt.y});
		}
	
	 	// 去 旧蛇尾

	 	if(food.x==a&&food.y==b){
			food=getFood();
		}else{
			var shewei=$("#"+she[0].x+"-"+she[0].y);
		    shewei.className=""
		    she.shift();
		}
	 }
	  var t=setInterval(move,400);
	  document.onkeydown=function(e){
	  	var e=e||window.event;
	  	var nub=e.keyCode;
	  	if(nub==37){
      	if(fangxiang=="you"){
           return;
      	}
      	fangxiang="zuo";
      }else if(nub==38){
      	if(fangxiang=="xia"){
      		return;
      	}
      	fangxiang="shang"
      }else if(nub==39){
      	if(fangxiang=="zuo"){
      		return;
      	}
      	fangxiang="you"
      }else if(nub==40){
      	if(fangxiang=="shang"){
      		return;
      	}
      	fangxiang="xia";
      }
	  }
})