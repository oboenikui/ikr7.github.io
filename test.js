
var cvs = document.querySelector('canvas');
var ctx = cvs.getContext('2d');

CanvasRenderingContext2D.prototype.fillWithikr7 = function(density){
	var me = this;
	var addikr7 = function(x, y){
		var ikr7 = new Image();
		ikr7.src = './ikr7.png';
		ikr7.addEventListener('load', function(){
			me.drawImage(ikr7, x - 20, y - 20, 40, 40);
		}, false);
	};

	for(var i = 0; i < cvs.width; i += density){
		for(var j = 0; j < cvs.height; j += density){
			if(me.isPointInPath(i, j)){
				addikr7(i, j);
			}
		}
	}

}

var pory = [
	[200, 50], 
	[400, 400], 
	[300, 40],
];

pory.forEach(function(ele, index, arr){
	if(index == 0){
		ctx.beginPath();
		ctx.moveTo(ele[0], ele[1]);
	}else if(index == arr.length - 1){
		ctx.lineTo(ele[0], ele[1]);
		ctx.closePath();
	}else{
		ctx.lineTo(ele[0], ele[1]);
	}
});

ctx.fillWithikr7(10);
