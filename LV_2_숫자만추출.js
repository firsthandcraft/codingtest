
function solution(s){
  let answer="";
    for(let x of str){
      if(!isNaN(x)){answer+=x;}
    }
    
    return parseInt(answer);
}

function solution2(s){
  let answer=0;//숫자일때
    for(let x of str){
      if(!isNaN(x)){answer = answer*10+Number(x)}
    }
    
    return answer;
}
let str="g0en2T0s8eSoft";
            console.log(solution2(str));
