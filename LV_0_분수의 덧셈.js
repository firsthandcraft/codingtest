/**첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요. */
function fnGCD(a, b){
  return (a%b)? fnGCD(b, a%b) : b;
}
function fnLCM(a, b) {
  // 최대공약수 구하기
  var gcd = fnGCD(a, b);
  // 최소공배수 구하기
  var lcm = (a * b) / gcd;
  return lcm;
}
function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  let denum = denum1*num2 + denum2*num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num); //최대공약수
  return [denum/gcd, num/gcd];
}

console.log(fnGCD(12,8));
console.log(fnGCD(6,4));
console.log(fnGCD(6,5));
console.log(fnGCD(4,8));