//範例1
const arr = ['a','b', 'c', 'd', 'e'];
f1(arr, f2);
function f2(e) {
    console.log('#' + e);
}
function f1(arr, func) {
    for (let e of arr) {
      //console.log(e); //只能做一件事！
      func(e);
    }
}
// const arr = ['a','b', 'c', 'd', 'e'];
f1(arr, function(e) {
    console.log('%' + e);
});
//箭頭函式(範例1)
f1(arr, (e) => {
    console.log('%' + e);
});
//箭頭函式更簡化(範例1)
f1(arr, e => console.log('%' +e));


//範例2
const a = [1, 2, 3, 4, 5];
f1(a, f3)
function f3(e) {
    console.log(e * e);
}
//const a = [1, 2, 3, 4, 5];
f1(a, function(g) {
    console.log(g *2);
});
//箭頭函式(範例2)
f1(a, (g) => {
    console.log(g * 2)
});
//箭頭函式更簡化(範例2)
f1(a, g => console.log(g * 2));


//練習
function foreach(array, func) {
    for (let e of array) {
      func(e);
    }
}

function map(array, callback) {
    const result = [];
    for (let e of array) {
        result[result.length] = callback (e);
    }
    return result;
}

//最原本寫法
const b = [1, 2, 3, 4, 5];
//foreach(a,g =>console.log(g * 2));
console.table(map(b,f));

function f(e) {
    return e * 3;
}

//匿名函式
const b1 = [1, 2, 3, 4, 5];
console.table(map(b1,function f(e) {
    return e * 3;
}));

//箭頭函式
const b2 = [1, 2, 3, 4, 5];
console.table(map(b2,(e) => {
    return e * 3;
}));

//箭頭函式更簡化
const b3 = [1, 2, 3, 4, 5];
console.table(map(b2,e => e * 3));

//function最簡化
((username) => {
    console.log('Hi,', username, 'welcome to JavaScript!');
})('William');


//講義範例
function foreach(array, callback) {
    for (let e of array) {
        callback(e);
    }
}

const arr1 = ['a', 'b', 'c', 'd', 'e'];
// 使用箭頭函式-省去 圓括號、大括號
foreach(arr1, e => console.log('show: ', e));