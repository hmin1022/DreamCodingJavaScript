// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('🍎'));

// 배열안에 특정 아이템이 있는지
console.log(fruits.includes('🍎'));

// 추가 - 제일 뒤
let length = fruits.push('🥩');
console.log(fruits);
console.log(length);

// 추가 - 제일 앞
length = fruits.unshift('🍖');
console.log(fruits);
console.log(length);

// 제거 = 제일 뒤
length = fruits.pop(); // 배열 자체를 수정 (업데이트)
console.log(fruits);
console.log(length);
// 제거 = 제일 앞
length = fruits.shift(); // 배열 자체를 수정 (업데이트)
console.log(fruits);
console.log(length);

// 중간에 추가 또는 삭제
fruits.splice(1, 1);
console.log(fruits);

// 잘라신 새로운 배열을 만듬
let newArr = fruits.slice(0, 2);
