/**
 * 功能: 計算2個整數的四則運算，並依指定的進位模式回傳計算結果
 * @param {function} arithmetic 四則運算，可接受'+'、'-'、'*'、'/'
 * @param {number} radix 進位模式，可接受2、8、10(預設)、16
 * @param {number} a 運算元1
 * @param {number} b 運算元2
 * @returns {string} 算術運算的結果
 */

function calculate2(arithmetic, radix, a, b = 10) {
    if (checkArithmetic(arithmetic)) {
        return (eval(a + arithmetic + b)).toString(radix);
    } else {
        return ('輸入格式為arithmetic,a,b,bradix(10)\n輸入arithmetic錯誤，請輸入+-*/');

    }
}
function checkArithmetic(c) {
    if (c === '+') {
        return true;
    }
    if (c === '-') {
        return true;
    }
    if (c === '*') {
        return true;
    }
    if (c === '/') {
        return true;
    }
    return false;
}

console.log(calculate2("+",8,10,16));
