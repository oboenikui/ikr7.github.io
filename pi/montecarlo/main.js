
var cvs = document.querySelector('canvas');

cvs.width = 512;
cvs.height = 512;

var ctx = cvs.getContext('2d');

ctx.beginPath();
ctx.arc(256, 256, 256, 0, Math.PI * 2, false);
ctx.closePath();

var calculate = function(){

	var pointCount = document.querySelector('input').value;
	var hit = 0;

	ctx.clearRect(0, 0, 512, 512);

	for (var i = 0; i < pointCount; i++) {
		var x = Math.random()*512|0;
		var y = Math.random()*512|0;
		if(ctx.isPointInPath(x, y)){
			ctx.fillStyle = 'red';
			hit ++;
		}else{
			ctx.fillStyle = 'blue';
		}
		ctx.fillRect(x, y, 1, 1);
	};

	return hit / pointCount * 4;

};

document.querySelector('button').addEventListener('click', function(){
	var pi = calculate();
	document.querySelector('span').innerHTML = pi;
}, false);

document.querySelector('span').innerHTML = calculate();