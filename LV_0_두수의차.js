/**정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요. */
/*function solution(num1, num2) {
  // const answer = (num1,num2)=>num1-num2;
    return num1-num2;
   
}*/
const solution = (num1,num2) => num1-num2

console.log(solution(4,5));


function solution2(num1, num2) {
    var answer = 0;
    -50000 <= num1 <= 50000;
    -50000 <= num2 <= 50000;

    answer = num1 - num2;

    return answer;
}
console.log(solution2(2,3));
console.log(solution2(100,2));