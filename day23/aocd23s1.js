const inp = `set b 57
set c b
jnz a 2
jnz 1 5
mul b 100
sub b -100000
set c b
sub c -17000
set f 1
set d 2
set e 2
set g d
mul g e
sub g b
jnz g 2
set f 0
sub e -1
set g e
sub g b
jnz g -8
sub d -1
set g d
sub g b
jnz g -13
jnz f 2
sub h -1
set g b
sub g c
jnz g 2
jnz 1 3
sub b -17
jnz 1 -23`;

const instructions = inp.split('\n')
                        .map(line => line.split(' ')
                                   .map(word => word.trim()));
let counter = 0;
let reg = {a:1};
let sound = [];
let i = 0;
getValue = inst => isNaN(inst) ? (reg[inst] ? reg[inst] : 0) : parseInt(inst);

play = (lines) => {
    while(i < lines.length){
        const inst  = lines[i];
        if (inst[0] === 'set') {
            reg[inst[1]] = getValue(inst[2]);
        } else if (inst[0] === 'sub'){
            reg[inst[1]] -= getValue(inst[2]);
        } else if (inst[0] === 'mul'){
            counter++;
            reg[inst[1]] *= getValue(inst[2]);
        } else if (inst[0] === 'jnz'){
            if(getValue(inst[1]) !=0 ) {                
               i += getValue(inst[2]);
               continue;
            }
        }
        i++;
    }
    console.log(counter);
}

play(instructions);

