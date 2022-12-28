class MyNumber {
    toFixed(n) {
        if (n < 0 || n > 100) {
            throw new RangeError('xxx');
        }
    }
}

//用 a call b 再用 b call c
const x = new MyNumber();
x.toFix(-1);

function a() { b(); }
function b() { c(); }
function c() { throw new Error('錯誤簡述'); }
/* a() -> b() -> c() */


function f1(name) {
    name = name ?? '顧客';
    console.log(name + '您好');
}
f1();
f1(undefined);
f1(null);
f1('');
f1(0);