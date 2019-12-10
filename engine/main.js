let fpsTime=0,c=0,fps,avgfps,maxfps=0,minfps=100000,frames=0,Time=0,LastTime=0;

canvas = document.getElementById("display");
GAME.renderer(canvas);
control = new GAME.controller(65,68,87,83);
hero=new GAME.object("square",100);
hero1=new GAME.object("square",10);
hero2=new GAME.object("square",200);
hero3=new GAME.object("square",75);


// console.log(hero);


function gameloop(TimeStamp){


    let dt = TimeStamp - LastTime;
LastTime = TimeStamp;
Time += dt;

frames++;
fpsTime+=dt;
//console.log(fpsTime);
//fps=1000/dt;

if(fpsTime>=1000){
  c++;
  fps=frames;
if(c<=5)
avgfps=fps;

  avgfps=Math.round((avgfps*c+fps)/(c+1));
if(maxfps<fps)
maxfps=fps;
if(minfps>fps&&c>=5)
minfps=fps;
//console.log(fps);
document.getElementById("fps").innerHTML="FPS : "+fps+"<br>"+"AVGFPS : "+avgfps+"<br>"+"MAXFPS : "+maxfps+"<br>"+"MINFPS : "+minfps;

frames=0;
fpsTime=0;
}

GAME.ctx.clearRect(0,0,1000,1000)

if(hero.x>250)
hero.x=-250;

if(hero1.x>250)
hero1.x=-250;

if(hero2.x>250)
hero2.x=-250;

if(hero3.x>250)
hero3.x=-250;


GAME.update(hero,dt)
GAME.update(hero1,dt)
GAME.update(hero2,dt)
GAME.update(hero3,dt)



if(control.leftPressed==true)
console.log("left");

GAME.render(hero);
GAME.render(hero1);
GAME.render(hero2);
GAME.render(hero3);



window.requestAnimationFrame(gameloop);
};



window.requestAnimationFrame(gameloop);

console.log(GAME);
console.log(control.leftPressed);
