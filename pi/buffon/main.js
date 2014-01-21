'use strict';

var cvs = document.querySelector('canvas');

cvs.width = 500;
cvs.height = 500;

var ctx = cvs.getContext('2d');

var areCross = function(x1, y1, x2, y2, x3, y3, x4, y4){
	var d = (x2 - x1) * (y4 - y3) - (y2 - y1) * (x4 - x3);

	if(d === 0){
		return false;
	}else{
		var r = ((y4 - y3) * (x3 - x1) - (x4 - x3) * (y3 - y1)) / d;
		var s = ((y2 - y1) * (x3 - x1) - (x2 - x1) * (y3 - y1)) / d;

		if(0 < r && r <= 1 && 0 < s && s <= 1){
			return true;
		}else{
			return false;
		}
	}
};

var calculate = function(){

	ctx.clearRect(0, 0, 500, 500);

	var a = parseInt(document.querySelector('#config_interval').value);
	var l = parseInt(document.querySelector('#config_needleLength').value);
	var c = parseInt(document.querySelector('#config_needleCount').value);

	var hlys = [];
	var crosses = 0;

	//平行線ひく
	for(var i = 0; i < 500; i += a){
		hlys.push(i);
		ctx.beginPath();
		ctx.moveTo(0, i);
		ctx.lineTo(500, i);
		ctx.stroke();
	}

	//針おとす
	for(var i = 0; i < c; i++){

		var x1 = Math.random() * 500 | 0, 
			y1 = Math.random() * 500 | 0;

		var d = Math.random() * Math.PI * 2;

		var x2 = x1 + Math.sin(d) * l, 
			y2 = y1 + Math.cos(d) * l;

		var isCross = false;

		for(var j = 0; j < hlys.length; j++){		
			if(areCross(x1, y1, x2, y2, 0, hlys[j], 500, hlys[j])){
				isCross = true;
			}
		}

		if(isCross){
			crosses++;
			ctx.strokeStyle = 'red';
		}else{
			ctx.strokeStyle = 'black';
		}

		ctx.beginPath();
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.stroke();
		ctx.strokeStyle = 'black';

	}
	
	var p = crosses / c;
	var pi = 0;

	if(l <= a){
		pi = (2 * l) / (a * p);
	}else{
		pi = 2 * (l + a * Math.acos(a / l) - Math.sqrt(l * l - a * a)) / (a * p);
	}

	document.querySelector('span').innerHTML = pi;

};

document.querySelector('button').addEventListener('click', calculate, false);
calculate();
