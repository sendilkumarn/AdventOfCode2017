const inp = `set i 31
set a 1
mul p 17
jgz p p
mul a 2
add i -1
jgz i -2
add a -1
set i 127
set p 618
mul p 8505
mod p a
mul p 129749
add p 12345
mod p a
set b p
mod b 10000
snd b
add i -1
jgz i -9
jgz a 3
rcv b
jgz b -1
set f 0
set i 126
rcv a
rcv b
set p a
mul p -1
add p b
jgz p 4
snd a
set a b
jgz 1 3
snd b
set f 1
add i -1
jgz i -11
snd a
jgz f -16
jgz a -19`;

const instructions = inp.split('\n')
                        .map(line => line.split(' ')
                                   .map(word => word.trim()));

let reg = {};
let sound = [];
let i = 0;
getValue = inst => isNaN(inst) ? (reg[inst] ? reg[inst] : 0) : parseInt(inst);

play = (lines) => {
    while(i < lines.length){
        const inst  = lines[i];
        if (inst[0] === 'set') {
            reg[inst[1]] = getValue(inst[2]);
        } else if (inst[0] === 'add'){
            reg[inst[1]] += getValue(inst[2]);
        } else if (inst[0] === 'mul'){
            reg[inst[1]] *= getValue(inst[2]);
        } else if (inst[0] === 'mod'){
            reg[inst[1]] %= getValue(inst[2]);
        } else if (inst[0] === 'snd') {        
            sound.push(getValue(inst[1]));
        } else if (inst[0] === 'rcv'){
            if(getValue(inst[1]) > 0) {
                console.log(sound[sound.length-1]);
                break;
            }
        } else if (inst[0] === 'jgz'){
            if(getValue(inst[1]) > 0) {
               i += getValue(inst[2]);
               continue;
            }
        }
        i++;
    }
}

play(instructions);
