const input = 347991;

let size = Math.ceil(Math.sqrt(input));

if(size%2 == 0) size +=1;

let origin = Math.floor(size / 2);
let r = c = origin;

let ground = createArray(size);

for(let i = 1; i <= size; i+=2) {
	c = move('right', ground, r, c, i);
	r = move('up', ground, r, c, i);
	c = move('left', ground, r, c, i);
	r = move('down', ground, r, c, i);
}

let min = Number.MAX_VALUE;
for(y = 0; y <size; y++) {
	for(x = 0; x <size; x++) {		
		if (ground[x][y] >= input) {
			min = Math.min(min, ground[x][y]);			
		}
	}
}

function createArray(size) {
	let out = new Array();
	for(let x = 0; x <size; x++) {
		out[x] = new Array();
		for(let y = 0; y <size; y++) {
			out[x][y] = 0;
		}
	}
	return out;
}

function move(dir, ground, r, c, i) {
	switch(dir) {
		case 'right':
			for(let j = 0; j < i-2; j++ ) {
				place(ground, r, c);
				c -= 1;
			}
			return c;
		case 'up':
			for(let j = 0; j < i-1; j++ ) {
				place(ground, r, c);
				r -= 1;
			}
			return r;
		case 'left':
			for(let j = 0; j < i-1; j++ ) {
				place(ground, r, c);
				c += 1;
			}
			return c;
		case 'down': 
		default:
			for(let j = 0; j < i; j++ ) {
				place(ground, r, c);
				r += 1;
			}
			return r;
	}
}

function place(ground, r, c) {
	let sum = 0;
	for (let i = r - 1; i <= r + 1; i++) {
		for (let j = c - 1; j <= c + 1; j++) {
			if (i < 0 || i >= ground.length) {
				continue;
			}
			if (j < 0 || j >= ground[i].length) {
				continue;
			}
			if (i == r && j == c) {
				continue;
			}
			sum += ground[i][j];
		}
	}
	if (sum == 0) {
		sum = 1;
	}
	ground[r][c] = sum;
}


console.log(min);
