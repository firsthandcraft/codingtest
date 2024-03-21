function solution(brr){
    /*let answer=brr[0];
   for(let i=0; i<brr.length;i++ ){
        if( answer  > brr[i]) {
            answer = brr[i];
        }
   }*/
    let answer = Math.min.apply(null,brr);
    //let answer = Math.min(3,2,7,5,3,8);
    //Math.min(3,2,7,5,3,8);인자로만 넘어간다. 즉 배열은 안된다.  
    //전개연산자 :: Math.min(...arr); //arr[0] , arr[1]... 인자를 펼쳐준다.
   // Math.min.apply(null,arr) 로넘기면 된다.
    return answer;
}
let arr = [5, 3, 7, 1, 2, 15, 17]
console.log(solution(arr));
