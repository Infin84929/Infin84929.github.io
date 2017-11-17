let buttons = {
	"65":"LJD : W",
	"81":"LJU : W",
	"87":"LJD : N",
	"69":"LJU : N",
	"68":"LJD : E",
	"67":"LJU : E",
	"88":"LJD : S",
	"90":"LJU : S",

	"219":"LTD",
	"221":"LTU",

	"73":"LBD",
	"77":"LBU",

	"79":"SELECT DOWN",
	"71":"SELECT UP",

	"186":"RJD : W",
	"222":"RJU : W",
	"188":"RJD : N",
	"190":"RJU : N",
	"53":"RJD : E",
	"54":"RJU : E",
	"51":"RJD : S",
	"52":"RJU : S",

	"49":"RTD",
	"50":"RTU",

	"75":"RBD",
	"80":"RBU",
	"74":"YD",
	"78":"YU",
	"85":"BD",
	"70":"BU",
	"72":"AD",
	"82":"AU",
	"89":"XD",
	"84":"XU",
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign("center", "center");
	textSize(windowHeight/2)
}

function draw() {
	resetMatrix();
	background(50)
	translate(windowWidth/2, windowHeight/2)
	fill(255)
	if(buttons[keyCode] == undefined) {
		text(" ", 0, 0)
	} else {
		text(buttons[keyCode], 0, 0)
	}
	
	console.log(keyCode)
}

