let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.height = 500;
canvas.width = 500;
let LastTime=0;
let i=100;


let fpsTime=0,fps,avgfps,maxfps=0,minfps=100000,frames=0;

      ctx.fillStyle ="#abc921";

    ctx.fillRect(0,0, 10, 10);


function gameloop(TimeStamp)
{
  let dt = TimeStamp - LastTime;
  LastTime = TimeStamp;
  ctx.clearRect(0,0,500,500);
//         let colour= "#abc"+String(i);
//       ctx.fillStyle =colour;

//     ctx.fillRect(0,0, 10, 10);
//     console.log(colour);
//     i++;
//     if(i>1000)
//     i=10;3

frames++;
fpsTime+=dt;
//console.log(fpsTime);
//fps=1000/dt;

if(fpsTime>=1000){
  fps=frames;
if(maxfps<fps)
maxfps=fps;
if(minfps>fps)
minfps=fps;
document.getElementById("fps").innerHTML="FPS : "+fps+"AVGFPS : "+avgfps+"MAXFPS : "+maxfps+"MINFPS : "+minfps;

frames=0;
fpsTime=0;}



    for(i=0;i<500;i++){
    for(j=0;j<500;j++){
    if(i%2==0&&j%2==0)
    ctx.fillRect(i,j, 10, 10);
    }}
    window.requestAnimationFrame(gameloop);
}


  //////////////
 //INITIALISE///
//////////////
window.requestAnimationFrame(gameloop);