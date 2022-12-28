/**
 * 請定義函式calculate2，說明如下 (類似第1題)
 * 功能: 計算N個整數的加法、乘法運算，並依指定的進位模式回傳計算結果
 * @param {function} arithmetic 四則運算，只接受’+‘、’*'
 * @param {number} radix 進位模式，可接受2、8、10(預設)、16
 * @param {number} nums 運算元陣列
 * @returns 回傳: 算術運算的結果
 */

let sum1 = 0;
let sum2 = 1;

function calculate2(arithmetic, radix, nums) {
    if (arithmetic == "+") {
        for (let i = 0; i < nums.length; i++) {
            sum1 += nums[i];
        }
        return sum1.toString(radix);
    }

    if (arithmetic == "*") {
        for (let i = 0; i < nums.length; i++) {
            sum2 *= nums[i];
        }
        return sum2.toString(radix);
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(calculate2("+", 10, arr));