let solution =(s) =>{
    let arr =s.toUpperCase();
    return arr;
}
let solution3 = (s) =>{//소문자 인것을 대문자로
    let answer = "";
    for (let x of s){
        
       if(x === x.toLowerCase()){
        answer+= x.toUpperCase();
       }else{
        answer+=x;
       }return answer;
    }
}
function solution4(s){//아스키코드로
    let answer="";
    for(let x of s){
        let num=x.charCodeAt();
        let alphabet =x.charAt();
        
        if(num>=97 && num<=122) answer+=String.fromCharCode(num-32);//fromCharCode :: 아스키 코드 번호 => 문자
        //소문자a 97 대문자A 65
        //97-65 =32
        else answer+=x;
    }

    return answer;

}

let str="ItisTimeToStudy";
console.log(solution4(str));

/**upperCase
 *  method of String values returns this string converted to uppercase.
 */