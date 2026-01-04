//strings
        // let str = "shivakumar";
        // let str2 = 'kumar';
        
        // // console.log("str length =", str.length);
        // // console.log("char at index 4 =", str.charAt(4));
        // // console.log("index of 'k' =", str.indexOf('k'));
        // // console.log("index of 'a' =", str.indexOf('a'));
        // // console.log("last index of 'a' =", str.lastIndexOf('a'));
        // console.log(str[2]);

//template literals

// let sentence = `My name is shivakumar.`;//prints the string 
// console.log( typeof sentence);

// let obj = {
//     item :"pen",
//     price : 10,
// };
// let out = `the cost of ${obj.item} is ${obj.price}`;
// console.log(out);

// console.log("the cost of ", obj.item  ,"is ", obj.price );


// string to uppercase and lowercase

            // let str = "Hello World!";
            // let upperStr = str.toUpperCase();
            // let lowerStr = str.toLowerCase();
            // console.log("Uppercase:", upperStr);
            // console.log("Lowercase:", lowerStr);

//trim()
// let str = "     Shiva kumar js practice ";
// console.log(str.trim());


//slice()is used to extract a section of a string and return it as a new string, without modifying the original string.

// let str1 = "0123456789";
// console.log(str1.slice(2,7));

// let str = "Hello World!";
// console.log(str.slice(0,4));    




//concat()//joins two strings


// let str = "Hello World!";  
// let str2 = "JavaScript is fun.";

// let res = str.concat(str2);
// console.log(res);


//str.replace()//replaces a specified value with another value in a string

        // let str = "Hello World! World is beautiful.";
        // let newStr = str.replace("World", "Universe");// replaces only first occurrence
        // console.log(newStr);


        // let str2 = "Hello World! World is beautiful.";
        // let newStr2 = str.replaceAll("World", "Universe");//replace all occurrences
        // console.log(newStr2);



// str.charAt()//returns the character at a specified index in a string
        // let str = "I love JavaScript. JavaScript is fun.";
        // console.log(str.charAt(5));





//str.replace() is used to replace a specified value with another value in a string. However, strings are immutable in JavaScript, meaning you cannot change a character at a specific index directly.
        // let str = "Hello, World!";
        // str = str.replace("H","f"); // Attempting to change the first character
        // console.log(str); // Output: "Hello, World!" (unchanged)