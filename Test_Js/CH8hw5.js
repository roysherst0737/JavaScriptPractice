function f1() {
    try {
        console.log('A');
        f2();
    } catch (error) {
        console.log('B');
    } finally {
        console.log('C');
    }
}

function f2() {
    try {
        console.log('D');
        f3();
    } catch (error) {
        console.log('E');
    } finally {
        console.log('F');
    }
}

function f3() {
    console.log('G');
    if (true) {
        throw new Error();
    }
    console.log('H');
}

console.log('I');
f1();
console.log('J');