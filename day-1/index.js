// 1️⃣ Learn (20 minutes)

console.log("Hello, World!");
console.log("my name is gabriel");
console.log("I am learning JavaScript");

let name = "gabriel";

const firstName = "gabriel";
let age = 25;

console.log("first name:", firstName);
console.log("age:", age);

age = age + 1;
console.log("next year:", age);

// day 2

typeof firstName;
typeof age;

console.log(`Hello, my name is ${firstName}`);

//day 3

let balance = 10000;
let riskPercent = 1;

let riskAmount = balance * (riskPercent / 100);
console.log("risk amount:", riskAmount);

console.log(balance > 5000);
console.log(balance === 10000);

let isValidTrade = balance > 5000 && riskPercent <= 2;
console.log("is valid trade:", isValidTrade);

let accountBalance = 1200;

if (accountBalance > 1000) {
  console.log("You can trade today");
} else {
  console.log("No trades today");
}

let score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}
