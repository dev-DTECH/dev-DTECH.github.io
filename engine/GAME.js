let GAME={
    renderer : function (getcanvas)
    {
        this.canvas = getcanvas;
        this.ctx = getcanvas.getContext("2d");
    },
    object : function(str,a){
        this.x=0;
        this.y=0;

        this.vx=0;
        this.vy=0;
        this.ax=0;
        this.ay=0;

        if(str=="square")
        this.vertices=[
          {x:a,y:a},
          {x:a,y:-a},
          {x:-a,y:-a},
          {x:-a,y:a}
        ]
    },
    // height:2*this.canvas.height/window.innerHeight,
    // width:2*this.canvas.width/window.innerWidth,
    camera : {
        x : 0,
        y : 0
    },
    render : function(ob){
        let scalex = this.canvas.width/window.innerWidth;
        let scaley = this.canvas.height/window.innerHeight;

        let kx=this.camera.x+ob.x+this.canvas.width/2;
        let ky=this.camera.y+ob.y+this.canvas.height/2;

        let w=ob.l*scalex;
        let h=ob.b*scaley;


        this.ctx.fillStyle = "#ab7def";

        //console.log(ob.vertices[0]);
        this.ctx.beginPath();
        this.ctx.moveTo(ob.vertices[0].x*scalex+kx,ob.vertices[0].y*scaley+ky);

        for(i=1;i<ob.vertices.length;i++)
        {
          this.ctx.lineTo(ob.vertices[i].x*scalex+kx,ob.vertices[i].y*scaley+ky);          
        }

        this.ctx.fill();
        
        // console.log(scalex);

        
        //this.ctx.fillRect(x,y,w,h);

    },
    update: function(ob,dt){
      ob.vx+=ob.ax*dt;
      ob.vy+=ob.ay*dt;

      ob.x+=ob.vx*dt;
      ob.y+=ob.vy*dt;
    },
    controller : function(left,right,up,down){
        this.rightPressed = false;
        this.leftPressed = false;
        this.upPressed = false;
        this.downPressed = false;

function ControllerDown(event)
{
  if (event.keyCode == right) {
    this.rightPressed = true;
  } else if (event.keyCode == left) {
    this.leftPressed = true;
  }
  if (event.keyCode == down) {
    this.downPressed = true;
  } else if (event.keyCode == up) {
    this.upPressed = true;
  }
}
function ControllerUp(event)
{
  if (event.keyCode == right) {
    this.rightPressed = false;
  } else if (event.keyCode == left) {
    this.leftPressed = false;
  }
  if (event.keyCode == down) {
    this.downPressed = false;
  } else if (event.keyCode == up) {
    this.upPressed = false;
  }
}
// function test(){
//     console.log("keydown");
// }
document.addEventListener("keydown", ControllerDown,false);
document.addEventListener("keyup",  ControllerUp, false);

    }

}



