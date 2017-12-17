
fn main() {
    let mut buffer = Vec::new();
    buffer.push(0);
    let inp = 370;
    let mut c = 0;

    for i in 1..2018 {
        c = ((c+inp) % buffer.len()) + 1;
        buffer.insert(c, i);
        if i == 2017 {
            println!("{}",buffer[c+1]); 
        }
    }
}