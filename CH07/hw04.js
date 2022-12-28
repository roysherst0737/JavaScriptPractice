/**
 * 替第2題的類別Calculator加入1個方法showDistance()
 * 功能: 印出p1和p2的座標和2點的距離
 * 參數
 * p1: 點1，Point型態，含有2的屬性x、y，表示水平位移量、垂直位移量
 * p2: 點2，同上
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
 
  showDistance(p1, p2) {
    console.log('p1的座標為(' + p1.x + ',' + p1.y + ')');
    console.log('p2的座標為(' + p2.x + ',' + p2.y + ')');
    console.log('兩點的距離為' + Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y)));
  }
}

const p1 = new Point(3, 4);
const p2 = new Point(0, 0);

const cal = new Calculator();
cal.showDistance(p1, p2);

