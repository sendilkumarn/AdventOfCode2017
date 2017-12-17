
fn main() {
    let inp = 370;
    let mut c = 0;
    let mut out = 0;

    for i in 1..50000000 {
        c = ((c+inp) % i) + 1;
        if c == 1 {
            out = i;
        }
    }
    println!("{}",out);
}