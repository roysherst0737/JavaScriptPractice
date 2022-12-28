const date1 = new Date();
console.log(date1);

const date2 = new Date(-1000);
console.log(date2);

const date3 = new Date(1000 * 60 * 60 * 24 * 4 + 1000 * 60 * 60 * 3);
console.log(date3);

// 不好用
const date4 = new Date('1970-1-5 3:0:0');
console.log(date4.toString());
console.log(date4.toUTCString());
console.log(date4.toISOString());

// 較好用 (1999年9月21日凌晨1點47分15.9秒)
const date5 = new Date(1999, 8, 21, 1, 47, 15, 900);
console.log(date5);

// 若要印出921當時台灣的時間，除直接小時+8之外
const date = new Date(1999, 8, 21, 1, 47, 15, 900);
const options = {
    year: 'numeric',    // 年: 使用4位數
    month: '2-digit',   // 月: 使用2數位
    day: '2-digit',     // 日: 使用2數位
    hour12: false,      // 12小時制: 不使用
    hour: '2-digit',    // 時: 使用2數位
    minute: '2-digit',  // 分: 使用2數位
    second: '2-digit'   // 秒: 使用2數位
};
console.log(new Intl.DateTimeFormat('zh-TW', options).format(date));    // 1999/09/21 01:47:15


//取得1999年9月21日凌晨1點47分15.9秒算起，經過的毫秒數
console.log(new Date(1999, 8, 21, 1, 47, 15, 900).getTime());


