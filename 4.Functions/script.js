//!  Function in JS

function greetUser() {
  console.log("Hello !");
}

greetUser();
greetUser();

//  Using Parameter

function greetuser(username) {
  console.log("hello " + username + "wlme to session");
}
greetuser("Mukesh");
greetuser("Alexa");

// Default Parameter

function sum(num1 = 0, num2 = 0) {
  console.log(`Sum = ${num1 + num2} `);
}
sum(4, 5);
sum(10);

// Rerun value of a function

function squared(num) {
  return num * num;
}
const value1 = squared(5);
console.log(value1);
const value2 = squared(10);
console.log(value2);
