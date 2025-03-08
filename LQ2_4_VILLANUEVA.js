// 4. Matrix Printer
let createMatrix = ("Do you want to create a matrix?");

if (createMatrix) {
    let limit1 = parseInt(prompt("Enter first limit:"));
    let limit2 = parseInt(prompt("Enter second limit:"));
    let limit3 = parseInt(prompt("Enter third limit:"));
    
    let word = prompt("Enter a word:");
    let number = prompt("Enter a number:");
    let symbol = prompt("Enter a symbol:");
    
    for (let i = 0; i < limit1; i++) {
        for (let j = 0; j < limit2; j++) {
            for (let k = 0; k < limit3; k++) {
                console.log(`${word} ${number} ${symbol}`);
            }
        }
    }
} else {
    console.log("Thank you, re-run the program if you change your mind.");
}
