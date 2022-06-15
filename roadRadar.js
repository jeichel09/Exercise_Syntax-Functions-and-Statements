function solve(speed, area) {
    const vMot = 130;
    const vInt = 90;
    const vCity = 50;
    const vRes = 20;

    switch (area) {
        case 'motorway': if (speed <= vMot) { 
            console.log(`Driving ${speed} km/h in a ${vMot} zone`); } 
            else { areYouTooFast(speed, vMot);}; break;
        case 'interstate': if (speed <= vInt) { 
            console.log(`Driving ${speed} km/h in a ${vInt} zone`); } 
            else { areYouTooFast(speed, vInt);}; break;
        case 'city': if (speed <= vCity) { 
            console.log(`Driving ${speed} km/h in a ${vCity} zone`); } 
            else { areYouTooFast(speed, vCity);}; break;
        case 'residential': if (speed <= vRes) { 
            console.log(`Driving ${speed} km/h in a ${vRes} zone`); } 
            else { areYouTooFast(speed, vRes);}; break;
    }

    function areYouTooFast(velocity, limit) {
        let diff = velocity - limit;
        if (diff <= 20) {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - speeding`);
        } else if (diff > 20 && diff <= 40) {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - excessive speeding`);
        } else {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - reckless driving`);
        }
    }
}
solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');