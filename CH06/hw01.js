/**
 * 請定義函式calculate，說明如下：
 * 
 * ● 功能: 計算2個整數的四則運算，並依指定的進位模式回傳計算結果
 * 
 * ● 參數
 *   ◆arithmetic: 四則運算，可接受'+'、'-'、'*'、'/'
 *   ◆radix: 進位模式，可接受2、8、10(預設)、16
 *   ◆a: 運算元1
 *   ◆b: 運算元2
 * 
 * ● 回傳: 算術運算的結果
 */

calculate();

function calculate(arithmetic, radix, a, b) {
    if (arithmetic === '+') {
        return (a + b).toString(radix);
    }
    if (arithmetic === '-') {
        return (a - b).toString(radix);
    }
    if (arithmetic === '*') {
        return (a * b).toString(radix);
    }
    if (arithmetic === '/') {
        return (a / b).toString(radix);
    }       
}
console.log(calculate('+', 2, 5, 11))


 