
function solution(a, b, c){
    //let answer;
    /*a > b ?
    a > b + c ?
        answer= "YES a"
        : c > a ?
            c > a + b?
                answer= "YES c"
                : answer= "NO c"
            :answer= "NO a"
    : b > c ?
        b > a + c?
            answer= "YES b"
            :answer= "NO b"
        : c > a + b?
            answer= "YES  c"
            : answer= "NO c"*/
    
    let answer="YES", max;
    let sum = a+b+c;
    if(a>b) max=a;
    else max=b;
    if(c>max) max=c;
    
    if(max>=(sum-max)) answer = "NO";
   
    return answer;
}

console.log(solution(6, 7, 11));
