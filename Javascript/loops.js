    // for( let i = 1; i <= 3; i++ ) {
    //     console.log("Shiva kumar",i);
    // }

    // console.log("Loop ended");





//calculate sum of 1 to 5 
        // let sum = 0;
        // for( let i = 1; i <= 5; i++ ) {
        //     sum += i;  // sum = sum + i
        // }
        // console.log("The sum of 1 to 5 is:", sum);
        // console.log("Loop ended");


//calculate for number of times
        // let sum = 0;
        // let n = prompt("Enter a number:");//( or n = any number also we can give)
        // for( let i = 1; i <= n; i++ ) {
        //     sum += i;  // sum = sum + i
        // }
        // console.log("The sum is:", sum);
        // console.log("Loop ended");

// print 1 to 5

        // for( let i = 1; i <= 6; i++ ) {
        //     console.log("i =",i);
        // }

        // console.log("Loop ended");

// infonite loop
        // for( let i = 1; i = 5; i++ ) {
        //     console.log("i =",i);
        // }


//While loop
//     let i = 1;
//     while( i <= 5 ) {
//         console.log("i =",i);
//         i++;
//     }
//     console.log("Loop ended");  



// do while loop

// let i = 1;
// do {
//     console.log("shiva kumar",i);
//     i++;
// } while( i <= 5 );

// console.log("Loop ended");   

// print 1 to 5 using do while loop

// let i = 1;
// do {
//     console.log("i =",i);
//     i++;
// } while( i <= 5 );

// console.log("Loop ended");      

//for of loop
// let str = "shiva kumar";

// let size = 0;
// for( let i of str ) {// i will represent each character of the string
//     console.log("i =",i);
//     size++;
// }       

// console.log("Size of the string is:", size);

// for in loop
let student = {
        name: "shiva kumar",
        age: 24,
        cgpa : 9.1,
        isPass: true,
};

for( let key in student ) {// key will represent each key of the object
        console.log("key =",key, "value =",student[key]);
}