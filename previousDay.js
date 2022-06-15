function solve(year, month, day) {
    let pDay = new Date(year, month - 1, day - 1);
    let nYear = pDay.getFullYear();
    let nMonth = pDay.getMonth();
    let nDay = pDay.getDate();
    console.log(`${nYear}-${nMonth + 1}-${nDay}`);
}
solve(2016, 9, 30);
solve(2016, 10, 1);