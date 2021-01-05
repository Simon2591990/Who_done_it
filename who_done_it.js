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

epsode = 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
    let murderer = 'Mrs. Peacock';
    return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);