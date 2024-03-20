function solution(a, b, c){
  let answer;
  function compareAB(m,n){
    // console.log(m+'>'+n);
    m>n ? answer=n:answer=m;
  // console.log(answer+"::");
 
  }
  compareAB(a,b);
  compareAB(a,c);
  compareAB(b,c);

  /*if(b>c){
    answer= c
  } else{answer=b} 
  if(a<c){
    answer= a
  }else{answer=c}*/
  /*if(a<b) answer=a;
  else answer=b;
  if(c<answer) answer=c; */
  return answer;
}
// console.log("start::");
console.log(solution(3, 2, 4));