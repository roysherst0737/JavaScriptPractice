// 1.有一個正整數n，並印出1~n之內，3的倍數和4的倍數的總和
let n = 100, sum = 0;

for (let i = 0; i <= n; i++) {
    if (i % 3 === 0)
        sum += i;

    if (i % 4 === 0)
        sum += i;
}
console.log(sum);