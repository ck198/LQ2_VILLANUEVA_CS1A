// 1. Conditional Statement, Alert, and Prompt
let user_name = prompt("Enter your username:");
let user_password = prompt("Enter your password:");
let password = "1234"; // Example password

if (user_password === password) {
    console.log(`Welcome ${user_name}`);
} else {
    console.log("Maybe Username or Password is Invalid or Does not Match");
}
