function solve(str) {
    let regex = /\b[A-Za-z0-9]+\b/g;
    let matches = str.match(regex);
    let upMatches = []
    
    for (word of matches) {
        upMatches.push(word.toUpperCase());
    }
    console.log(upMatches.join(", "));
}
solve('Hi, how are you?');
solve('hello');