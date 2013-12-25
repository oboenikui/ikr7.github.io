
var cvs = document.querySelector('canvas');
var ctx = cvs.getContext('2d');


var drawikr7 = function(x, y, size){
	var ikr7 = new Image();
	ikr7.src = './ikr7.png';
	ikr7.addEventListener('load', function(){
		ctx.drawImage(ikr7, x - size / 2, y - size / 2, size, size);
	}, false);
};

var f = function(x){
	y = Math.sin(x * Math.PI / 180) * 250;
	return y;
};

var applyFunc = function(){

	eval(document.querySelector('textarea').value);

	var w = cvs.width;
	var h = cvs.height;

	ctx.clearRect(0, 0, w, h);

	ctx.beginPath();
	ctx.moveTo(cvs.width / 2, 0);
	ctx.lineTo(cvs.width / 2, cvs.height);
	ctx.moveTo(0, cvs.height / 2);
	ctx.lineTo(cvs.width, cvs.height / 2);
	ctx.strokeStyle = '#AAA';
	ctx.stroke();

	ctx.font = '12px "Lucida Grande", Helvetica, Arial, sans-serif';
	ctx.fillText('0', 252, 248);
	ctx.fillText('X', 485, 248);
	ctx.fillText('Y', 252, 15);

	var i = -1 * w / 2;
	var timer = setInterval(function(){
		if(i < w / 2){
			var x = i;
			var y = -f(x);
			drawikr7(x + w / 2, y + h / 2, 100);
			i += 5;
		}else{
			clearInterval(timer);
			//applyFunc();
			console.log('End.');
		}
	}, 10);
};

document.querySelector('button').addEventListener('click', applyFunc, false);

applyFunc();
