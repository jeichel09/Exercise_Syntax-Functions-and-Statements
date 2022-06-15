function solve(steps, footprint, speed) {
    let distance = steps * footprint;
    let speedInMeters = speed / 3.6;
    let timeInSecs = distance / speedInMeters;
    let pause = 0;
    
    if (distance % 500 !== 0) {
        pause = Math.floor(distance / 500);
    } else {
        pause = (distance / 500) - 1;
    }

    let hours = Math.floor(timeInSecs / 3600);
    let minutes = Math.floor((timeInSecs-(hours * 3600)) / 60) + pause;
    let seconds = Math.round(timeInSecs - (hours * 3600) - (minutes * 60) + (pause*60));

    console.log((hours < 10 ? "0" : "")+hours+":"+(minutes < 10 ? "0" : "")+minutes+":"+(seconds < 10 ? "0" : "")+seconds);
}
solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);