// 2.(續hw01) 請印出陣列所有元素的總和、平均值
const array = [];
let sum = 0;
for (let i = 0; i < 5; i++) {
    array[i] = parseInt(Math.random() * 10);
    for (let j = 0; j < i; j++){
        while (array[i]=== array[j]) {
            array[i] = parseInt(Math.random() * 10);
            j = 0;
        }
    }
    sum += array[i];
}
let avg = sum / 5;
console.table(array);
console.log(sum);
console.log(avg);