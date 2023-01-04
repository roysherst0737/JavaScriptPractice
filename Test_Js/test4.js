const array = [true, 1, 2n, 'a', new Date()];
console.log(array.length);

const array2 = ['a', 'b', 'c', 'd', 'e'];
array2[2] = 'x';
array2[5] = 'f';
console.table(array2);

//String.fromCharCode(97) ─> 'a'
// TODO 放入a-z至一個陣列中
const array3 = []
for (let code = 97; code <= (97+25); code++) {
    array3[array3.length] = String.fromCharCode(code);
}
console.log(array3);

//依序把各元素印出來
for (let i = 0; i < array3.length; i++) {
    console.log(array3[i]);
}

//不建議以下用法
// for (let index = 0; index < array3.length; index++) {
//     const element = aray3[index];
//     console.log(element);
// }

//依序將各元素印出來 for...of的方法(較好)
for (let element of array3) {
    console.log(element);
}

//二維陣列迭代(依序將各元素印出來)
const twoDimArr = [
    ['JavaSE', 'MySQL', 'JavaScript'],
    ['JDBC', 'HTML', 'CSS', 'Redis'],
    ['Ajax','jQuery']
];
for(let a1 of twoDimArr ) {
    for (let e of a1) {
    console.log(e);
    }
}

//二維陣列迭代(拆解各元素後依序列出)
const twoDimArr2 = [
    ['JavaSE', 'MySQL', 'JavaScript'],
    ['JDBC', 'HTML', 'CSS', 'Redis'],
    ['Ajax','jQuery']
];
for(let a2 of twoDimArr2 ) {
    for (let skill of a2) {
        for (let e2 of skill) {
            console.log(e2);
        }
    }
}



const twoDimArrEx = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f', 'g'],
    ['h', 'i']
];

// 印出	陣列twoDimArrEx的第1個元素，此元素的第2的元素之值(f)
console.log('元素值: ', twoDimArrEx[1][2]);

// 印出一維陣列所有元素
console.log('一維陣列: ', twoDimArrEx[1]);

// 印出二維陣列所有元素
console.log('二維陣列: ', twoDimArrEx);

//找出陣列中最大的數字
var numbers = [3,342,23,22,124, 'a'];//陣列裡可以放不同的型別
var max = 0;
for(var i=0;i<numbers.length;i++){
  if(numbers[i] > max){
    max = numbers[i];
  }
}
console.log(max);

//Alternative:僅用sort()無法排序
console.log(numbers.sort());
//應用函式如下
numbers.sort((a, b) => a - b);
console.log(numbers[4]);