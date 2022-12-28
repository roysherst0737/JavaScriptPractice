// 2.請用程式算出93784秒，是幾天又幾小時又幾分又幾秒
let a = 93784;
    day = a/(60*60*24);
    hour = a%(60*60*24)/(60*60);
    min = a%(60*60*24)%(60*60)/60;
    sec = a%(60*60*24)%(60*60)%60;

console.log("93784秒是" + Number.parseInt(day) + "天" + Number.parseInt(hour) + "小時" + Number.parseInt(min) + "分" + Number.parseInt(sec) + "秒");