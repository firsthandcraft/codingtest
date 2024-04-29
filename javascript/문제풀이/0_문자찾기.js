function solution(s,r){
    let count = 0;
   for (let c of s){
    console.log(c);
    if(c == r){
        count++;
    } 
    
    
   }return count;
}
function solution2(s,r){
    let arr =s.split(r);
    //split : 문자열을 배열로 
    console.log(arr)
    let count =s.split(r).length;
    //split : 문자열을 배열로
    //나눠지는 건 4개니 -1 
    //맨뒤에 R 이있어도 split는 빈문자열이 들어간다.
    return count-1;


}
let str="COMPUTERPROGRAMMINGR";
console.log(solution2(str, 'R'));