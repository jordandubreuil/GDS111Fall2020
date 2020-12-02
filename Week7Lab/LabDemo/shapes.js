window.onload = function(){
    // Your code will go here
    var c = document.querySelector('canvas');
    var ctx = c.getContext("2d");
    var timer = requestAnimationFrame(draw);
    var deg  = 45;
    var x = 0;
    //create array or collection of rotating boxes
    var rotatingBoxes = [];
    var count = 12;

    var rows = 10;
    var cols = 10;

    //this is our GameObject Class that we will use to draw our shapes
    function GameObject(){
        this.x = 0;
        this.y = 0;
        this.w = 100;
        this.h = this.w;
        this.deg = 0;
        this.vx = 1;
        this.vy = 1;
        this.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;

        this.drawBox = function(){
            ctx.save();
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
            ctx.restore();
        }

        this.drawRotateBox = function(){
            ctx.save();
            ctx.fillStyle = this.color;
            ctx.translate(this.x, this.y);
            ctx.rotate(this.deg += this.vx * Math.PI/180)
            ctx.fillRect(0 - this.w/2, 0 - this.h/2, this.w, this.h);
            ctx.restore();
        }

    }

    //Create Instance(s) of GameObject(s)
    var box = new GameObject();
    box.x = 0;
    box.y = 300;

    var rotatingBox = new GameObject();
    rotatingBox.x = 300;
    rotatingBox.y = 300;

    //For Loop of instances 
    for(var i = 0; i < rows ; i++){
        for(var j = 0; j < cols; j++){
            rotatingBoxes[i] = new GameObject();
            rotatingBoxes[i].x = i * (rotatingBox[j].w + 10);
            rotatingBoxes[i].y = j * (rotatingBox[j].w + 10);
        }

    }
    
   
    //This is where we will draw stuff for the example
    function draw(){
        /*
        //clears the canvas
        ctx.clearRect(0,0,c.width,c.height);
        
        ctx.fillStyle = "blue";
        //saves the canvas state
        ctx.save();
        //change the canvas state
        ctx.translate(c.width/2,c.height/2);
        ctx.rotate(deg+=1 * Math.PI/180);//Converts degrees to radians degrees * Math.PI/180
        ctx.fillRect(0-100, 0-100, 200,200);
        //change the canvas state back
        ctx.restore();
        ctx.fillRect(x += 1, 100, 20,20);
        */

        ctx.clearRect(0,0,c.width,c.height);
        box.x += box.vx;
        box.drawBox();
        rotatingBox.drawRotateBox();

        //draw all the instances of the rotating boxes
        for(var i = 0; i<rotatingBoxes.length; i++){
            rotatingBoxes[i].drawRotateBox();
        }

        timer = requestAnimationFrame(draw);
    }


    draw();

}