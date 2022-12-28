/**
 * 計算形狀的面積
 * @param {number} type 形狀種類，0:圓形、1:矩形
 * @param {Object} data data: 選項物件，形狀的數值 
 *                      圓形時: 包含屬性radius(半徑)
 *                      矩形時: 包含屬性長(length)、寬(width)
 * @return {number} 面積
 */
function calShapeArea(type, data) {
    switch (type) {
        case 0:
            return Math.PI * data.radius * data.radius;
        case 1:
            return data.length * data.width;
    }
}

const data1 = { radius: 10};
console.log(calShapeArea(0, data1));

const data2 = { length: 3, width: 4};
console.log(calShapeArea(1, data2));