function solve(num1, num2) {
    if (num1 > num2) {
        for (let i = num2; i > 0; i --) {
            if (num1 % i === 0 && num2 % i === 0) {
                console.log(i);
                break;
            }
        }
    } else if (num2 > num1) {
        for (let k = num1; k > 0; k --) {
            if (num2 % k === 0 && num1 % k === 0) {
                console.log(i);
                break;
            }
        }
    } else {
        console.log(num1);
    }
    
}
solve(15, 5);
solve(2154, 458);
solve(30, 30);