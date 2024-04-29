
function solution(arr) {
  var answer = 0;
  for(let i=0; i<arr.length; i++){
    if(arr[i] <arr[i+1]){
      answer++;
    }
  }
  return answer;
}
function solution1(arr){         
  let answer=1, max=arr[0];
  for(let i=1; i<arr.length; i++){
      if(arr[i]>max){
          answer++;
          max=arr[i];
      }
  }
  return answer;
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));