
var cvs = document.querySelector('canvas');

cvs.width = 512;
cvs.height = 512;

var ctx = cvs.getContext('2d');

var calculate = function(){
	
	var n = document.querySelector('input').value;
	
	ctx.clearRect(0, 0, cvs.width, cvs.height);

	ctx.beginPath();
	ctx.arc(256, 256, 256, 0, Math.PI * 2, false);
	ctx.strokeStyle = 'red';
	ctx.stroke();

	ctx.strokeStyle = 'black';

	for(var i = 0; i < n; i++){
		var angle = 360 / n * i * Math.PI / 180;
		var nextAngle = 360 / n * (i + 1) * Math.PI / 180;

		ctx.beginPath();
		ctx.moveTo(256, 256);
		ctx.lineTo(256 + Math.sin(angle) * 256, 256 + Math.cos(angle) * 256);
		ctx.lineTo(256 + Math.sin(nextAngle) * 256, 256 + Math.cos(nextAngle) * 256);
		ctx.stroke();
	}

	var pi = n * 0.5 * Math.sin(360 / n * Math.PI / 180);
	
	document.querySelector('span').innerHTML = pi;

};

document.querySelector('button').addEventListener('click', calculate, false);
calculate();