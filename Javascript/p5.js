//average of array elements

        // marks = [85,97,44,37,76,60];

        // let sum =0;
        // for (let val of marks){
        //     sum += val;
        // }

        // let avg = sum / marks.length;
        // console.log(`Average marks:  ${avg}`);
        // console.log(sum);

        
let items = [250,645,300,900,50];

let i = 0;
for(let val of items){
    console.log(`value of index ${i} is ${val}`);
    let offer = val/10;
    items[i] = items[i] - offer;
    console.log(`after discount price is ${items[i]}`);
    i++;
}

