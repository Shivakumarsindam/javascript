//For a 


let arr = [2,3,5,5,6,8,9];

arr.forEach((arr) => {
   // console.log(arr);
});

let arr2 = [2,3,5,5,6,8,9];

let newArr = arr2.map((val) => { 
    return val*val;   //console.log(val*val);
});

//console.log(newArr);

let calcSquare = (arr2) => {
    console.log(arr2*arr2);
}

// arr2.forEach((arr2) => {
//     console.log(arr2*arr2);
// });

// arr2.forEach(calcSquare);

//Even array
        let arr3 = [2,3,5,5,6,8,9];

        let newArr3 = arr3.filter((val) => { 
            return val%2===0;   //console.log(val*val);
        });

        console.log(newArr3);   

//Odd array
        // let arr4 = [2,3,5,5,6,8,9]; 
        // let newArr4 = arr4.filter((val) => {
        //     return val%2!==0;   //console.log(val*val);
        // });

        // console.log(newArr4);


        let arr4 = [2,3,5,5,6,8,9]; 
        let newArr4 = arr4.filter((val) => {
            return val > 6;   //console.log(val*val);
        });

        console.log(newArr4);


//average of array using reduce

let shiva = [1,5,6,7];

const output = shiva.reduce((acc, val) => {

    return acc + val;

});

console.log(output);


//minimum of array using reduce
let sample = [1,5,141,6,7];

const output1 = sample.reduce((prev , corr)=>{
    return prev < corr ? prev : corr;
});

console.log(output1);

let marks =[50,60,70,80,45,8,55];

let toppers = marks.filter((val) => {
    return val > 45;
});
console.log(toppers);


// user defined array from 1 to n
let n =prompt("Enter your number: ");


let arrr = [];

for(let i=1; i<=n; i++){
    arrr[i-1]=i;
}

console.log(arrr);

let sum = arrr.reduce((res,curr) => {
    return res + curr;
});

console.log(sum);

let factorial = arrr.reduce((prev,curr) => {
    return prev * curr;
});

console.log(factorial);




    

