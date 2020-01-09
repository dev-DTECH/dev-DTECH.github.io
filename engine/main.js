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
hero = new GAME.object("square", 100);
hero1 = new GAME.object("square", 10);
hero2 = new GAME.object("square", 200);
hero3 = new GAME.object("square", 75);
hero.colour="#4768ff"

stylishhero =new GAME.object("animation/mario.png",100,3)


villain = new GAME.object("square", 5);


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
	GAME.clear()
	// GAME.ctx.clearRect(0, 0, 1000, 1000);

	if (hero.x > 500) hero.x = -500;

	if (hero1.x > 500) hero1.x = -500;

	if (hero2.y > 500) hero2.y = -500;

	if (hero3.x > 500) {hero3.x = -500;hero3.y = -500;}

	//console.log(control.upPressed);
	if (control.leftPressed) {
		GAME.camera.x -= 1 * dt;
		villain.x -= 1 * dt;
	}
	if (control.rightPressed) {
		GAME.camera.x += 1 * dt;
		villain.x += 1 * dt;
	}
	if (control.upPressed) {
		GAME.camera.y += 1 * dt;
		villain.y += 1 * dt;
	}

	if (control.downPressed) {
		GAME.camera.y -= 1 * dt;
		villain.y -= 1 * dt;
	}

	if(GAME.collisionsBetween(villain,hero))
	output.innerHTML="i just got hit";
	else
	output.innerHTML="<br>";

	stylishhero.animate(0,1,5,dt)
	GAME.render(villain, dt);
	GAME.render(hero1, dt);
	GAME.render(hero2, dt);
	GAME.render(hero3, dt);
	GAME.render(hero, dt,);

	GAME.render(stylishhero, dt);


	// GAME.render(GAME.wall.left,dt)
	// console.log(event.clientX)
	// console.log(hero.points[0])

	window.requestAnimationFrame(gameloop);
}

hero.x=100
window.requestAnimationFrame(gameloop);
// GAME.edit(stylishhero,"hero")
// console.log(GAME);
// console.log(control);

