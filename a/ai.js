class Ai {
	constructor() {
		this.ftx = 0;
		this.fty = 0;
	}
	run() {
		let x = snake.body[snake.body.length - 1].x;
		let y = snake.body[snake.body.length - 1].y;
		if (snake.body.length < 10) {
			if (x === food.x) {
				if (y < food.y) {
					this.ftx = 0;
					this.fty = 1;
				} else if (y > food.y) {
					this.ftx = 0;
					this.fty = -1;
				}
			} else if (x < food.x) {
				this.ftx = 1;
				this.fty = 0;
			} else if (x > food.x) {
				this.ftx = -1;
				this.fty = 0;
			}
		} else {
			if (x === w - 19 && y === h - 20) {
				this.ftx = -1;
				this.fty = 0;
			} else if (x === w - 20 && y != h - 1) {
				this.ftx = 0;
				this.fty = 1;
			} else if (y === h - 1 && x != w - 1) {
				this.ftx = 1;
				this.fty = 0;
			} else if ((x === w - 1 && y != h - 2 && y != h - 4 && y != h - 6 && y != h - 8 && y != h - 10 && y != h - 12 && y != h - 14 && y != h - 16 && y != h - 18 && y != h - 20) || (x === w - 19 && y != h - 3 && y != h - 5 && y != h - 7 && y != h - 9 && y != h - 11 && y != h - 13 && y != h - 15 && y != h - 17 && y != h - 19)) {
				this.ftx = 0;
				this.fty = -1;
			} else if (y === h - 2 && x != w - 19) {
				this.ftx = -1;
				this.fty = 0;
			} else if (y === h - 3 && x != w - 1) {
				this.ftx = 1;
				this.fty = 0;
			} else if (y === h - 4 && x != w - 19) {
				this.ftx = -1;
				this.fty = 0;
			} else if (y === h - 5 && x != w - 1) {
				this.ftx = 1;
				this.fty = 0;
			} else if (y === h - 6 && x != w - 19) {
				this.ftx = -1;
				this.fty = 0;
			} else if (y === h - 7 && x != w - 1) {
				this.ftx = 1;
				this.fty = 0;
			} else if (y === h - 8 && x != w - 19) {
				this.ftx = -1;
				this.fty = 0;
			} else if (y === h - 9 && x != w - 1) {
				this.ftx = 1;
				this.fty = 0;
			} else if (y === h - 10 && x != w - 19) {
				this.ftx = -1;
				this.fty = 0;
			} else if (y === h - 11 && x != w - 1) {
				this.ftx = 1;
				this.fty = 0;
			} else if (y === h - 12 && x != w - 19) {
				this.ftx = -1;
				this.fty = 0;
			} else if (y === h - 13 && x != w - 1) {
				this.ftx = 1;
				this.fty = 0;
			} else if (y === h - 14 && x != w - 19) {
				this.ftx = -1;
				this.fty = 0;
			} else if (y === h - 15 && x != w - 1) {
				this.ftx = 1;
				this.fty = 0;
			} else if (y === h - 16 && x != w - 19) {
				this.ftx = -1;
				this.fty = 0;
			} else if (y === h - 17 && x != w - 1) {
				this.ftx = 1;
				this.fty = 0;
			} else if (y === h - 18 && x != w - 19) {
				this.ftx = -1;
				this.fty = 0;
			} else if (y === h - 19 && x != w - 1) {
				this.ftx = 1;
				this.fty = 0;
			} else if (y === h - 20 && x != w - 19) {
				this.ftx = -1;
				this.fty = 0;
			}
		}
		snake.xdir = this.ftx;
		snake.ydir = this.fty;
	}
}