// import Collisions from 'node_module/collisions';
// const system = new Collisions();
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
					{x:a, y:a},
					{x:-a, y:a},
					{x:-a, y:-a},
					{x:a,y: -a}
				];
			this.polygon =new SAT.Polygon({x:this.x,y:this.y},this.points)
		}
		addpoint(x, y) {
			let find_angle = function(x, y) {
				if(x>0&&y>0)
				return Math.atan2(y,x)* 180 / Math.PI;
				if(x<0&&y>0)
				return Math.atan2(y,x)* 180 / Math.PI;
				if(x>0&&y<0)
				return (Math.PI*2+Math.atan2(y,x))* 180 / Math.PI;
				if(x<0&&y<0)
				return (Math.PI*2+Math.atan2(y,x))* 180 / Math.PI;
				if(x==0)
				{
					if(y>0)
					return 90
					else
					return 270
				}
				if(y==0)
				{
					if(x>0)
					return 0
					else
					return 180
				}
				// return  (y >= 0&&x>=0 ? Math.atan2(y,x) : Math.abs(Math.atan2(y,x)))* 180 / Math.PI;
			}
			
			let angle, angle1, angle2;

			angle = find_angle(x,y);

			for (let i = 0; i < this.points.length-1 ; i++) {
				angle1 = find_angle(this.points[i].x, this.points[i].y);
				angle2 = find_angle(this.points[i + 1].x, this.points[i + 1].y);
				console.log(angle);
				console.log(angle1);
				console.log(angle2);

				if (angle >= angle1 && angle <= angle2) {
					for (let j = this.points.length - 1; j > i; j--) {
						this.points[j + 1] = this.points[j];
					}
					this.points[i+1] = [x, y];
					break;
				}
				// angle1 = find_angle(this.points[0].x, this.points[0][1]);
				// angle2 = find_angle(
				// 	this.points[this.points.length - 1][0],
				// 	this.points[this.points.length - 1][1]
				// );

				// if (angle <= angle1 && angle >= angle2) {
				// 	this.points[this.points.length] = [x, y];
				// 	break;
				// }
			}
		}
	},
	collisionsBetween: function(ob1,ob2){
		return SAT.testPolygonPolygon(ob1.polygon, ob2.polygon, new SAT.Response())
	},
	wall: {},
	camera: {
		x: 0,
		y: 0,

		vx: 0,
		vy: 0,

		ax: 0,
		ay: 0
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

		// ob.polygon.pos.x = ob.x;
		// ob.polygon.pos.y = ob.y;

		// for(let i=0;i<ob.polygon.points.length;i++){
		// 	ob.polygon.points[i].x =ob.x+ob.points[i].x;
		// 	ob.polygon.points[i].y =ob.y+ob.points[i].y;

		// }
		

		let scalex = this.canvas.width / 1000;
		let scale = this.canvas.height / 1000;

		let kx = -this.camera.x + ob.x + this.canvas.width / 2;
		let ky = this.camera.y - ob.y + this.canvas.height / 2;

		this.ctx.fillStyle = "#ab7def";

		this.ctx.beginPath();
		this.ctx.moveTo(
			ob.points[0].x * scale + kx,
			-ob.points[0].y * scale + ky
		);

		for (i = 1; i < ob.points.length; i++) {
			this.ctx.lineTo(
				ob.points[i].x * scale + kx,
				-ob.points[i].y * scale + ky
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
}
let find_angle = function(x, y) {
	if(x>0&&y>0)
	return Math.atan2(y,x)* 180 / Math.PI;
	if(x<0&&y>0)
	return Math.atan2(y,x)* 180 / Math.PI;
	if(x>0&&y<0)
	return (Math.PI*2+Math.atan2(y,x))* 180 / Math.PI;
	if(x<0&&y<0)
	return (Math.PI*2+Math.atan2(y,x))* 180 / Math.PI;
	if(x==0)
	{
		if(y>0)
		return 90
		else
		return 270
	}
	if(y==0)
	{
		if(x>0)
		return 0
		else
		return 180
	}
	// return  (y >= 0&&x>=0 ? Math.atan2(y,x) : Math.abs(Math.atan2(y,x)))* 180 / Math.PI;
}