const arr = [];

arr.push('a');
arr.push('b');
arr.push('c');
arr.push('d');
arr.push('e');
arr.push('f');
arr.pop();
arr.pop();

console.log(arr);

const arr1 = ['a', 'b', 'c', 'd', 'e']
arr1.unshift('f', 'g');
console.log(arr1);

const arr2 = [1, 3, 5, 2, 4, 100];
arr2.sort();
console.log(arr2); //Js會以第一個字元來比較

arr2.sort(
    (e1, e2) => e2 - e1 //逆向排序
);
console.log(arr2);

arr2.sort(
    (e1, e2) => e1 - e2 //順向排序
);
console.log(arr2);

const arr3 = ['T', 'i', 'b', 'a', 'M', 'e'];
const arr4 = arr3.slice(1, 3);
console.log(arr4);

arr3.splice(4, 2, 'Y', 'o', 'u');
console.table(arr3);