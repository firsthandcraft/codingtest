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

//고차함수> 자신의 매개변수에 함수를 전달받는것 
let a = [10,11,12,13,14,15];
//1. forEach
a.forEach((t,i)=>console.log(t,i));
console.log("------------------")
a.forEach(function(v,i){
    console.log(v,i,this);
},[1,2])
//2.map
//새로운배열을 생성한다. 
console.log("------------------")
let answerMap = a.map(function(v,i){
    return v;
},[1,1])
console.log(answerMap);
