// 'use strict';

// // const bookings = [];

// // const createBooking = (flightNum, numPassengers = 0, price = 0) => {
// //   const booking = {
// //     flightNum,
// //     numPassengers,
// //     price,
// //   };
// //   console.log(booking);
// //   bookings.push(booking);
// // };
// // createBooking('EE133');
// // createBooking('LH123', 2, 999);

// const flight = 'LH344';
// const jonas = {
//   name: 'Josub Jacob',
//   password: 123123123,
// };
// const checkIn = (flightNum, passenger) => {
//   (flightNum = 'HL999'), (passenger.name = 'Mr. ' + passenger.name);

//   if (passenger.password === 123123123) {
//     alert('Check In');
//   } else {
//     alert('Wrong Password ');
//   }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // //Is the same as doing
// // const flightNum = flight;
// // const passenger = jonas;

// // const newPassport = person => {
// //   person.password = Math.trunc(Math.random() * 10);
// // };

// // newPassport(jonas);
// // checkIn(flight, jonas);

// const oneWord = str => {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = str => {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher-order function
// const transformer = (str, fn) => {
//   console.log(`Orginal String: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);

// transformer('JavaScript is the best!', oneWord);

// const high5 = () => {
//   console.log('🙊🤟');
// };

// document.body.addEventListener('click', high5);

// ['ADa', 'Kala', 'Tlaa', 'xlaxa'].forEach(high5);

// const greet = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('Hey');

// greeterHey('Josub');
// greeterHey('Jacob');

// greet('Josub')('Jacob');

// //Challenging,Arrow Fuction
// const greet1 = greeting => name => {
//   console.log(`${greeting}${name}`);
// };
// greet1('Arrow Fuction')(' By Josub');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book:()=>{},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}` });
  },
};
lufthansa.book('23', 'Josub');
lufthansa.book('1223', 'Jacob');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
//does NOT work
// book(24, 'Josub');

//Call method
book.call(eurowings, 24, 'Jusob');
book.call(lufthansa, 22, 'Josub Jacob');

const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 224, 'Jacob');

//Apply method
const flightData = [583, 'Parguzat Jacob'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//Bind method
//book.call(eurowings, 24, 'Jusob');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);
bookEW(34234, 'Karo');
bookLH(324, 'Saho');
bookSW(534, 'Swisss');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Josub Jacob');

//With Event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial Application
const addTaxt = (rate, value) => value + value * rate;
console.log(addTaxt(0.1, 200));

const addVAT = addTaxt.bind(null, 0.23);
//addVAT=value =>value+value*0.23

console.log(addVAT(100));
console.log(addVAT(23));

const addTextRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTextRate(0.23);
console.log(addVAT2(1000));
