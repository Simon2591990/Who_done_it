let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
    let suspectThree = 'Colonel Mustard';
    return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// suspects should be scarlet, plum, mustard as suspects was assigned using the declareAllSuspects functions and suspectThree was changed inside the function
// suspectThree should be Mrs. Peacock as it does not use the function where it changes suspectThree