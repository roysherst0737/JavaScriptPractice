/**
 * 請定義類別Calculator，說明如下
 * 屬性
 * radix: 進位模式，可接受2、8、10(預設)、16
 * 建構式: 1個參數，用來初始化屬性radix
 * 方法: 計算2個整數的四則運算，並依指定的進位模式回傳計算結果
 * add(a, b): 加法
 * sub(a, b): 減法
 * mul(a, b): 乘法
 * div(a, b): 除法
 */

class Calculator {

      constructor(radix = 10) {
        this.radix = radix;
    }

    add(a, b) {
        return (a + b).toString(this.radix);
    }
    sub(a, b) {
        return (a - b).toString(this.radix);
    }
    mul(a, b) {
        return (a * b).toString(this.radix);
    }
    div(a, b) {
        return (a / b).toString(radix);
    }
}

const calor = new Calculator(10);
console.log(calor.mul(1, 2));