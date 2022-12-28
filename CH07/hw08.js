/**
 * 請定義以下類別
 * Pet(寵物)
 *  屬性
 *    nickname: 暱稱
 *    age: 年紀
 *    color: 毛色
 *  建構式: 3個參數(nickname、age、color)
 *  方法
 *    talk(): 方法內留空即可
 * 
 * Dog(狗)、Cat(貓)、Bird(鳥)
 *  繼承Pet類別
 *  建構式: 3個參數(nickname、age、color)
 *  方法 (覆寫Pet的方法)
 *    talk(): 印出寵物的叫聲
 */

class Pet {
    constructor(nickname, age, color) {
        this.nickname = nickname;
        this.age = age;
        this.color = color;
    }
    talk() { }
}

class Dog extends Pet{
    constructor(nickname, age, color) {
        super(nickname, age, color);
    } 
    talk() {
        console.log("狗狗會汪汪叫");
    }
}

class Cat extends Pet{
    constructor(nickname, age, color) {
        super(nickname, age, color);
    } 
    talk() {
        console.log("喵咪會喵喵叫");
    }
}

class Bird extends Pet{
    constructor(nickname, age, color) {
        super(nickname, age, color);
    } 
    talk() {
        console.log("鳥兒會啾啾叫");
    }
}

let David = new Dog("David", 12, 'White');
console.log(David);

new Dog().talk();
new Cat().talk();
new Bird().talk();
