// function countVowels(str){
//     const vowels = 'aeiouAEIOU';
//     let count = 0;      
//     for(let char of str){
//         if(vowels.includes(char)){
//             count++;
//         }   
//     }
//     return count;
// }

function countVowels(str){
    let count = 0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u" ){
            count++;
        }
    }
    return (count);        //or    console.log(count);
}


const countVow = (str)=> {
    let count = 0;
    for(const char of str) {
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u" ){
            count++;
        }
    }


    
    return count;        //or    console.log(count);


}

//for each loop

let arr = ['apple', 'banana', 'grape'];
arr.forEach(function(fruit){
    console.log(fruit);
});

let arr2 = ['apple', 'banana', 'grape'];
arr2.forEach((fruit,idx,arr2) => {
    console.log(fruit.toUpperCase(),idx,arr2);
});

