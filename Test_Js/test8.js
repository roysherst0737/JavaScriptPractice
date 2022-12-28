const object = {
    name: 'Roy',
    age: 28
};

const xxx ='age'
object[xxx] = 29;
object.id = 123;

console.table(object);
console.table(object['id']);

console.log('======='+'"in"' +'可直接判斷布林值======')
console.log('password' in object);
console.log('id' in object);

delete object.age;
console.log(object);
console.log('age' in object);


function f1(person) {
    // E5
    var name = person.name;
    var age = person.age;
    var id = person.id;

    // ES6
    const { name, age, id } = person;
}
var p1 = {
    id: 1,
    name: 'Will',
    age: 30
};
f1(p1);

const arr = [1, 2, 3];
const [e0, e1, e2] =arr;
console.log(e0);

let a = 1, b = 2;
// const x = [a, b];
// const y = [b, a];
// x = y;
[a, b] = [b, a];

/**
 * 試著把兩變數的"值互換"，觀察結果
 */


// 傳值呼叫的結果
// 參數是"原生"型態時，就會是此結果
function exchange1(a, b) {
    const temp = a;
    a = b;
    b = temp;
}

let x = 1, y = 2;
exchange1(x, y);
console.log('x: ' + x);
console.log('y: ' + y);


// 傳參考呼叫的結果
// 參數是"物件"型態時，就會是此結果
// *註: 有關物件的用法，後面就會提到，暫時看不懂沒關係!
function exchange2(point) {
    const temp = point.x;
    point.x = point.y;
    point.y = temp;
}

let point = {
    x: 1,
    y: 2
};
exchange2(point);
console.log('point.x: ' + point.x);
console.log('point.y: ' + point.y);