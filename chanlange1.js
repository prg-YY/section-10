/*
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, 
and an array with the number of replies for each option. This data is stored in 
the starter 'poll' object below.
Your tasks:
1. Createamethodcalled'registerNewAnswer'onthe'poll'object.The method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this: What is your favourite 
programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For example, 
if the option is 3, increase the value at position 3 of the array by 1. Make sure
 to check if the input is a number and if the number makes sense (e.g. answer 52 
	wouldn't make sense, right?)
2. Callthismethodwhenevertheuserclicksthe"Answerpoll"button.
3. Createamethod'displayResults'whichdisplaysthepollresults.The
method takes a string as an input (called 'type'), which can be either 'string' or 
'array'. If type is 'array', simply display the results array as it is, using
 console.log(). This should be the default option. If type is 'string', display a
  string like "Poll results are 13, 2, 4, 1".
4. Runthe'displayResults'methodattheendofeach 'registerNewAnswer' method call.
5. Bonus:Usethe'displayResults'methodtodisplaythe2arraysinthetest data. Use both the
 'array' and the 'string' option. Do not put the arrays in the poll object! So what 
 should the this keyword look like in this situation?

*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       // Poll results are 13, 2, 4, 1
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

// const runOnce = () => {
//   console.log('This will never run again');
// };
// runOnce();

// (() => {
//   console.log('This will never run again');
// })();

// (function () {
//   console.log('This will ALSO  never run again');
// })();
// {
//   var isPrivate = 23;
// }
// console.log(isPrivate);

// const secureBooking = () => {
//   let passengerCount = 0;

//   return () => {
//     passengerCount++;
//     console.log(`${passengerCount} Pessengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker('Jacob');
// booker('adil');
// booker('akrem');

// //exemple
// let f;

// const g = function () {
//   const a = 23;
//   f = () => {
//     console.log(a * 2);
//   };
// };

// const d = () => {
//   const b = 777;
//   f = () => {
//     console.log(b * 2);
//   };
// };
// g();
// f();
// console.dir(f);
// d();
// f();
// console.dir(d);

// // Exemple 2
// const boardPassengers = (n, wait) => {
//   const perGroup = n / 3;

//   setTimeout(() => {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`THere are 3 groups, each with ${perGroup} passenger`);
//   }, wait * 1000);

//   console.log(`Will Start Boarding in ${wait} seconds`);
// };
// const perGroup = 1000;
// boardPassengers(180, 3);

(() => {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();
