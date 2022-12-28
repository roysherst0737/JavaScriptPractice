/**
 * 功能: 計算2個整數的四則運算，並依指定的進位模式回傳計算結果
 * @param {function} arithmetic 四則運算，可接受'+'、'-'、'*'、'/'
 * @param {number} radix 進位模式，可接受2、8、10(預設)、16
 * @param {number} a 運算元1
 * @param {number} b 運算元2
 * @returns {string} 算術運算的結果
 */

function calculate(arithmetic, radix = 10, a, b) {
    switch (arithmetic) {
        case '+':
            return (a + b).toString(radix);
        case '-':
            return (a - b).toString(radix);
        case '*':
            return (a * b).toString(radix);
        case '/':
            return (a / b).toString(radix);
    }
}
console.log(calculate('+', 10, 9, 1));
console.log(calculate('+', 2, 1, 1));