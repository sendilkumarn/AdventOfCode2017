const inp = `.#...#.#.##..##....##.#.#
###.###..##...##.##....##
....#.###..#...#####..#.#
.##.######..###.##..#...#
#..#..#..##..###...#..###
..####...#.##.#.#.##.####
#......#..####..###..###.
#####.##.#.#.##.###.#.#.#
.#.###....###....##....##
.......########.#.#...#..
...###.####.##..###.##..#
#.#.###.####.###.###.###.
.######...###.....#......
....##.###..#.#.###...##.
#.###..###.#.#.##.#.##.##
#.#.#..###...###.###.....
##..##.##...##.##..##.#.#
.....##......##..#.##...#
..##.#.###.#...#####.#.##
....##..#.#.#.#..###.#..#
###..##.##....##.#....##.
#..####...####.#.##..#.##
####.###...####..##.#.#.#
#.#.#.###.....###.##.###.
.#...##.#.##..###.#.###..`;

const lines = inp.split('\n');

const word = lines.map(w => w.split(''));

let extend = 1000;
let start = (extend/2) - ((word.length-1)/2);
let end = ((extend/2) + ((word.length-1)/2));
let mem = [];
for(let x = 0; x < extend; x++) {
    mem[x] = [];
    for(let y = 0; y < extend; y++) {
        mem[x][y] = '.';
    }
}

for(let x = start; x <= end; x++) {
    for(let y = start; y <= end; y++) {
        mem[x][y] = word[x-start][y-start];
    }
}

let x = extend / 2;
let y = extend / 2;
let count = 10000;
let now = 0;
let infected = 0;
let dir = 'u';

while(now < count) {
    if(mem[x][y] === '.') {
        mem[x][y] = '#';
        infected++;
        if(dir === 'u') dir = 'l';
        else if(dir === 'r') dir = 'u';
        else if(dir === 'l') dir = 'd';
        else if(dir === 'd') dir = 'r';
    } else if(mem[x][y] === '#') {         
        mem[x][y] = '.';
        if(dir === 'u') dir = 'r';
        else if(dir === 'r') dir = 'd';
        else if(dir === 'l') dir = 'u';
        else if(dir === 'd') dir = 'l'; 
    }

    if(dir === 'u') x--;
    if(dir === 'r') y++;
    if(dir === 'l') y--;
    if(dir === 'd') x++;

    now++;
}

console.log(infected);