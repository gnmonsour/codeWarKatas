function getCount(str) {
    let vowelsCount = 0;
    const vowels = "aeiou".split('');
    str.split('').forEach(letter => {
        vowelsCount += vowels.includes(letter) ? 1 : 0;
    });

    return vowelsCount;
}

console.log('count', getCount('abracadabra'));
