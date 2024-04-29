
function solution(arr) {
  let answer = 0;
  let max = 0;
  for(let i=0; i<arr.length; i++){
    //console.log("arr::",arr[i])
    if(arr[i] === 1){ 
        max++;
        answer += max
      // console.log("arr::",arr[i],"i:::",i)
      // console.log("answer::",answer);
    } else{
      max =0;
    }
  }
  return answer;
}
let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));