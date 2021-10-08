var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var carwidth = 100;
var carheight = 150;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

var carx = 10;
var cary = 260;
var carimg = "";

function add() {

	bgimg = new Image();
    bgimg.onload = uploadBackground;
    bgimg.src = background_image;

    carimg = new Image();
    carimg.onload = uploadgreencar;
    carimg.src = greencar_image;

}

function uploadBackground() {

    ctx.drawImage(bgimg,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {

	ctx.drawImage(carimg,carx,cary,carwidth,carheight);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up() {
   
    if (cary >= 0) {

        cary -= 10;
        console.log("up key"+cary);
        uploadBackground();
        uploadgreencar();

    }
    
}

function down() {
   
    if (cary <= 500) {

        cary += 10;
        console.log("down key"+cary);
        uploadBackground();
        uploadgreencar();

    }
    
}

function left() {
   
    if (carx >= 0) {

        carx -= 10;
        console.log("left key"+carx);
        uploadBackground();
        uploadgreencar();

    }
    
}

function right() {
   
    if (carx <= 700) {

        carx += 10;
        console.log("right key"+carx);
        uploadBackground();
        uploadgreencar();

    }
    
}

