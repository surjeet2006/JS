
// select the next duplicate occurrence of your current selection: ==> Ctrl + D  (Press it repeatedly to select the next matching occurrence.)

// Select all duplicates ==> Ctrl + Shift + L

// for (let i = 0; i <= 10; i++) {   
//     const element = i;
//     console.log(element)
// }

// Table from 1 to 10
// for (let i = 1; i <= 10; i++) {
//     console.log("Table for : ",i);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);      
//     }  
// }


// break and continue
// for (let index = 0; index < 10; index++) {
    //     if(index==5) break;
    //     console.log(index)
    
// }

for (let index = 0; index < 10; index++) {
    if(index % 2 == 0) continue;
    console.log(index)
    
}

