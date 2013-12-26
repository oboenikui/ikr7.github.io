
var cvs = document.querySelector('canvas');
var ctx = cvs.getContext('2d');


var drawikr7 = function(x, y, size){
	var ikr7 = new Image();
	ikr7.src = './ikr7.png';
	ikr7.addEventListener('load', function(){
		ctx.drawImage(ikr7, x - size / 2, y - size / 2, size, size);
	}, false);
};

var point = function(x, y, size){
	ctx.fillStyle = 'red';
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI * 2, false);
	ctx.fill();
};

var f = function(x){
	y = Math.sin(x * Math.PI / 180);
	return y;
};

var applyFunc = function(){

	eval(document.querySelector('textarea').value);

	var w = cvs.width;
	var h = cvs.height;

	var scale = 10;
	
	ctx.clearRect(0, 0, w, h);

	ctx.strokeStyle = '#333';

	ctx.beginPath();
	ctx.moveTo(w / 2, 0);
	ctx.lineTo(w / 2, h);
	ctx.moveTo(0, h / 2);
	ctx.lineTo(w, h / 2);
	ctx.stroke();

	ctx.strokeStyle = '#DDD';

	for(var i = 0; i < w; i += w / scale / 2){
		ctx.beginPath();
		ctx.moveTo(i, 0);
		ctx.lineTo(i, h);
		ctx.moveTo(0, i);
		ctx.lineTo(w, i);
		ctx.stroke();
	}

	var i = -scale;

	var timer = setInterval(function(){
		if(i < scale){
			var x = i;
			var y = -f(x);
			drawikr7(( x * (w / 2) / scale + (w / 2)), (y * (h / 2) / scale + (h / 2)), 100);
			//point(( x * (w / 2) / scale + (w / 2)), (y * (h / 2) / scale + (h / 2)), 1);
			i += 1 / 10;
		}else{
			clearInterval(timer);
			console.log('End.');
		}
	}, 4);
};

document.querySelector('button').addEventListener('click', applyFunc, false);

applyFunc();
