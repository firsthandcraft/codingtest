function solution(brr){
    let answer=brr[0];
   for(let i=0; i<brr.length;i++ ){
        if( answer  > brr[i]) {
            answer = brr[i];
        }
   }
    return answer;
}
let arr = [5, 3, 7, 1, 2, 15, 17]
console.log(solution(arr));
