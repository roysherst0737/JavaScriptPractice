/**
 * 請定義以下類別
 * Owner(主人)
 *  屬性
 *    name: 姓名
 *    pet: 寵物，Pet型態
 *    vehicle: 交通工具，Vehicle型態
 *  建構式: 3個參數(name、pet、vehicle)
 *  方法
 *    walkPet(): (示意即可) 印出寵物叫聲
 *    drive(): (示意即可) 印出油箱大小
 */

class Owner {
    constructor(name, pet, vehicle) {
        this.name = name;
        this.pet = pet;
        this.vehicle = vehicle;
    }
    walkPet() {
        switch (this.pet) {
            case 'Dog':
                console.log("狗狗會汪汪叫");
                break;
            case 'Cat':
                console.log("喵咪會喵喵叫");
                break;
            case 'Bird':
                console.log("鳥兒會啾啾叫")
                break;
        }
    }
    drive() {
        switch (this.vehicle) {
            case 'Car':
                console.log('已加滿至' + this.tankSize + '公升');
                break;
            case 'Airplane':
                console.log('已加滿至' + this.tankSize + '公升');
                break;
        }
    }
}

let O1 = new Owner('Roy', 'Dog', 'Airplane');
let O2 = new Owner('William', 'Cat', 'Car');
let O3 = new Owner('David', 'Bird', 'Car');

O1.tankSize = 1000;
O2.tankSize = 50;
O3.tankSize = 60;

O1.walkPet();
O1.drive();

O2.walkPet();
O2.drive();

O3.walkPet();
O3.drive();