let murderer = 'Professor Plum';

const declareMurderer = function() {
    let murderer = 'Mrs. Peacock';
    return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// First Verdict is Mrs. Peacock. the murderer is changed and them printed out within the function
// Second Verdict is Professor Plum. the declareMurderer function only changes the murderer vatiable inside of the block so when murderer is called again it reverts to Professor Plum