const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };

const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';

    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
      }
  
      const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
      }
  
      unexpectedOutcome('Colonel Mustard');
    }
  
    plotTwist('Dining Room');
  }
  
const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
  }

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// Candle Stick. changeScenario changes the murderer, room and weapon using different functions.
// changeScenario changes the room to dining room.
// plotTwist checks is the argument passed into matches the scenario. it passes so the murderer is changed to Mustard
// unexpectedOutcome checks if the argument passed in matches the scenatio and changes the weapon to Candle Stick