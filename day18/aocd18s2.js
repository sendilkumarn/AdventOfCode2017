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

let sent = 0;

const instructions = inp.split('\n')
                        .map(line => line.split(' ')
                                   .map(word => word.trim()));

getValue = (inst, reg) => isNaN(inst) ? (reg[inst] ? reg[inst]:  0) : parseInt(inst);

play = (pointer, register, receiver, sender, id) => {
    const inst  = instructions[pointer];
    let wait = false;
    if (inst[0] === 'set') {
        register[inst[1]] = getValue(inst[2], register);
    } else if (inst[0] === 'add'){
        register[inst[1]] += getValue(inst[2], register);
    } else if (inst[0] === 'mul'){
        register[inst[1]] *= getValue(inst[2], register);
    } else if (inst[0] === 'mod'){
        register[inst[1]] %= getValue(inst[2], register);
    } else if (inst[0] === 'snd') {        
        sender.push(getValue(inst[1], register));
        if (id === 1)
            sent++;
    } else if (inst[0] === 'rcv'){
        if(receiver.length != 0 ) {
            register[inst[1]] = receiver[0];
            receiver.splice(0,1);
        } else {
            pointer--;
            wait = true;
        }
    } else if (inst[0] === 'jgz'){
        if(getValue(inst[1], register) > 0) {
            pointer += getValue(inst[2], register)-1;
        }
    }
    return { pointer: pointer+1, wait: wait };
}


const totalInstructions = instructions.length;
let register0 = { p: 0 };
let register1 = { p: 1 };
let counter0 = 0;
let counter1 = 0;
let sender = [];
let receiver = [];
solve = () => {
    while(true) {
        let stateMachine0 = play(counter0, register0, receiver, sender, 0);
        let stateMachine1 = play(counter1, register1, sender, receiver, 1);

        counter0 = stateMachine0.pointer;
        counter1 = stateMachine1.pointer;

        if (stateMachine0.wait && stateMachine1.wait) {
            break;
        }
    }
    console.log(sent);
}

solve();