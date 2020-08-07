var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

drawCircle(200,200,200,"red");
drawCircle(200,400,200,"blue");
drawCircle(300,200,100,"purple");



function drawCircle(x,y,r,color){
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,false);
    ctx.strokeStyle = color;
    ctx.stroke();
    
}
