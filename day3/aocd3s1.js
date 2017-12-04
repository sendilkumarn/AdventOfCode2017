const input = 347991;

let size = Math.ceil(Math.sqrt(input));

if(size%2 == 0) size +=1;

let origin = Math.floor(size / 2);
let r = c = origin;
let n = 1;

let ground = createArray(size);

for(let i = 1; i <= size; i+=2) {
    c = move('right', ground, r, c, i);
	r = move('up', ground, r, c, i);
	c = move('left', ground, r, c, i);
	r = move('down', ground, r, c, i);
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

function place(ground, x, y, n) {
    ground[x][y] = n++;
    if ((n-1) === input) {
        console.log(Math.abs(x - origin) + Math.abs(y - origin));
    }
}

function move(dir, ground, r, c, i) {
	switch(dir) {
		case 'right':
			for(let j = 0; j < i-2; j++ ) {
				place(ground, r, c, n++);
				c -= 1;
			}
			return c;
		case 'up':
			for(let j = 0; j < i-1; j++ ) {
				place(ground, r, c, n++);
				r -= 1;
			}
			return r;
		case 'left':
			for(let j = 0; j < i-1; j++ ) {
				place(ground, r, c, n++);
				c += 1;
			}
			return c;
		case 'down': 
		default:
			for(let j = 0; j < i; j++ ) {
				place(ground, r, c, n++);
				r += 1;
			}
			return r;
	}
}
