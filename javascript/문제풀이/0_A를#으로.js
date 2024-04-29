function solution(n){
    let answer="";
    for(let x of n){
        if(x == "A"){
            answer += '#';
        }else{
            answer +=x
        }
    }
    return answer;
}
function solution2(s){
    let answer = s;//주소 참조라서 가능
    //정규식
    //s =s.replace(/A/g,"#");//전역으로 찾으라는 말 g가 없으면 하나만 된다ㅣ.
    ////s =s는 주소가 복사되는거지 값이 복사되는게 아니라서 
    answer=s.replace(/A/g,"#");
    //console.log(s)
    return answer;
}

let str="BANANA";
console.log(solution2(str));