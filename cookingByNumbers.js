function solve(num, op1, op2, op3, op4, op5) {
    let target = Number(num);
    let ops = [op1, op2, op3, op4, op5];
    for (op of ops) {
        switch(op) {
            case "chop": target /= 2; console.log(target); break;
            case "dice": target = Math.sqrt(target); console.log(target); break;
            case "spice": target ++; console.log(target); break;
            case "bake": target *= 3; console.log(target); break;
            case "fillet": target *= 0.8; console.log(target); break;
            default: console.log("Invalid operation!");
        }
    }
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');