let episode = 1

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };
  
// const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
// }
  
// const verdict = declareMurderer();
// console.log(verdict);

// Miss Scarlet. the declareMurderer function returns "Miss Scarlett" using scenario.murderer

episode = 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// error. the changeMurderer function tries to change a const variable.

episode = 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// First Verdict is Mrs. Peacock. the murderer is changed and them printed out within the function
// Second Verdict is Professor Plum. the declareMurderer function only changes the murderer vatiable inside of the block so when murderer is called again it reverts to Professor Plum

episode = 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//     let suspectThree = 'Colonel Mustard';
//     return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// suspects should be [scarlet, plum, mustard] as suspects was assigned using the declareAllSuspects functions and suspectThree was changed inside the function
// suspectThree should be Mrs. Peacock as it does not use the function where it changes suspectThree

episode = 5

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
// const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
// const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// Revoler. the weapon value of scanrio is changed to Revolver using the changeWeapon function

episode = 6

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Mrs. White. the murderer is changed with changeMurder to Mr. Green and then it's changed gain to Mrs. White with the plotTwist function

episode = 7

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Mr. Green. changeMurderer changes murderer to Mr. Green.
// plotTwist creates a new variable for murderer but because it uses "let" to define it, it doesnt change the murderer outside of the function. 
// unexpectedOutcome also doesnt change the murderer outside of the function as it is using the murder  variable from plotTwist

episode = 8

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };

// const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';

//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
// const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// Candle Stick. changeScenario changes the murderer, room and weapon using different functions.
// changeScenario changes the room to dining room.
// plotTwist checks is the argument passed into matches the scenario. it passes so the murderer is changed to Mustard
// unexpectedOutcome checks if the argument passed in matches the scenatio and changes the weapon to Candle Stick

episode = 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Professor Plum. the if statement creates a new variable for murderer but it can onlky be used inside of the if block