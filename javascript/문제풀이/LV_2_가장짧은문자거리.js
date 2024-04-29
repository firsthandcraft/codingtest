
function solution(s,f){
  let answer=[];
  let p= 1000;
    for(let x of s){
      if(x == f){
        p=0;
        answer.push(p);
      } else{
        p++;
        answer.push(p);
      }
    }
    for(let i=s.length-1; i>=0;i--){
      if(s[i] == f){
        p=0;
        // answer[i]=0;
      } else{
        p++;
        answer[i] = Math.min(answer[i],p)
      }
    }
    return answer;
}
let str="teachermode";
console.log(solution(str, 'e'));