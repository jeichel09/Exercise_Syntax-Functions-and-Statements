function solve(num, op1, op2, op3, op4, op5) {
    let target = Number(num);
    let ops = [op1, op2, op3, op4, op5];
    for (op of ops) {
        let parser = {
            chop() {target /= 2; console.log(target);},
            dice() {target = Math.sqrt(target); console.log(target);},
            spice() {target ++; console.log(target);},
            bake() {target *= 3; console.log(target);},
            fillet() {target *= 0.8; console.log(target);}
        }

        parser[op]();
    }
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');