function solve(num) {
    let myStr = String(num);
    let sum = 0;
    let isSame = true;
    if (num > 9) {
        for (let i = 1; i < myStr.length; i++) {
            if (myStr[i] !== myStr[i-1]) {
                isSame = false;
                break;
            }
        }
    }
    
    for (let k = 0; k < myStr.length; k ++) {
        sum += Number(myStr[k]);
    }
    console.log(isSame);
    console.log(sum);
}
solve(2222222);
solve(1234);