// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한들 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class employee {
  constructor(name, timeType, monthTime) {
  this.name;
  this.timeType;
  this.monthTime;
  }
  

  
  fullTime= (fTime) => {
    fullMonthTime = fTime * 10000
    
  }

  partTime = (pTime) => {
    partMonthTime = pTime * 8000
  }
}

class FullTimeEmployee extends employee {
  name = James;
  timeType = fullTime(60);
  
  
}

class PartTimeEmployee extends employee {
  name = Jin;
  timeType = partTime(40);
  
}

const fullTime = fullPay();
const partTime = partPay();