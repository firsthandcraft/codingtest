/*문자열 곱하기
문제 설명
문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

제한사항
1 ≤ my_string의 길이 ≤ 100
my_string은 영소문자로만 이루어져 있습니다.
1 ≤ k ≤ 100
입출력 예
my_string	k	result
"string"	3	"stringstringstring"
"love"	10	"lovelovelovelovelovelovelovelovelovelove"
입출력 예 설명
입출력 예 #1

예제 1번의 my_string은 "string"이고 이를 3번 반복한 문자열은 "stringstringstring"이므로 이를 return 합니다.
입출력 예 #2
repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.
예제 2번의 my_string은 "love"이고 이를 10번 반복한 문자열은 "lovelovelovelovelovelovelovelovelovelove"이므로 이를 return 합니다.

*/
function solution(my_string, k) {
    return my_string.repeat(k);
}
const solutionarrow =(my_string, k) =>{
    return my_string.repeat(k);
}

function solution2(my_string, k){
    let answer = '';
    for(let i =0; i<k; i++){
        answer += my_string;
    }
    return answer;
}

function solution3(my_string, k){
    let answer = '';
    let i =0;
    while(i < k){
        answer += my_string;
        i++;
    }
    return answer; 
}

//테스트코드
console.log(solution("www",3))
console.log(solution2("www",3))
console.log(solution3("www",3))
console.log(solutionarrow("www",3))
//repeat 
/**사용법
 * str.repeat(count)
 * count
문자열을 반복할 횟수. 0과 양의 무한대  정수([0, +∞))사이의

    **js
    "abc".repeat(-1); // RangeError
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
"abc".repeat(1 / 0); // RangeError
 * 
 */
