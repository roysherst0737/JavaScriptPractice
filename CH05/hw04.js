/**
 * 有一字串陣列內容如下..
 * const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];
 * 請統計並印出陣列內每個字母各有幾個，EX..
 * a: 4
 * c: 2
 * ..
 */

const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];
const arr = [];
for (let e of mySkills) {
    for (let e1 of e) {
        arr.push(e1)
    }     
}
arr.sort();
// console.log(arr);
let num = 1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
        num++;
    } else {
        console.log(arr[i] + ':' + num + "個")
        num = 1;
    }
}



