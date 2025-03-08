// 3. Price Inquiry using SWITCH
console.log("A. Pepsi Cola\nB. Coca Cola\nC. Apple (per kg)\nD. Orange (per kg)\nE. Hotdogs (per kg)");

let item_choice = prompt("Enter the letter of your choice:").toUpperCase();
let qty = parseInt(prompt("Enter quantity:"));
let price;

switch (item_choice) {
    case "A": price = 10; break;
    case "B": price = 12; break;
    case "C": price = 50; break;
    case "D": price = 40; break;
    case "E": price = 100; break;
    default:
        alert("No matching item! Try to re-run the program.");
        price = 0;
}

if (price > 0) {
    let tot_price = price * qty;
    alert(`The Total Price of the order ${item_choice} x ${qty}: $${tot_price}`);
}
