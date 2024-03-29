function solution(arr){
    let answer=arr;
    for(let x of arr){
        const xIndex=answer.indexOf("red");
        for(let j of arr){
            const jIndex=answer.indexOf("red");
            if(x+j == 40 && j!=x){
               
                answer.splice(xIndex,1);
                answer.splice(jIndex,1);
            }
        }
    }
    return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));