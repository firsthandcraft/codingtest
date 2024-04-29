function solution(n){
    let answer;

    answer = Math.ceil(n/12);
    //Math.floor(x);내림
    //Math.ceil(x);올림
    //Math.round(x)::숫자에서 가장 가까운 정수를 반환합니다.
    return answer;
}

console.log(solution(25));