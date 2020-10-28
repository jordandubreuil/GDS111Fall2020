//JavaScript goes

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

function draw(){

    ctx.strokeStyle = 'green';
    //draw a line
    ctx.moveTo(0,0);
    ctx.lineTo(800, 600);
    ctx.stroke();

    ctx.moveTo(800,0);
    ctx.lineTo(0,600);
    ctx.stroke();
   
    //draw a box
    ctx.fillStyle = 'red';
    ctx.fillRect(200,100, 200, 200);

    //draw a circle
    ctx.fillStyle = 'blue'
    ctx.strokeStyle = 'orange'
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2,20,0, 2*Math.PI, false);
    ctx.stroke();
    ctx.fill();

}

draw();