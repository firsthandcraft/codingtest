function solution(a){
    let answer=0;
    for(let i = 1 ; i <= a; i++){
        answer+=i;
    }
    return answer;
}
console.log(solution(6));
