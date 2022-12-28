/**
 * 功能: 產生指定範圍的亂數，並回傳
 * @param {number} starNum 亂數範圍下限
 * @param {number} endNum 亂數範圍上限
 * @returns 回傳: 產生的亂數
 * */
 function getRandom(starNum, endNum) {
    return Math.random() * (endNum - starNum) + starNum;
}

console.log(getRandom(1, 10));