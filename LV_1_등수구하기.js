
function solution(arr) {
  let answer = [];
  
  for(let i=0; i<arr.length; i++){
    let max = arr.length;
    for(let j =0; j<arr.length;j++){
      console.log("j :::: ",arr[j]);
       if(arr[i] > arr[j]){
          max--
        }
  }
  answer.push(max);

}
return answer;
}
function solution2(arr){  
  let n=arr.length;
  let answer=Array.from({length:n}, ()=>1);
  for(let i=0; i<n; i++){
      for(let j=0; j<n; j++){
          if(arr[j]>arr[i]) answer[i]++;
      }
  }             
  return answer;
}
let arr=[87, 89, 92, 100, 92];
console.log(solution(arr));