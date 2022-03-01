'use strict';

// const bookings = [];

// const createBooking = (flightNum, numPassengers = 0, price = 0) => {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('EE133');
// createBooking('LH123', 2, 999);

const flight = 'LH344';
const jonas = {
  name: 'Josub Jacob',
  password: 123123123,
};
const checkIn = (flightNum, passenger) => {
  (flightNum = 'HL999'), (passenger.name = 'Mr. ' + passenger.name);

  if (passenger.password === 123123123) {
    alert('Check In');
  } else {
    alert('Wrong Password ');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// //Is the same as doing
// const flightNum = flight;
// const passenger = jonas;

// const newPassport = person => {
//   person.password = Math.trunc(Math.random() * 10);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

const oneWord = str => {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = str => {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = (str, fn) => {
  console.log(`Orginal String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

const high5 = () => {
  console.log('🙊🤟');
};

document.body.addEventListener('click', high5);

['ADa', 'Kala', 'Tlaa', 'xlaxa'].forEach(high5);
