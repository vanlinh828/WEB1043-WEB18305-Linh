let a = prompt('Nhập a: ');
let b = prompt('Nhập b: ');
let c = prompt('Nhập c: ');

if (a == 0){
    // b x + c = 0
}else {
    let delta = Math.pow(b, 2) - 4 * a * c;

    if (delta == 0) {
        let x = -b / (2 * a);

        document.writeln(' Phương trình có nghiệm kép: x = ${x}');  
    } else if (delta < 0) {
      document.writeln(' Phường trình vô nghiệm');
    } else {
        document.writeln(' Phương trình có 2 nghiệm phân biệt');
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);

        document.write(`phương trình có nghiệm là ${x1} là ${x2}`);
    }
}