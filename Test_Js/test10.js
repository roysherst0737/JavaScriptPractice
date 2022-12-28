class User {
    // private int id;
    // private String name;
    // private int age;

    // public User() {
    // }

    // public User(int id, String name, int age) {
    //     this.id = id;
    //     this.name = name;
    //     this.age = age;
    // }
    // Setter/Getter here...
}
// ----------------------------------------------

// User.prototypr.id = 0;
// User.prototype.name = '';
// User.prototype.age = 0;

//定義建構式
function User(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
}

User.prototype.talk = function() {
    console.log("Hi! I'm" + this.name + ", I'm " + this.age + "years old.");
};

const user1 = new User(1, 'Roy', 28);
console.log(user1);
user1.talk();