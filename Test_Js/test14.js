const arr = ['T', 'i', 'b', 'a', 'M', 'e'];
for (let e of arr) {
    console.log(e);
}
arr.forEach(
    e => console.log(`@${e}`)
);

const arr2 = [3, 5, 2, 1, 4];
const resultArr = arr2.map(e => e * e);
console.log(resultArr);

const ARR = arr.map(e => e.toUpperCase());
console.log(ARR);

const arr3 = [3, 5, 2, 1, 4];
const aaa = arr3.filter(e => e % 2 !==0);
console.log(aaa);

// 請將所有元素 立方、只留下偶數，最後印出
// forEach()、map()、filter()
arr3.map(e => e*e*e)
    .filter(e => e%2 === 0)
    .forEach(e => console.log(e));

const element = arr3.find(e => e > 3);
console.log(element);

// 迭代陣列元素，收斂成一個值並回傳(所有陣列元素相加)
const sum = arr3.reduce((preValue, curValue) => {
    return preValue + curValue;
}, 0);
console.log(sum); 

array = arr3.concat([7,6]);
// [3, 4, 2, 1, 4, 7, 6]
array = [...arr3, ...[7, 6]];
// [3, 4, 2, 1, 4, 7, 6]