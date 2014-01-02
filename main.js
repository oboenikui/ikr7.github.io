
var cvs = document.querySelector('canvas');
var ctx = cvs.getContext('2d');

	var abs = Math.abs, 
		acos = Math.acos, 
		asin = Math.asin, 
		atan = Math.atan, 
		atan2 = Math.atan2, 
		ceil = Math.ceil, 
		cos = Math.cos, 
		E = Math.E, 
		exp = Math.exp, 
		floor = Math.floor, 
		LN10 = Math.LN10, 
		LN2 = Math.LN2, 
		log = Math.log, 
		LOG10E = Math.LOG10E, 
		LOG2E = Math.LOG2E, 
		max = Math.max, 
		min = Math.min, 
		PI = Math.PI, 
		pow = Math.pow, 
		random = Math.random, 
		round = Math.round, 
		sin = Math.sin, 
		sqrt = Math.sqrt, 
		SQRT1_2 = Math.SQRT1_2, 
		SQRT2 = Math.SQRT2, 
		tan = Math.tan;

var drawikr7 = function(x, y, size){
	var ikr7 = new Image();
	ikr7.src = './ikr7.png';
	ikr7.addEventListener('load', function(){
		ctx.drawImage(ikr7, x - size / 2, y - size / 2, size, size);
	}, false);
};

var point = function(x, y, size){
	ctx.fillStyle = '#F00';
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI * 2, false);
	ctx.fill();
};

var f = function(){};

var applyFunc = function(){

	eval(document.querySelector('textarea').value);

	var w = cvs.width;
	var h = cvs.height;

	ctx.clearRect(0, 0, w, h);

	ctx.strokeStyle = '#DDD';

	var scale = document.querySelector('#config_scale').value;
	var density = document.querySelector('#config_density').value;
	var drawInPoint = document.querySelector('#config_point').checked;

	for(var i = 0; i < w; i += w / scale / 2){
		ctx.beginPath();
		ctx.moveTo(i, 0);
		ctx.lineTo(i, h);
		ctx.moveTo(0, i);
		ctx.lineTo(w, i);
		ctx.stroke();
	}

	ctx.strokeStyle = '#555';

	ctx.beginPath();
	ctx.moveTo(w / 2, 0);
	ctx.lineTo(w / 2, h);
	ctx.moveTo(0, h / 2);
	ctx.lineTo(w, h / 2);
	ctx.stroke();

	var i = 0;
	var timer;

	(function(){
		if(i < scale){
			
			var x = i;
			var y = -f(x);
			
			if(drawInPoint){
				point((x * (w / 2) / scale + (w / 2)), (y * (h / 2) / scale + (h / 2)), 1);
			}else{
				drawikr7(( x * (w / 2) / scale + (w / 2)), (y * (h / 2) / scale + (h / 2)), 100);
			}
			
			var x = -i;
			var y = -f(x);

			if(drawInPoint){
				point((x * (w / 2) / scale + (w / 2)), (y * (h / 2) / scale + (h / 2)), 1);
			}else{
				drawikr7(( x * (w / 2) / scale + (w / 2)), (y * (h / 2) / scale + (h / 2)), 100);
			}

			i += 1 / density;
			timer = requestAnimationFrame(arguments.callee);

		}else{
			cancelAnimationFrame(timer);
			console.log('End.');
		}
	})();
};

document.querySelector('button').addEventListener('click', applyFunc, false);

var c = false;
window.addEventListener('keydown', function(e){
	if(e.keyCode == 67){
		c = !c;
		document.querySelector('#configs').style.display = c ? 'block' : 'none';
	}
}, true);

document.querySelector('#savebutton').addEventListener('click', function(){
	open(cvs.toDataURL('image/png'), Math.random().toString());
}, false)

applyFunc();
