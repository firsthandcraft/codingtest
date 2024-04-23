
function solution(s){
  let answer="";
  s=s.toLowerCase().replace(/[^a-z]/g,'');
    for(let x of str){
      if(!isNaN(x)){answer+=x;}
    }
    
    return parseInt(answer);
}
let str="g0en2T0s8eSoft";
            console.log(solution(str));
