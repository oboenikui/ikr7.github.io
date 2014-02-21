
var ikr7Utils = {
	'Math': {
		'random': null
	}, 
	'Canvas': {
		'point': null, 
		'circle': null, 
		'line': null
	}
};

ikr7Utils.Math.random = function(min, max, step){
	min = min || 0;
	max = max || 1;
	step = step || 1;
	return (
		Math.floor((min + Math.random() * (max - min + 1)) / step) * step
	);
};

ikr7Utils.Canvas.point = function(context, x, y, color){
	if(!context) throw new Error('つらい');

	x = x || 0;
	y = y || 0;
	color = color || '#000000';

	context.save();
	context.fillStyle = color;
	context.fillRect(x, y, 1, 1);
	context.restore();
};

ikr7Utils.Canvas.circle = function(context, x, y, r, fillColor, borderColor, borderWidth){

	if(!context) throw new Error('つらい');

	x = x || 0;
	y = y || 0;
	r = r || 0;
	fillColor = fillColor || '#ffffff';
	borderColor = borderColor || '#000000';
	borderWidth = borderWidth || 0;

	context.save();

	context.fillStyle = fillColor;
	context.strokeStyle = borderColor;
	context.lineWidth = borderWidth;

	context.beginPath();
	context.arc(x, y, r, 0, Math.PI * 2, false);
	context.fill();
	context.stroke();

	context.restore();
};

ikr7Utils.Canvas.line = function(context, x1, y1, x2, y2, color, lineWidth){

	if(!context) throw new Error('つらい');

	x1 = x1 || 0;
	y1 = y1 || 0;
	x2 = x2 || 0;
	y2 = y2 || 0;
	color = color || '#000000';
	lineWidth = lineWidth || 1;

	context.save();

	context.strokeStyle = color;
	context.lineWidth = lineWidth;

	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.stroke();
	
	context.restore();
	
};




