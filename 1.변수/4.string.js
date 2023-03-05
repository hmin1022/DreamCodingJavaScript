// 문자열타입
let string = '안녕하세요';
string = `안녕`;
console.log(string);
string = "'안녕'";
console.log(string);

string = '안녕!\n엘리야\t\t내 이름은\\';
console.log(string);

// 탬플릿 리터럴 (Tempelate Literal)
let id = '현민';
let greetings = "'안녕!, " + id + "👍\n멋진 하루 보내요!'";
console.log(greetings);

greetings = `'안녕, ${id}👍
  멋진
    하루

      보내요!'`;
console.log(greetings);
