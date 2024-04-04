
let sum = (a, b) => a + b;
/* 위 화살표 함수는 아래 함수의 축약 버전
let sum = function(a, b) {
  return a + b;
};
*/
console.log(sum(2,3)); //5

const arrowError = {
  name: 'meow',
  foo1: function() {
    const foo2 = function() {
      console.log(this.name);
      //함수가 호출됐으므로 foo2 내부의 this는 지정되지 않아서 곧 전역 객체를 가리킴
    }
    foo2();
  }
};
//cat.foo1() 메소드 호출 시 내부 함수 foo2가 실행됨
//전역 객체에 name이란 속성은 존재하지 않으므로 undefined가 뜸
arrowError.foo1();// undefined

const arrowError2 = {
  name: 'meow2',
  callName: () => console.log(this.name)//this arrowError2 보다 상위 스코프
}
// arrowError2에서 callName 메소드의 this는 자신을 호출한 객체 arrowError2가 아니라 함수 선언 시점의 상위 스코프인 전역객체를 가리키게 됩니다. 

arrowError2.callName();	// undefined


//----------------
const arrow = {
  name: 'meow',
  foo1: function() {//this존재
    const foo2 = () => {
      console.log(this.name);//this가 아예 없기 때문
      //현재 환경에서 그 변수가 없으면 바로 상위 환경을 검색
      //화살표 함수에는 this라는 변수 자체가 존재하지 않기 때문에 그 상위 환경에서의 this를 참조하게 됩니다.
    }
    foo2();
  }
};

arrow.foo1();	// meow

//-----------------
//addEventListener()의 콜백함수
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  console.log(this);	// Window
  this.innerHTML = 'clicked';
});

button.addEventListener('click', function() {
   console.log(this);	// button 엘리먼트
   this.innerHTML = 'clicked';
});