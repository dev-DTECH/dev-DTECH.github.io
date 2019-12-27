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
GAME.camera.x=400
GAME.camera.y=200

let hero=[],n=500

for(i=0;i<n;i++)
{
	hero[i]= new GAME.object('square',1)
	hero[i].vx=Math.random()*0.1;
	hero[i].vy=Math.random()*0.1;
	hero[i].ay=-0.00001
}

// console.log(hero);

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

	// GAME.ctx.clearRect(0, 0, 1000, 1000);

	for(let i=0;i<n;i++)
{
	GAME.render(hero[i],dt)
}
	window.requestAnimationFrame(gameloop);
}

window.requestAnimationFrame(gameloop);

// console.log(GAME);
// console.log(control);

