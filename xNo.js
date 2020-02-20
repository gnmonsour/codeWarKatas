/*
    Are `x` and `o` counts equal in a given string?
*/

function XO(str) {

    const counter = {x:0, o:0};
    
    str.split('').map((letter) => { counter[letter.toLowerCase()]++});
    console.log(counter);
    return counter.x === counter.o;
}

// in file tests
console.log(XO('xxOo'));
console.log(XO('xxOm'));
console.log(XO('xddx'));
console.log(XO('xxoOo'));