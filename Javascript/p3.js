//practice for loops

        // for(let num = 0; num <= 10; num++ ) {
        //     console.log("num =", num);
        // }
//print even number

        // for(let num = 0; num <= 100; num ++ ) {
        //      if ( num % 2 == 0 ) {
        //         console.log("Even num =", num);
        //      } else {
        //         console.log("Odd num =", num);
        //      }
        
        // }   

// game 

let gameNum = 25;

let userNum = prompt("Guess the game number :");
while( userNum != gameNum ) {//GAME
    console.log("Try again!");
    userNum = prompt(" You enter the wrong number,Guess the game number :");
}
console.log("Congratulations! You guessed the number.");