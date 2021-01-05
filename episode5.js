const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// Revoler. the weapon value of scanrio is changed to Revolver using the changeWeapon function