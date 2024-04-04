let solution =(s) =>{
    let answer = "";
    let mid = Math.floor(s.length/2)//해설봄 여기

    if(s.length%2 == 0){
        //answer = s.substring(mid-1,mid+1);
        answer = s.substr(mid-1,2);
    }else{
        //answer = s.substring(mid,mid+1);
        answer = s.substr(mid ,1);
    }
    return answer;
}
//substr(인덱스,출력갯수)
//substring (출력갯수,인덱스)
//Math.floor(x);내림
//Math.ceil(x);올림
//Math.round(x)::숫자에서 가장 가까운 정수를 반환합니다.

console.log(solution("goodd"));
