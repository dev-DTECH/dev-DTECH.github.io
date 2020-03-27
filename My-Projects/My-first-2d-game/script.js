let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.height = 500;
canvas.width = 500;

let fpsTime=0,fps,avgfps,maxfps=0,minfps=100000,frames=0,c=0;

let floor = new Image();
floor.src = "floor.png";

let tree = new Image();
tree.src = "tree.png";

let mx = my = -250;
let sans = new Image();
sans.src = "sans.png";

let FrameWidth = 229,
  FrameHeight = 300,
  FrameStartX,
  FrameStartY = 1;


let CharacterBaseX,CharacterBaseY,TreeBaseX,TreeBaseY;

let Time = 0;

let scale = 0.25;

let f = 1;

let LastTime = 0;

let Character_Time = 0;

let x = canvas.height / 2,
  y = canvas.width / 2;

let vx = 0.1;

let dx = 0;

let ax = 0;

let vy = 0.1;

let dy = 0;

let ay = 0;

let delay = 15/ vy;

  /////////////////////
 ///BACKGROUNGMUSIC///
/////////////////////

var audio = document.getElementById("audio");
audio.play();

  ////////////
 ///Render///
////////////

function AnimateCharacter() {
  if (leftPressed && !rightPressed && !upPressed && !downPressed) {
    if(((f - 1) % 180 != 0)||(FrameStartY != 631)||(FrameWidth != 190)||(FrameHeight != 300))
    {
      f = 1;
      FrameStartY = 631;
      FrameWidth = 190;
      FrameHeight = 300;
    }
    
    mx += dx;
    if (Character_Time > delay) {
      //console.log(f);

      Character_Time = 0;
      f += 180;
      if (f > 541) f = 1;
    }
  }
  if (!leftPressed && rightPressed && !upPressed && !downPressed) {
    if(((f - 1) % 180 != 0)||(FrameStartY != 311)||(FrameWidth != 170)||(FrameHeight != 300))
    {
      f = 1;
      FrameStartY = 311;
      FrameWidth = 170;
      FrameHeight = 300;
    }

    mx -= dx;

    if (Character_Time > delay) {
      //console.log(f);

      Character_Time = 0;
      f += 180;
      if (f > 541) f = 1;
    }
  }
  if (!leftPressed && !rightPressed && upPressed && !downPressed) {
    if(((f - 1021) % 240 != 0)||(FrameStartY != 1)||(FrameWidth != 229)||(FrameHeight != 310))
    {
      f = 1021;
      FrameStartY = 1;
      FrameWidth = 229;
      FrameHeight = 310;
    }


    my += dy;

    if (Character_Time > delay) {
      //   console.log(f);

      Character_Time = 0;
      f += 240;
      if (f > 1941) f = 1021;
    }
  }

  if (!leftPressed && !rightPressed && !upPressed && downPressed) {
    if(((f - 1) % 240 != 0)||(FrameStartY != 1)||(FrameWidth != 229)||(FrameHeight != 300))
    {
      f = 1;
      FrameStartY = 1;
      FrameWidth = 229;
      FrameHeight = 300;
    }

    my -= dy;

    if (Character_Time > delay) {
      //   console.log(f);

      Character_Time = 0;
      f += 240;
      if (f > 751) f = 1;
    }
  }
}

function RenderCharacter()
{
  ctx.drawImage(
    sans,
    f,
    FrameStartY,
    FrameWidth,
    FrameHeight,
    Math.floor(x),
    Math.floor(y),
    FrameWidth * scale,
    FrameHeight * scale
  );
}
function RenderMap(mx, my) {
  ctx.drawImage(floor, 0, 0, 500, 500, mx, my, 1000, 1000);
  //ctx.fillStyle = "#abcdef";
  //ctx.fillRect(mx + 300, my + 300, 100, 100);
}
function RenderElement(mx, my) {
  ctx.drawImage(tree, 0, 0, 500,500 , mx+300, my+180, 500, 500);
}

  ////////////////
 ///Controller///
////////////////

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

function ControllerDown(event) {
  if (event.keyCode == 68) {
    rightPressed = true;
  } else if (event.keyCode == 65) {
    leftPressed = true;
  }
  if (event.keyCode == 83) {
    downPressed = true;
  } else if (event.keyCode == 87) {
    upPressed = true;
  }
}
function ControllerUp(event) {
  if (event.keyCode == 68) {
    rightPressed = false;
  } else if (event.keyCode == 65) {
    leftPressed = false;
  }
  if (event.keyCode == 83) {
    downPressed = false;
  } else if (event.keyCode == 87) {
    upPressed = false;
  }
}
document.addEventListener("keydown", ControllerDown, false);
document.addEventListener("keyup", ControllerUp, false);

let left = document.getElementById("left");
left.ontouchstart = function() {
  event.preventDefault();
  leftPressed = true;
};
left.ontouchend = function() {
  leftPressed = false;
};
let right = document.getElementById("right");
right.ontouchstart = function() {
  event.preventDefault();
  rightPressed = true;
};
right.ontouchend = function() {
  rightPressed = false;
};
let up = document.getElementById("up");
up.ontouchstart = function() {
  event.preventDefault();
  upPressed = true;
};
up.ontouchend = function() {
  upPressed = false;
};
let down = document.getElementById("down");
down.ontouchstart = function() {
  event.preventDefault();
  downPressed = true;
};
down.ontouchend = function() {
  downPressed = false;
};

  //////////////
 ///GameLoop///
//////////////

function gameloop(TimeStamp)
{
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

  Character_Time += dt;
  dx = vx * dt;
  vx += ax; //acceleration

  dy = vy * dt;
  vy += ay; //acceleration
  //ctx.clearRect(0, 0, 500, 500);

  CharacterBaseX=x+FrameWidth*scale;
  CharacterBaseY=y+FrameHeight * scale;

  TreeBaseX=mx+300+500;
  TreeBaseY=my+180+500-46;

  RenderMap(mx, my);

  AnimateCharacter();
  //console.log(f);
  if(CharacterBaseY>TreeBaseY){
    RenderElement(mx, my);
    RenderCharacter();
  }
  else{
    RenderCharacter();
    RenderElement(mx, my);
  }
// if(Math.floor(CharacterBaseY)>=Math.floor(TreeBaseY)){
//   vy=0;
// }
// else
// vy=0.1;

  //console.log(f);

  //console.log(time);

  window.requestAnimationFrame(gameloop);
}


  ////////////////
 ///INITIALISE///
////////////////
window.requestAnimationFrame(gameloop);
