
var context = document.querySelector('canvas').getContext('2d');

for (var i = 0; i < 360; i += 10) {
	var rad = i * Math.PI / 180
	context.beginPath();
	context.moveTo(context.canvas.width / 2, context.canvas.height / 2);

	context.lineTo(Math.cos(rad) * context.canvas.width + context.canvas.width / 2, Math.sin(rad) * context.canvas.height + context.canvas.height / 2);

	context.strokeStyle = 'hsla(' + i + ', 100%, 50%, 1)';
	context.stroke();
};