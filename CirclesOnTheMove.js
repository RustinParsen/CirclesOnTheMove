var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var x = 100;
var y = 100;
var r = 50;
var dx = 20;
var dy = 20;



function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawCircle(x,y,r,"red");
    if(x + r > canvas.width || x - r < 0){
        dx = -dx;
    }
    if(y + r > canvas.height ||  y - r < 0){
        dy = -dy;
    }
    x = x + dx;
    y = y + dy;
}

animate();



function drawCircle(x,y,r,color){
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,false);
    ctx.fillStyle = color;
    ctx.fill();
    
}
