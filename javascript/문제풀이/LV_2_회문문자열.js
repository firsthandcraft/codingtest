
function solution(s){
  let answer="YES";
  s=s.toLowerCase();
  let mid=Math.floor(s.length/2);
    for(let i=0; i<Math.floor(s.length/2); i++){
      if(s[i]!=s[s.length-i-1]) return "NO";
    }
    return answer;
  
}

let str="goooG";
let str1="gooG";
console.log(solution(str));
console.log(solution(str1));

