/**
 * 功能: 只需將所有參數的內容印出即可
 * @param {*} url 欲發出請求的目標網址
 * @param {*} option 選項物件，用以描述請求的細節設定，包含以下屬性
 *                   ● method: 請求方法，可接受’GET’(預設)、‘POST’
 *                   ● contentType: 請求內容的MIME類型，可接受’application/x-www-form-urlencoded’(預設)、‘application/json’
 * @param {*} body 請求本體，請求傳輸的資料
 */

 let url = 'www.google.com';
 let option = {
     method: 'POST',
     contentType: 'application/x-www-form-urlencoded'
 };
 let body = 'HelloWorld';

function request(url, option, body) {

    console.log('url= ' + url);
    if (option.method !== 'GET' && option.method !== 'POST') {
        option.method = 'GET';
        console.log('method= ' + option.method);
    } else {
        console.log('method= ' + option.method);
    }
    if (option.contentType !== 'application/json' && option.contentType !== 'application / x - www - form - urlencoded') {
        option.contentType = 'application / x - www - form - urlencoded';
        console.log('contentType= ' + option.contentType);
    } else {
        console.log('contentType= ' + option.contentType);
    }
    console.log('body= ' + body);
}

request(url, option, body);