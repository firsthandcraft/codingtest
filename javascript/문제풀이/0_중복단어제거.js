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
//console.log(solution(str));
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
console.log(getRandomInt(3,5) );