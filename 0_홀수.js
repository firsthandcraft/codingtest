function solution(n){
    /* let answer=0,j =0;
    for(let i =0;i<n.length;i++){
        if(n[i]%2 != 0 ){
            j = n[i];
            if(answer==0)answer = j;
            if(j < answer) answer = j;
        }
    }*/

   let answer = [];
   let sum =0, min=Number.MAX_SAFE_INTEGER;
   for(let i of n){ // 배열안에 반복문돌린땐 of 
        if(i % 2 === 1){ //===는 변수타입까지 비교
            sum += i;
            if(i<min) min = i;
        }
   }
   answer.push(sum);
   answer.push(min);
   
    // answer=Math.min(...n)
   
    return answer;
}
let arr =[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));