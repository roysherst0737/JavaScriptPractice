/**
 * 功能: 計算平面座標上，2點的距離，並回傳
 * @param {number} p1 點1，物件型態，含有2的屬性x、y，表示水平位移量、垂直位移量
 * @param {number} p2 點2，同上
 * @returns 回傳: 2點的距離
 */

function distance(p1, p2) {
    return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y))
}
const p1 = { x: -5, y: 1 };
const p2 = { x: 0, y: 0 };

console.log(distance(p1, p2));