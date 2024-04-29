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
let solution2 = (s) =>{
    let answer , max =Number.MIN_SAFE_INTEGER;
    // int는 자료형. 산술 연산 가능; null로 초기화 불가능; 
    for (let x of s){
        if(x.length > max){
            max =x.length;
            answer = x;
        }
    } return answer

}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution2(str));