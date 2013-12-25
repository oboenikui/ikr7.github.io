
var cvs = document.querySelector('canvas');
var ctx = cvs.getContext('2d');


var drawikr7 = function(x, y){
	var ikr7 = new Image();
	ikr7.src = './ikr7.png';
	ikr7.addEventListener('load', function(){
		ctx.drawImage(ikr7, x - 20, y - 20, 40, 40);
	}, false);
};

var w = cvs.width;
var h = cvs.height;

var i = -1 * w / 2;
var timer = setInterval(function(){
	if(i < w / 2){
		var x = i;
		var y = -1 * f(x);
		drawikr7(x + w / 2, y + h / 2);
		i += 2;
	}else{
		clearInterval(timer);
		console.log('End.');
	}
}, 10);

function f(x){
	var y;
	y = x * x;
	return y;
}