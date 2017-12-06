const out = `5	1	10	0	1	7	13	14	3	12	8	10	7	12	0	6`;
let bankLoop = new Set();
let bank = out.split('\t').join(' ');
let prevLength = 0;
bankLoop.add(bank);
while(true) {
	let words = bank.split(' ');
	let max = 0;
	let index = 0;
	for(let i = 0; i< words.length; i++) {
		if(words[i] > max ) {
			max = parseInt(words[i]);
			index = i;
		}
	}
	bank = redistribute(index, max, words);
	bankLoop.add(bank);
	if (bankLoop.size === prevLength) {		
		break;
	}
	prevLength = bankLoop.size
}


function redistribute(index, max, bankMem) {
	let i = index;
	bankMem[index] = '0';
	let len = bankMem.length;
	while(max > 0) {
		i < len-1 ? i++ : i=0;		
		bankMem[i] = `${parseInt(bankMem[i])+1}`;		
		max--;
	}
	return bankMem.join(' ');
}


console.log(bankLoop.size);