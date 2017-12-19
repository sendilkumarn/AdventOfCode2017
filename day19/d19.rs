fn main() {
    let inp = include_str!("d19.txt");
    let track = inp.lines()
                    .map(|line| line.chars().collect::<Vec<char>>())
                    .collect::<Vec<Vec<char>>>();

    let mut steps = 0;
    let mut x = 0;
    let mut y = track[x].iter().position(|&c| c == '|').unwrap();
    let mut dir = 'd';

    loop {
        let current = track[x][y];
        
        match current {
            'A'...'Z' | 'a'...'z' => print!("{}", current),
            '+' => {
                match dir {
                    'u' | 'd' => if track[x][y-1] == '-' { dir = 'l' } else { dir = 'r' } ,
                    'l' | 'r' => if track[x - 1][y] == '|' { dir = 'u' } else { dir = 'd' },
                    _ => ()
                }
            },
            ' ' =>  break,
            _ => ()
        }
        
        match dir {
            'd' => x+=1,
            'u' => x-=1,
            'l' => y-=1,
            'r' => y+=1,
             _  => ()
        }

        steps+=1;
    }         
    println!("steps {}", steps);
}