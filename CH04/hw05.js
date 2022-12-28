// 5.請設計一程式，含有2個正整數變數year(年)、month(月)，印出該年該月有幾天
let daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let date = [2050, 2];
for (let i = 0; i < 2; i++) {
    while (i == 0) {
        if (date[i] % 4 == 0 && date[i] % 100 != 0) {
            daysOfMonth[1]++;
        } else if (date[0] % 400 == 0) {
            daysOfMonth[1]++;
        }
        break;
    }
}
console.log(daysOfMonth[date[1] - 1]);