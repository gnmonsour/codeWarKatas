function XO(str) {
    const counter = {x:0, o:0};
    
    str.split('').map((letter) => { counter[letter.toLowerCase()]++});
    // console.log(`x ${JSON.stringify(counter)}, o ${counter.o}`);
    return counter.x === counter.o;
}

console.log(XO('xxOo'));
console.log(XO('xxOm'));
console.log(XO('xddx'));
console.log(XO('xxoOo'));