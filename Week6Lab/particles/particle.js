//window.onload waits for page to load to run JavaScript
window.onload = function(){
var c = document.querySelector('canvas');
var ctx = c.getContext('2d');
var timer = requestAnimationFrame(main);


function randomRange(high, low){
    return Math.random() * (high - low) + low;
}

function GameObject(){
    this.radius = Math.random() * 10 + 5;
    this.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    this.x = c.width/2; //Math.random() * 800;
    this.y = c.height/2;  //Math.random() * 600;
    this.vx = randomRange(10,-10);
    this.vy = randomRange(10,-30);

    this.drawCircle = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
        ctx.closePath();
        ctx.fill();
    }

    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;

        if(this.y > c.height - this.radius){
            //this.y = 0 - this.radius;
            this.y = c.height - this.radius;
            this.vy =  -this.vy * 0.67;
        }
    }
}


var particles = [];
var numOfParticles = 100;
var gravity = 1;


//sets up the particles
for(var i = 0; i<numOfParticles; i++){
    particles[i] = new GameObject();
    particles[i].drawCircle();
}


function main(){
    //clear canvas 
    ctx.clearRect(0,0,c.width,c.height);

    //loop through the particles and make them move
    for(var i = 0; i<particles.length; i++){
        particles[i].vy += gravity;
        particles[i].move();
        particles[i].drawCircle();
    }
    timer = requestAnimationFrame(main);
}
}

