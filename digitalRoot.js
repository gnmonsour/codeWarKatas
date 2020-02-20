function digital_root(n) {
    let num = n;
    while(num > 9){
        num = reduce_digits(num);
    }
    return num;

}
  
function reduce_digits(n){
  let num = n;
  let retVal = 0;
  while(num > 9) {
      retVal += num%10;
      num = Math.floor(num/10);
  }
  return retVal + num;

}


console.log(digital_root(493193));