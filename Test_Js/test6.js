//選項物件範例

const obj = {
    username: 'roysherst',
    password: 'P@ssw0rd',
    // nickname: 'Roy',
    email:'roysherst@gmail.com',
    age: 28
};

register(obj);

function register(member) {
    console.log('會員名稱：' + member.username);
    console.log('會員密碼：' + member.password);
    console.log('會員暱稱：' + member.nickname || '親愛的客人' +'您好');
    console.log('會員信箱：' + member.email);
    console.log('會員年齡：' + member.age);
}

//傳值呼叫(Java&Js「只有傳值呼叫」(大多數人這樣認為)，但也可當作「傳參考呼叫的結果」)

let arr = [9];
f1(arr);
console.log(arr);

function f1(a) {
    a[0]++;
}

arr.sort();
