// 1.請設計一程式，含有1個正整數變數n，並印出1~n所有質數的總和
let sum = 0;
for (i = 1; i <= 100; i++) {
    for (j = 2; j < i; j++ ) {
        if (i % j === 0)
        break;
    }
    if (j >= i) {
        sum +=j;
    }   
}
console.log(sum);
