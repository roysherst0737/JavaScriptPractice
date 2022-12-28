/**
 * 功能: 過濾陣列元素，並回傳新陣列，內含通過過濾的元素
 * @param {Array} array 欲被過濾的陣列。此陣列應保持原有的元素，不可異動！
 * @param {Function} callback 回呼函式，用以表示過濾陣列元素的條件，回傳true表示元素留下；false表示元素捨棄
 * @returns {Array} 回傳: 新陣列，內含通過過濾的元素
 */

// 10-1. 使用定義函式語法
 function filter(array, callback) {
    const result = [];
    for (let e of array){
        const check = callback(e);
        if (check === true) {
            result[result.length] = e;
        }
    }
    return result;
}

// 10-2. 使用匿名函式語法
const array = [1, 2, 3, 4, 5];
console.log(filter(array, function f1(e) { return e > 3; }));
console.log(filter(array, function (e) { return e > 3; }));

// 10-3. 使用箭頭函式語法
console.log(filter(array, (e) => { return e > 3; }));
console.log(filter(array, e => { return e > 3; }));
console.log(filter(array, e => e > 3));