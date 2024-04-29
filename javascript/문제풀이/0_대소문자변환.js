let solution = (s) =>{
    let answer = "";
    
    for(let x of s){
        if(x == x.toUpperCase()){
            answer += x.toLowerCase();
        } else{
            answer += x.toUpperCase();
        }
    } return answer
}
let solution2 = (s) =>{
    //아스키로 변환하기
    let answer = "";
    for(let x of s){
        let code =x.charCodeAt();
        let alphabet = String.fromCharCode(code);
        if(code >= 65 && code <= 90){
            answer += x.toLowerCase();
        }else{
            answer+=x.toUpperCase();
        }
    }
    return answer;
}
let str="StuDY";
console.log(solution2(str));
let z= "A";
console.log(z.charCodeAt())