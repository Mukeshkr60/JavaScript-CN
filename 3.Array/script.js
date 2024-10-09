//!  ARRAY in JS

const students = ["Alexa", "Bikash", "Gama", "Delta", "Xyz"];
console.log(students);

// get element of array
console.log(students[2]);

// Length of Array
console.log(students.length);

//Another way of create Array
const car = new Array("volvo", "BMW", "WW");
console.log(car);

//other way
const something = ["Apple", 10, true, "aaa10"];
console.log(something);

//*********************************************************** */

//! Methods of Array

const city = ["Delhi", "Mumbai", "Noida", "chennai", "Kolkatta"];

city[2] = "Noida sec-15";
console.log(city);

const teams = ["CSK", "RCB", "MI", "LSG"];
console.log(teams);

//! 1 .  Add Element in Array

// push
teams.push("GT");
console.log(teams);

// unshit
teams.unshift("KKR");
console.log(teams);

//!  2. Remove in element

// pop
teams.pop();
console.log(teams);

// shift
teams.shift();
console.log(teams);

//! 3. check element is present or not

// indexof()

const RCBIndex = teams.indexOf("RCB");
console.log(RCBIndex);

const GTIndex = teams.indexOf("GT");
console.log(GTIndex);

// includes()

const RCBInd = teams.includes("RCB");
console.log(RCBInd);

const GTInd = teams.indexOf("GT");
console.log(GTInd);

//! slice && splice  && concat

// slice()
const team = ["CSK", "RCB", "MI", "LSG", "KKR"];
console.log(team);

console.log(team.slice(1));

// splice
team.splice(2, 1, "xyz");
console.log(team);

// concat()

const t1 = ["abc", "def", "ghi", "jkl"];
const t2 = ["xyz", "gfd", "fghs", "gdh"];

const mergedT = t1.concat(t2);
console.log(mergedT);

//****************************************************** */

//! loop over Array

const StudentName = ["Tina", "Raj", "Boby", "Alex", "sita"];

for (let i = 0; i < StudentName.length; i++) {
  console.log(`Roll no ${i + 1}: ${StudentName[i]}`);
}

// for .. in loop
const num = ["abc", "ABC", "def", "DEF", "ghi", "xyz"];
for (let i in num) {
  console.log(`no ${Number(i) + 1}: ${num[i]}`);
}

// for  .. of loop
for (let num1 of num) {
  console.log(num1);
}

//************************************************** */

//! Break vs Continue

//Continue

const input = [10, 17, 20, 41, 30, 40, 57, 50, 97, 60, 70, 91, 80, 90];

for (let i of input) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

// Break

const n = [12, 53, 51, 17, 19, 30, 31, 50, 60, 70, 80, 100, 57, 97, 41];

const even = [];

for (let i of n) {
  if (i % 2 !== 0) {
    continue;
  }
  even.push(i);

  if (even.length === 5) {
    break;
  }
  console.log(even);
}
console.log(even);

//*********************************************************** */

//! Reset   vs  spread operator
