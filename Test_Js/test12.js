const a = 'a';
const b = "b";
const c = `c`;
console.log('a\nb');
console.log(`a
b`);


const user = {
    id: 1,
    username: 'roysherst',
    password: 'P@ssw0rd',
    nickname: 'Roy'
};
const str = `
<tr>
    <td>${user.id}</td>
    <td>${user.username}</td>
    <td>${user.password}</td>
    <td>${user.nickname}</td>
</tr>`;
console.log(str);


const url = 'http://127.0.0.1:5500/test.html';
console.log(url.startsWith('http'));
console.log(url.endsWith('.htmla'));
for (let index = 0; index < url.length; index++) {
    console.log(url.charAt(index));
}

const name = 'William';
console.log(name.substring(1, 5)); // 從索引值1開始取，從第五個開始不取

// 拆出兩個子字串
const email = 'William123@gmail.com';

const indexOfAt = email.indexOf('@');
const username = email.substring(0, indexOfAt);
const host = email.substring(indexOfAt + 1);

console.log("username ： " + username);
console.log("host ： " + host);

// 將一連串字串做成表格
const str1 = '1, Roy, 28';
const arr = str1.split(',', 3);
console.table(arr);
