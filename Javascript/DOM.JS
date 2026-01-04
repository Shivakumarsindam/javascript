// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from shivakumar";

// console.log(h2.innerText);

let divs = document.querySelectorAll(".box");

console.log(divs[0]);
console.log(divs[1]);
console.log(divs[2]);


// divs[0].innerText = "This is box 1";


//using loops
let idx = 1;

for(div of divs){
    // console.log(div)
    div.innerText = `This is a box1 ${idx}  `;
    idx++;
}