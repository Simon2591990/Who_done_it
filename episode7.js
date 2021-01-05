let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Mr. Green. changeMurderer changes murderer to Mr. Green.
// plotTwist creates a new variable for murderer but because it uses "let" to define it, it doesnt change the murderer outside of the function. 
// unexpectedOutcome also doesnt change the murderer outside of the function as it is using the murder  variable from plotTwist