const inp = `14/42
2/3
6/44
4/10
23/49
35/39
46/46
5/29
13/20
33/9
24/50
0/30
9/10
41/44
35/50
44/50
5/11
21/24
7/39
46/31
38/38
22/26
8/9
16/4
23/39
26/5
40/40
29/29
5/20
3/32
42/11
16/14
27/49
36/20
18/39
49/41
16/6
24/46
44/48
36/4
6/6
13/6
42/12
29/41
39/39
9/3
30/2
25/20
15/6
15/23
28/40
8/7
26/23
48/10
28/28
2/13
48/14`;

let bridges = inp.split("\n").map(l => l.split("/").map(ll => parseInt(ll)));
let sumArr = [];

getNext = (port, rem, sum, len) => {
    sumArr.push(sum);
    if(rem.length > 0 ) {
        for (let ind = 0; ind < rem.length; ind++)  {
            let p = rem[ind];
            let x = p[0];
            let y = p[1];
            let newRem = [];
            if(x === port || y === port) {
                for (let nbi = 0; nbi < rem.length; nbi++) {
                    let nb = rem[nbi];
                    if(nb !== p) {
                        newRem.push(nb);
                    }
                }
                if(x === port) {
                    getNext(y, newRem, sum +(x+y), len++);
                } else {
                    getNext(x, newRem, sum +(x+y), len++);
                }
            }            
        }
    }
    
}

for (let b = 0; b < bridges.length; b++) {
    let bridge = bridges[b];
    let x = bridge[0];
    let y = bridge[1];
    if (x === 0 || y === 0) {
        let remaining = [];
        for (let nbi = 0; nbi < bridges.length; nbi++) {
            let nb = bridges[nbi];
            if(nb !== bridge) {
                remaining.push(nb);
            }
        }
        let sum = x+y;        
        if(x === 0) {
            getNext(y, remaining, sum, 1);
        } else {
            getNext(x, remaining, sum, 1);
        }
    }
}

printMax = arr => {
    let max = 0;
    for(let i=0; i< arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log(printMax(sumArr));
