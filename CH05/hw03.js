/**
 * (續hw02) 請將陣列排序，若有陣列元素之值等於平均值，印出該元素的索引
 * 否則，找出平均值介於哪兩個元素值之間，印出該兩個元素的索引
 */
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
array.sort();
console.table(array);
console.log(avg);
for (x = 0; x <5; x++) {
    if (array[x] === avg) {
        console.log('索引值為' + x);
        break;
    } else if (avg < array[x]) {
        console.log('介於索引值' + (x-1) + '與索引值 ' + x + '之間');
        break;
    }
}