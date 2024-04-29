
function solution1(s){
  let answer=[];
  let p= 1;
  let m= '';
    for(let x of s){
      if(x==m){
        p++;
        answer.push(p);
        
      }else{
        p=1;
        m=x;
        answer.push(x);
      }
    }
    
    return answer;
}

function solution(s){
  let answer="";
  let cnt=1;
  s=s+" ";
  
  for(let i=0; i<s.length-1; i++){
      if(s[i]===s[i+1]) cnt++;
      else{
          answer+=s[i];
          if(cnt>1) answer+=String(cnt);
          cnt=1;
      }
  }
  return answer;
}
let str="KKHSSSSSSSE";
console.log(solution(str));