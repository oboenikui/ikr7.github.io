
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

var init = function(ikr7){

	var Graph = function(context){
		var me = this;

		me.w = context.canvas.width;
		me.h = context.canvas.height;
		me.scale = parseInt(document.querySelector('#scale').value);
		me.density = parseInt(document.querySelector('#density').value);
		me.drawInPoint = document.querySelector('#drawInPoint').checked;
		me.lineWidth = parseInt(document.querySelector('#lineWidth').value);
		me.func = (new Function('x', 'return ' + document.querySelector('#func').value));
		me.draw = function(){
			var i = 0;
			var timer = 0;

			context.fillStyle = '#FF0000';
			
			(function(){
				if(i < me.scale){
					var x, y;
					if(me.drawInPoint){
						x = i;
						y = -me.func(x);
						context.fillRect((x * (me.w / 2) / me.scale + (me.w / 2)) - (me.lineWidth / 2), (y * (me.h / 2) / me.scale + (me.h / 2)) - (me.lineWidth / 2), me.lineWidth, me.lineWidth);
						x = -i;
						y = -me.func(x);
						context.fillRect((x * (me.w / 2) / me.scale + (me.w / 2)) - (me.lineWidth / 2), (y * (me.h / 2) / me.scale + (me.h / 2)) - (me.lineWidth / 2), me.lineWidth, me.lineWidth);
					}else{
						x = i;
						y = -me.func(x);
						context.drawImage(ikr7, (x * (me.w / 2) / me.scale + (me.w / 2)) - (me.lineWidth / 2), (y * (me.h / 2) / me.scale + (me.h / 2)) - (me.lineWidth / 2), me.lineWidth, me.lineWidth);
						x = -i;
						y = -me.func(x);
						context.drawImage(ikr7, (x * (me.w / 2) / me.scale + (me.w / 2)) - (me.lineWidth / 2), (y * (me.h / 2) / me.scale + (me.h / 2)) - (me.lineWidth / 2), me.lineWidth, me.lineWidth);
					}

					i += 1 / me.density;
					timer = requestAnimationFrame(arguments.callee);
				}else{
					cancelAnimationFrame(timer);
					console.log('END');
				}
			})();
		};
		me.clear = function(){
			context.clearRect(0, 0, me.w, me.h);
			context.strokeStyle = '#DDD';

			for(var i = 0; i < me.w; i += me.w / me.scale / 2){
			context.beginPath();
			context.moveTo(i, 0);
			context.lineTo(i, me.h);
			context.moveTo(0, i);
			context.lineTo(me.w, i);
			context.stroke();
			}

			context.strokeStyle = '#555';

			context.beginPath();
			context.moveTo(me.w / 2, 0);
			context.lineTo(me.w / 2, me.h);
			context.moveTo(0, me.h / 2);
			context.lineTo(me.w, me.h / 2);
			context.stroke();
		};
	};

	var cvs = document.querySelector('canvas');
	var ctx = cvs.getContext('2d');

	var change = function(e){
		e.preventDefault();
		var graph = new Graph(ctx);
		console.log(graph);
		graph.clear();
		graph.draw();
	};

	window.addEventListener('load', function(e){
		change(e);
	}, false);

	document.querySelector('form').addEventListener('submit', function(e){
		change(e);
	}, false);

}

var ikr7 = new Image();
ikr7.src = './ikr7.png';
ikr7.addEventListener('load', function(){
	init(ikr7);
}, false);
