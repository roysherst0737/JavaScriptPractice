// 1.
// 定義
function f1(){
    // 寫上自己想做的事(想定義的函式)
    console.log("Hello, World!")
}
// 呼叫(使用)
f1();

// 2.
// 定義
function f2(a, b){
    let c = 
    console.log("Hello, World!");
}
// 呼叫(使用)
f2 (undefined, undefined);

// 3.
// 定義
function f3(a, b){
    console.log(a ** b);
    return a ** b;
}
// 呼叫(使用)
f3 (2,3);

// 4.
// Alternative
function pow(a,b) {
    return a ** b;
}
console.log(pow(2, 10));

// 5.
// 設計必填欄位
function check(username, password, nickname) {
    if (username === '') {
        console.log('此欄為必填')
        return;
    }
    if (password === '') {
        console.log('此欄為必填')
        return;
    }
}

// 6.
// 用預設參數值模擬Overload

f4('Will');

function f4(name, age = 18) {
    console.log(name + '您好');
    console.log('您的年齡是' + age);
}
