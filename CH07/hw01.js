// 請定義"手機"類別，特徵依你認知的現實狀況
class MobilePhone {
    constructor(brand, color, price) {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }

    showProductInfo() {
        console.log("品牌：" + this.brand);
        console.log("顏色：" + this.color);
        console.log("價格：" + this.price);
    }
}

let m1 = new MobilePhone('Apple', 'black', 33000 );
let m2 = new MobilePhone('HTC', 'white', 20000 );

m1.showProductInfo();
console.log("-------------")
m2.showProductInfo();