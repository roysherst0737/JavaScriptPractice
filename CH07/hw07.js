/**
 * 續第6題，定義2個Shape類別的子類別
 * 
 * Rectangle(矩形)
 *   屬性
 *      length: 長
 *      width: 寬
 *   建構式: 2個參數(length、width)
 *   方法 (覆寫Shape的方法)
 *      getPerimeter(): 計算矩形周長，並回傳
 *      getArea(): 計算矩形面積，並回傳
 * 
 * Circle(圓形)
 *   屬性
 *      radius: 半徑
 *   建構式: 1個參數(radius)
 *   方法 (覆寫Shape的方法)
 *      getPerimeter(): 計算圓形周長，並回傳
 *      getArea(): 計算圓形面積，並回傳
 */

 class Shape {
    getPerimeter() {
    }
    getArea() {
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }

    getPerimeter() {
        return (this.length + this.width) * 2;
    }
    getArea() {
        return (this.length * this.width);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getPerimeter() {
        return (this.radius) * 2 * Math.PI;
    }
    getArea() {
        return Math.pow((this.radius), 2) * Math.PI;
    }
}

let a = new Rectangle(2, 3).getPerimeter();
let b = new Rectangle(2, 3).getArea();
let c = new Circle(5).getPerimeter();
let d = new Circle(5).getArea();
console.log(a, b, c, d);