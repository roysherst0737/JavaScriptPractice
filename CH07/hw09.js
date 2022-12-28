/**
 * 請定義以下類別
 * Vehicle(交通工具)
 *  屬性
 *    tankSize: 油箱大小(公升)
 *  建構式: 1個參數(tankSize)
 *  方法
 *    gasUp(): (示意即可) 印出已加滿至xx公升
 * 
 * Car(車)、Airplane(飛機)
 *  繼承Vehicle類別
 *  建構式: 1個參數(tankSize)
 */

class Vehicle {
    constructor(tankSize) {
        this.tankSize = tankSize;
    }
    gasUp(L = 60) {
        console.log("已加滿至" + L + "公升");
    }
}

class Car extends Vehicle {
    super() { }
    constructor(tankSize) {
        super(tankSize);
    }    
}

class Airplane extends Vehicle {
    super() { }
    constructor(tankSize) {
        super(tankSize);
    }
}

let car = new Car(60)
console.table(car);
console.log(new Car().gasUp());