// 1. შექმენით რიცხვების მასივი და თითოეული რიცხვისთვის foreach ციკლით დაბეჭდეთ მათი კვადრატი.

// const kvadrati = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// kvadrati.forEach((number) => {
//   console.log(number * number);
// });

// 2. შექმენით ხილის სახელების მასივი და foreach ციკლით დაბეჭდეთ თითოეული ხილის სახელი.

// const fruits = ["apple", "banana", "pear"];

// fruits.forEach((fruits) => {
//   console.log(fruits);
// });

// 3. მასივში არსებული რიცხვების ჯამი გამოიანგარიშეთ foreach ციკლით.

// const numbers = [5,5,5,5];
// let answer = 0;

// numbers.forEach((number) => {
//   console.log((answer += number));
// });

// 4. შექმენით მასივი სტუდენტების სახელებით და foreach ციკლით დაბეჭდეთ, რომელი სტუდენტი რომელ ადგილზეა.

// const names = ["vaxo", "nika", "giorgi"];

// names.forEach((index, names) => {
//   console.log(names + index);
// });
// dashoreba ver gavakete

// 5. შექმენით მასივი და მასში ჩაწერეთ მთელი რიცხვები. foreach ციკლით მხოლოდ ლუწი რიცხვები დაბეჭდეთ.

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// (1-ze rato wers undefined)
// numbers.forEach((number) => {
//   if (numbers[number] % 2 === 0) {
//     console.log(`${numbers[number]} is a even number`);
//   } else {
//     console.log(`${numbers[number]} is a odd number`);
//   }
// });

// 6. შექმენით რიცხვების მასივი და map მეთოდის საშუალებით მიიღეთ მათი კვადრატების ახალი მასივი.

// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// const kvadrati = numbers.map((number) => {
//   console.log(number * number);
// });

// 7. მასივში ჩაწერეთ სახელები და map მეთოდის გამოყენებით ყოველი სახელი ყველა ასოს პატარა ასოზე გადააკეთეთ.

// let names = ["GIORGI", "NIKA", "LUKA"];

// names.map((names) => {
//   console.log(names.toLowerCase());
// });

// 8. შექმენით რიცხვების მასივი და map მეთოდით მიიღეთ მასივი, სადაც ყველა რიცხვი 10-ზე გაიზარდა.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1-ze kide undefined dawera :(
// numbers.map((number) => {
//   console.log(numbers[number]+10);
// });

// 9. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტში არის სტუდენტის სახელი და ქულა. map მეთოდით მიიღეთ ახალი მასივი მხოლოდ სტუდენტების სახელებით.

// const students = [
//   { name: "nika", score: 1 },
//   { name: "giorgi", score: 2 },
//   { name: "luka", score: 3 },
// ];
// const namesonly = students.map((name) => {
//   return students.name;
// });
// console.log(namesonly);

// 10. შექმენით რიცხვების მასივი და map მეთოდით მიიღეთ მასივი, რომელშიც ყველა ლუწი რიცხვი გაორმაგებულია, ხოლო კენტი არ შეცვლილა.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.map((number) => {
//   if (number % 2 === 0) {
//     console.log(number * 2);
//   }
// });

// 11. შექმენით რიცხვების მასივი და filter მეთოდით მიიღეთ მხოლოდ ლუწი რიცხვების მასივი.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenNumbers = numbers.filter((number) => {
//   return number % 2 === 0;
// });

// console.log(evenNumbers)

// 12. შექმენით სახელების მასივი და filter მეთოდით მხოლოდ ის სახელები ამოიღეთ, რომლებიც 5-ზე მეტ სიმბოლოს შეიცავს.

// let names = ["nika", "vaxoooo", "giorgi"];

// let fiveLetterNames = names.filter((name) => {
//   if (name.length > 5) {
//     console.log(name);
//   }
// });

// 13. შექმენით რიცხვების მასივი და filter მეთოდით მხოლოდ დადებითი რიცხვები მიიღეთ.

// let numbers = [-1, -2, -3, 1, 2, 3, 4, 5, 6, 1337];

// let positiveNumbers = numbers.filter((number) => {
//   if (number > 0) {
//     console.log(number);
//   }
// });

// 14. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტში არის პროდუქტების სახელები და ფასები. filter მეთოდით მიიღეთ მხოლოდ ის პროდუქტები, რომელთა ფასი 100-ზე მეტია.

// const products = [
//   { name: "apple", price: 50 },
//   { name: "banana", price: 101 },
//   { name: "onion", price: 1337 },
// ];

// const plusHundred = products.filter((product) => product.price > 100);
// console.log(plusHundred);

// 15. შექმენით რიცხვების მასივი და filter მეთოდით მიიღეთ ყველა რიცხვი, რომელიც 50-ს აღემატება.

// const numbers = [10, 20, 30, 40, 50, 60, 70, 1337];

// const higherThanFifty = numbers.filter((number) => {
//   if (number > 50) {
//     return number;
//   }
// });

// console.log(higherThanFifty);

// 16. დაწერეთ კოდი, რომელიც while ციკლით 1-დან 10-მდე რიცხვებს დაბეჭდავს.

// let number = 1;

// while (number <= 10) {
//   console.log(number);
//   number++;
// }

// 17. დაწერეთ პროგრამა, რომელიც while ციკლით მასივში არსებული რიცხვების ჯამს გამოიანგარიშებს.

// 18. შექმენით ცვლადი რიცხვით 1 და while ციკლით იმატეთ 2-ით, სანამ რიცხვი არ მიაღწევს 20-ს.

// 19. დაწერეთ პროგრამა, რომელიც while ციკლით რიცხვებს დაბეჭდავს 20-დან 10-მდე დაღმავალი თანმიმდევრობით.

// 20. დაწერეთ პროგრამა, რომელიც while ციკლით მასივში ყველა ობიექტს გამოიკვლევს და თითოეული მათგანის სახელს დაბეჭდავს.
