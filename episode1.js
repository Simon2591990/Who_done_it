const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
};
  
const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
}
  
const verdict = declareMurderer();
console.log(verdict);

// Miss Scarlet. the declareMurderer function returns "Miss Scarlett" using scenario.murderer