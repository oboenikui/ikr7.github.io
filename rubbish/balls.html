<!DOCTYPE html>
<html>
<head>
<meta charset='UTF-8'>
<style>

body {
    margin: 0;
    overflow: hidden;
}

div{
	position: absolute;
}

</style>
</head>
<body>
<div>なんというか収束する感じ</div>
<canvas></canvas>
<script src='./utils.js'></script>
<script>

var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var createBall = function(){
	return {
		'x': Math.random() * context.canvas.width | 0, 
		'y': Math.random() * context.canvas.height | 0, 
		'nextx': 0, 
		'nexty': 0, 
		// 'r': Math.random() * 30 | 0, 
		'r': 30, 
		'angle': Math.random() * 360 | 0, 
		'vel': {
			'x': 30, 
			'y': 30
		}, 
		'color': {
			'h': Math.random() * 360 | 0, 
			's': 100, 
			'l': 50, 
			'a': 0.5
		}
	};
};

var balls = [];

var setBallCount = function(n){
	balls = [];
	for(var i = 0; i < n; i++){
		balls.push(createBall());
	}
};



var update = function(){

	context.fillStyle = 'rgba(255, 255, 255, 0.1)';
	context.fillRect(0, 0, context.canvas.width, context.canvas.height);

	balls.forEach(function(ball, i){

		balls.forEach(function(otherBall, j){
			if(j != i){
				var distance = Math.sqrt(Math.pow(ball.x - otherBall.x, 2) + Math.pow(ball.y - otherBall.y, 2));
				//ikr7Utils.Canvas.line(context, ball.x, ball.y, otherBall.x, otherBall.y, 'rgba(0,0,0,1)', 3);
				if(distance < ball.r + otherBall.r){
					ikr7Utils.Canvas.circle(
						context, 
						ball.x + distance / (ball.r + otherBall.r) * ball.r, 
						ball.y + distance / (ball.r + otherBall.r) * ball.r, 
						5, 
						'red'
					);
					//alert('Collide !');
					//ball.vel.x *= -1;
					//ball.vel.y *= -1;
				}
			}
		});

		if(ball.x < 0 + ball.r || ball.x > context.canvas.width - ball.r){
			//ball.angle = (180 - ball.angle) % 360;
			ball.vel.x *= -1;
		}

		if(ball.y < 0 + ball.r || ball.y > context.canvas.height - ball.r){
			// ball.angle = (360 - ball.angle) % 360;
			ball.vel.y *= -1;
		}

		// ball.x += Math.cos(ball.angle * Math.PI / 180) * ball.vel.x / ball.r;
		// ball.y += Math.sin(ball.angle * Math.PI / 180) * ball.vel.y / ball.r ;

		ball.x += ball.vel.x / ball.r;
		ball.y += ball.vel.y / ball.r;

		ikr7Utils.Canvas.circle(
			context, 
			ball.x, 
			ball.y, 
			ball.r, 
			'hsla(' + ball.color.h + ',' + ball.color.s + '%,' + ball.color.l + '%,' + ball.color.a + ')'
		);

	});

	//setTimeout(update, 1000 / FRAMERATE);
	requestAnimationFrame(update);

};

setBallCount(2);
update(0);

</script>
</body>
</html>
