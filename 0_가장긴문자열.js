let solution = (s) =>{
    let answer = [];
    let num = s[0].length;
    for(let x of s){
        if(num < x.length){
            num = x.length;
            answer = [];//움 여기가 어려웟다.
            answer.push(x);
        } else if (num === x.length) {
            answer.push(x);
        }
    }
    return answer;
}
let str=["teacher", "time", "student", "utiful", "good"];
console.log(solution(str));