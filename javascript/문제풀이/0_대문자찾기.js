function solution(s){
    let count = 0;
   for (let c of s){
    //console.log(c);
    console.log(c.toUpperCase(),c);
    if(c == c.toUpperCase() ){//함수뒤에 ()를 안넣으면 안된다.
        count++;
    } 
   }return count;
}
let solution2 = (s) =>{
    let answer = 0; 
    for(let x of s){
        let num = x.charCodeAt();
        if(x == x.toUpperCase()){
            console.log("charCodeAt:",num);
            answer ++;
        }
       
    }return answer;
}
let str="KoreaTimeGood";
console.log(solution2(str));


/** charCodeAt ** :: 아스키 넘버

 Expected output: "Character code 113 is equal to q"
 */
 const sentence = 'The quick brown fox jumps over the lazy dog.';
//문장의 띄어쓰기를 신경쓰지 않는다.
 const index = 4;
 
 console.log(
   `Character code :: ${sentence.charCodeAt(index)} is equal to :: ${sentence.charAt(
     4)}`,
 );