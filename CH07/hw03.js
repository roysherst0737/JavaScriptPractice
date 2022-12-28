/**
 * 請定義類別Point，表示二維座標的點
 * ● 屬性
 *      x: 水平位移量
 *      y: 垂直位移量
 * ● 建構式: 2個參數，用來初始化屬性x、y
 * 替第2題的類別Calculator加入一個方法distance()
 * ● 功能: 計算平面座標上，2點的距離，並回傳
 * ● 參數
 *      p1: 點1，Point型態，含有2的屬性x、y，表示水平位移量、垂直位移量
 *      p2: 點2，同上
 * ● 回傳: 2點的距離 
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Calculator {

    constructor(radix = 10) {
        this.radix = radix;
    }

    distance(p1, p2) {
        const x = p1.x - p2.x;
        const y = p1.y - p2.y;
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
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