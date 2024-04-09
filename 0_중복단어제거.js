function solution(s){  
    let answer;
   
    answer=s.filter(function(v, i){
        //console.log(v,i);
        if(s.indexOf(s[i])=== i){
           // console.log(i);//014
            return true;
        }
      });
  
    return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));