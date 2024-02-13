//Math 메서드에 대해 

Math.abs() // 절대값을 반환
console.log(Math.abs(-91));
console.log(Math.abs(-91));
function difference(a, b) {
  return Math.abs(a - b);
}
console.log(difference(3, 5));
// Expected output: 2
console.log(difference(5, 3));
// Expected output: 2

Math.ceil()
//Math.ceil() 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환합니다.
console.log(Math.ceil(0.88));

Math.floor()
//Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.

Math.max()
//The Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
console.log(Math.max(1, 3, 2));
// Expected output: 3
console.log(Math.max(-1, -3, -2));
// Expected output: -1
const array1 = [1, 3, 2];
console.log(Math.max(...array1));
// Expected output: 3

Math.min()
//The Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.

Math.round()
//메서드는 가장 가까운 정수로 반올림된 숫자 값을 반환합니다.
console.log(Math.round(0.9));
// Expected output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// Expected output: 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// Expected output: -5 -5 -6

Math.trunc()
//메서드는 소수 자릿수를 제거하여 숫자의 정수 부분을 반환합니다.
console.log(Math.trunc(13.37));
// Expected output: 13

console.log(Math.trunc(42.84));
// Expected output: 42

console.log(Math.trunc(0.123));
// Expected output: 0

console.log(Math.trunc(-0.123));
// Expected output: -0
