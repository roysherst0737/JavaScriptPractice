const p1 = {
    id: 1,
    name: 'Roy',
    age: 28,
    skills: ['JavaSE', 'MySQL', 'JavaScript' ],
    Roy的另一半: {
        id: 2,
        name: 'IU',
        age: 28,
        skill: ['Sining', 'Dancing', 'Acting']
    }
};

for ( let key in p1 ) {
    const value = p1[key];
    if (key === 'Roy的另一半') {
        console.log(key);
        for (let key in value) {
            console.log(key + ' : ' + value[key]);
        }
    }else {    
    console.log(key + ' : ' + value);
    }
}


//增強版物件字面常數(Enhanced Object Literals)
// ES5
var x = 1;
var y = 2;

var p2 = {
    x: x,
    y: y
};
// ES6
const p2 = {x, y};