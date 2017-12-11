const inp = `a b c d
e f g h`;
const lines = inp.split('\n')
                .map(line => {
                    const words = line.split(" ");
                    words.map(w => {
                        console.log(w);
                    });
                });


