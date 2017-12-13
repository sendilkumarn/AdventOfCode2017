const out = `0: 5
1: 2
2: 3
4: 4
6: 6
8: 4
10: 6
12: 10
14: 6
16: 8
18: 6
20: 9
22: 8
24: 8
26: 8
28: 12
30: 12
32: 8
34: 8
36: 12
38: 14
40: 12
42: 10
44: 14
46: 12
48: 12
50: 24
52: 14
54: 12
56: 12
58: 14
60: 12
62: 14
64: 12
66: 14
68: 14
72: 14
74: 14
80: 14
82: 14
86: 14
90: 18
92: 17`;

const lines = out.split('\n');
let plot = [];
let sum = 0;
let rowCount = 0;
let colCount = 0;

lines.map(line => {
	let words = line.trim().split(': ');
	let col = parseInt(words[1]);
	let row = parseInt(words[0]);
	plot[row] = col;
	rowCount = col;
});
colCount = plot.length;
let retry = true;
let delay = 0;
isSlotActivated = (time, delay, slot) => checkTimeAndSlot((time+delay), slot) ? true : false;

checkTimeAndSlot = (time, slot) => time == 0 || (time % (2*(slot-1)) == 0);

while(retry) {
	retry = false;
	for (let timeOrCol = 0; timeOrCol < colCount; timeOrCol++) {
		if(plot[timeOrCol]) {
			let availableSlots = plot[timeOrCol];
			if(isSlotActivated(timeOrCol, delay, availableSlots)) {
				retry = true;
				delay++;
				break;
			}
		}	
	}
}

console.log(delay);
