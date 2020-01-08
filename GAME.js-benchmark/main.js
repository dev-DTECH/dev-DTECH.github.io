let fpsTime = 0,
	c = 0,
	fps,
	avgfps,
	maxfps = 0,
	minfps = 1/0,
	frames = 0,
	Time = 0,
	LastTime = 0;

	let output = document.getElementById("output");

canvas = document.getElementById("display");
GAME.renderer(canvas);
control = new GAME.controller("a", "d", "w", "s"); //left,right,up,down
// GAME.camera.x=400
// GAME.camera.y=200

// let hero=[],n=1000

// for(i=0;i<n;i++)
// {
// 	hero[i]= new GAME.object('square',5)
// 	hero[i].vx=Math.random()*0.1*Math.pow(-1,Math.floor(Math.random() * 2) + 1);
// 	hero[i].vy=Math.random()*0.1*Math.pow(-1,Math.floor(Math.random() * 2) + 1);
// 	hero[i].ay=-0.0001
// }
// wall=new GAME.object("square",100)
// wall.y=-250;
// wall.points[0].x=wall.points[3].x=1000
// wall.points[1].x=wall.points[2].x=-1000
// console.log(hero);


pxaxis= new GAME.object("square",1)
pxaxis.vx=0.1
nxaxis= new GAME.object("square",1)
nxaxis.vx=-0.1


pyaxis=new GAME.object("square",1)
pyaxis.vy=0.1

nyaxis= new GAME.object("square",1)
nyaxis.vy=-0.1

let x=0
vx=0.001

k=50


positive =new GAME.object("square",1)
positive.vx=0.01

negative=new GAME.object("square",1)
negative.vx=-0.01

function gameloop(TimeStamp) {
	let dt = TimeStamp - LastTime;
	LastTime = TimeStamp;
	Time += dt;

	frames++;
	fpsTime += dt;
	//console.log(fpsTime);
	//fps=1000/dt;

	if (fpsTime >= 1000) {
		c++;
		fps = frames;
		if (c <= 5) avgfps = fps;

		avgfps = Math.round((avgfps * c + fps) / (c + 1));
		if (maxfps < fps) maxfps = fps;
		if (minfps > fps && c >= 5) minfps = fps;
		//console.log(fps);
		document.getElementById("fps").innerHTML =
			"FPS : " +
			fps +
			"<br>" +
			"AVGFPS : " +
			avgfps +
			"<br>" +
			"MAXFPS : " +
			maxfps +
			"<br>" +
			"MINFPS : " +
			minfps;

		frames = 0;
		fpsTime = 0;
	}

	// GAME.clear()

// 	for(let i=0;i<n;i++)
// {
// 	if(GAME.collisionsBetween(hero[i],wall))
// 	hero[i].vy=Math.abs(hero[i].vy);
	

// 	GAME.render(hero[i],dt)
// }
// GAME.render(wall,dt)
GAME.render(pxaxis,dt)
GAME.render(nxaxis,dt)
GAME.render(pyaxis,dt)
GAME.render(nyaxis,dt)

x+=vx*dt

positive.y=(x*x)
//negative.y=k*(Math.cos(Math.pow(-x,Math.sin(-x))))

// console.log(x)
GAME.render(positive,dt)
GAME.render(negative,dt)




	window.requestAnimationFrame(gameloop);
}

window.requestAnimationFrame(gameloop);

// console.log(GAME);
// console.log(control);

