// 1.請宣告一個陣列，並利用Math.random()產生5個範圍為0~9的值給每個元素，且每個值不可重複
const array = [];
for (let i = 0; i < 5; i++) {
    array[i] = parseInt(Math.random() * 3);
    for (let j = 0; j < i; j++){
        if (array[i]=== array[j]) {
            i--;
            break;
        }
    }
}
console.log(array);

    