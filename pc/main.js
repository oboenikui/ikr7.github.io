
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
		me.drawInPoint = document.querySelector('#drawInPoint').checked;
		me.lineWidth = parseInt(document.querySelector('#lineWidth').value);
		me.timer = 0;
		me.func = (new Function('θ', 'return ' + document.querySelector('#func').value));
		me.draw = function(){
			
			var i = 0;
			context.fillStyle = '#FF0000';
			
			(function(){
				
				if(i < 3600){
					var θ = i * Math.PI / 180;
					var r = me.func(θ);
					var x = Math.cos(θ) * r;
					var y = Math.sin(θ) * r;
		
					if(me.drawInPoint){
						context.fillRect(
							(x * (me.w / 2) / me.scale + (me.w / 2)) - (me.lineWidth / 2), 
							(y * (me.h / 2) / me.scale + (me.h / 2)) - (me.lineWidth / 2), 
							me.lineWidth, me.lineWidth
						);
					}else{
						context.drawImage(
							ikr7, 
							(x * (me.w / 2) / me.scale + (me.w / 2)) - (me.lineWidth / 2), 
							(y * (me.h / 2) / me.scale + (me.h / 2)) - (me.lineWidth / 2), 
							me.lineWidth, me.lineWidth
						)
					}
					i++;
					me.timer = requestAnimationFrame(arguments.callee);
				}else{
					cancelAnimationFrame(me.timer);
					console.log('END');
				}

			})();
		};
		me.clear = function(){
			context.clearRect(0, 0, me.w, me.h);
			context.strokeStyle = '#DDD';

			for(var i = 0; i < me.w; i += me.w / me.scale / 2){
				context.beginPath();
				context.arc(me.w / 2, me.w / 2, i, 0, Math.PI * 2, false);
				context.closePath();
				context.stroke();
			}

			for (var i = 0; i < 360; i += 15) {
				var rad = i * Math.PI / 180
				context.beginPath();
				context.moveTo(me.w / 2, me.h / 2);
				context.lineTo(Math.cos(rad) * me.w + me.w / 2, Math.sin(rad) * me.h + me.h / 2);
				context.stroke();
			};
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

};

var ikr7 = new Image();
ikr7.src = './ikr7.png';
ikr7.addEventListener('load', function(){
	init(ikr7);
}, false);
