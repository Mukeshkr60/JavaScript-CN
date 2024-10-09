// ! For loop

for (let i = 1; i < 15; i++) {
  console.log(i);
}

//!  while Loop
// when we do not know number of iteration the use while loop

let num = 12345;

while (num !== 0) {
  let digit = num % 10;
  num = parseInt(num / 10);
  console.log(digit);
}

//! Do while loop

// do {} while (condition);

let n;
do {
  n = 40;
  // n = prompt("enter a num")
} while (n <= 50);
console.log(n);
