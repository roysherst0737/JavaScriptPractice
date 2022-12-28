/**
 * 替第4題的類別Calculator加入1個方法getRandom()
 * 功能: 產生指定範圍的整數亂數
 * 參數
 * startNum: 亂數範圍下限
 * endNum: 亂數範圍上限
 * 回傳: 介於startNum~endNum的整數亂數
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

  getRandom(startNum, endNum) {
    return Number.parseInt(Math.random() * (endNum - startNum + 1) + startNum);
  }
}

const cal2 = new Calculator();
console.log(cal2.getRandom(1, 5));

