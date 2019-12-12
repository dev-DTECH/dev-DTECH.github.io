let GAME = {
	renderer: function(getcanvas) {
		this.canvas = getcanvas;
		this.ctx = getcanvas.getContext("2d");
	},
	object: class {
		constructor(str, a) {
			this.x = 0;
			this.y = 0;

			this.vx = 0;
			this.vy = 0;

			this.ax = 0;
			this.ay = 0;

			if (str == "square")
				this.points = [
					{ x: a, y: a },
					{ x: a, y: -a },
					{ x: -a, y: -a },
					{ x: -a, y: a }
				];
		}
		addpoint(a, b) {
			this.points.push({ x: a, y: b });
		}
	},
	camera: {
		x: 0,
		y: 0,

		vx:0,
		vy:0,

		ax:0,
		ay:0
	},
	render: function(ob, dt) {
		this.camera.vx += this.camera.ax * dt;
		this.camera.vy += this.camera.ay * dt;

		this.camera.x += this.camera.vx * dt;
		this.camera.y += this.camera.vy * dt;			

		ob.vx += ob.ax * dt;
		ob.vy += ob.ay * dt;

		ob.x += ob.vx * dt;
		ob.y += ob.vy * dt;

		let scalex = this.canvas.width / 1000;
		let scaley = this.canvas.height / 1000;

		let kx = -this.camera.x + ob.x + this.canvas.width / 2;
		let ky = this.camera.y - ob.y + this.canvas.height / 2;

		this.ctx.fillStyle = "#ab7def";

		this.ctx.beginPath();
		this.ctx.moveTo(ob.points[0].x * scalex + kx, ob.points[0].y * scaley + ky);

		for (i = 1; i < ob.points.length; i++) {
			this.ctx.lineTo(
				ob.points[i].x * scalex + kx,
				ob.points[i].y * scaley + ky
			);
		}
		this.ctx.fill();
	},
	controller: class {
		constructor(left, right, up, down) {
			this.left = left;
			this.right = right;
			this.up = up;
			this.down = down;

			this.rightPressed = false;
			this.leftPressed = false;
			this.upPressed = false;
			this.downPressed = false;

			let ob = this;
			document.addEventListener("keydown", ControllerDown, false);
			document.addEventListener("keyup", ControllerUp, false);
			function ControllerDown(event) {
				if (event.key == ob.right) {
					ob.rightPressed = true;
				} else if (event.key == ob.left) {
					ob.leftPressed = true;
				}
				if (event.key == ob.down) {
					ob.downPressed = true;
				} else if (event.key == ob.up) {
					ob.upPressed = true;
				}
			}
			function ControllerUp(event) {
				if (event.key == ob.right) {
					ob.rightPressed = false;
				} else if (event.key == ob.left) {
					ob.leftPressed = false;
				}
				if (event.key == ob.down) {
					ob.downPressed = false;
				} else if (event.key == ob.up) {
					ob.upPressed = false;
				}
			}
		}
	}
};
