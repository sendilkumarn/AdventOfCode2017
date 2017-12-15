fn main() {
    let mut a = 873;
    let mut b = 583;
    let mut count = 0;

    for i in 0..40000000 {
        a = get_next(a, 16807);
        b = get_next(b, 48271);

        if a&0xFFFF == b&0xFFFF {
            count +=1; 
        }
    }

    println!("{}",count);
}

fn get_next(mut gen: i64, factor: i64) -> i64 {
    gen *= factor;
    gen %= 2147483647;
    gen
}