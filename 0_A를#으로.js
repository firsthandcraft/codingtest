function solution(n){
    let answer="";
    for(let x of n){
        if(x == "A"){
            answer += '#';
        }else{
            answer +=x
        }
    }
    return answer;
}

let str="BANANA";
console.log(solution(str));