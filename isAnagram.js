/*

    Anagrams are words or strings that contain the same characters.  

    Write a function that will find all the anagrams of a word from a list. 
    You will be given two inputs a word and an array with words. 
    You should return an array of all the anagrams or an empty array if there are none. 
    For example:

    anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
    anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
    anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

function anagrams(str, list) {

    // initialize return array
    const retArr = [];

    // get target character count map and keys
    const targetCounts = getCharacterMap(str);
    const targetKeys = Object.keys(targetCounts);

    // for each input get character count map
    // run comparision on both count maps
    list.forEach(str => {

        const candidateCounts = getCharacterMap(str);

        let retVal = true;
        if(targetKeys.length != Object.keys(candidateCounts).length)
            return false;
            
        for (let i = 0; i < targetKeys.length; i++) {
            const element = targetKeys[i];

            if (targetCounts[element] && candidateCounts[element]) {
                if (targetCounts[element] !== candidateCounts[element]) {
                    retVal = false;
                    break;
                }
            } else {
                retVal = false
                break;
            }
        }

        if (retVal)
            retArr.push(str);
    });

    return retArr;
}

function isAnagram(strOne, strTwo) {

    const counterOne = getCharacterMap(strOne);
    const counterTwo = getCharacterMap(strTwo);
    const keysOne = Object.keys(counterOne);
    const keysTwo = Object.keys(counterTwo);
    console.log('keysOne', keysOne);
    console.log('keysTwo', keysTwo);

    if (keysOne.length !== keysTwo.length)
        return false;

    let retVal = true;
    for (let i = 0; i < keysOne.length; i++) {
        const element = keysOne[i];
        // console.log(`counterOne[${element}]`, counterOne[element]);
        // console.log(`counterTwo[${element}]`, counterTwo[element]);

        if (counterOne[element] && counterTwo[element]) {
            if (counterOne[element] !== counterTwo[element]) {
                retVal = false;
                break;
            }
        } else {
            retVal = false
            break;
        }
    }

    return retVal;
}






const getCharacterMap = (str) => {

    // initialize the counter
    counter = {};

    // build an array of unique characters
    const strArr = str.split('');
    let charArr = Array.from(new Set(strArr));

    // initialize counter keys to 0 based on the unique characters
    charArr.forEach(c => counter[c.toLowerCase()] = 0);

    strArr.map((letter) => {
        counter[letter]++
    });
    return counter;
}

// in file tests
// console.log(isAnagram('abba', 'baab'));
// console.log(isAnagram('abba', 'bbaa'));
// console.log(isAnagram('abba', 'baaab'));
// console.log(isAnagram('abbao', 'aacb'));

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));// => ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));// => ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));// => []
