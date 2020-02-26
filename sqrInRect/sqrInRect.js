function sqInRect(lng, wdth) {
  if (lng === wdth)
    return null;
  const retVal = [];
  let max = lng,
    min = wdth,
    diff;

  max < min ? [min, max] = [max, min] : '';

  diff = max - min;
  while (diff != 0) {
    retVal.push(min);
    max = min;
    min = diff;
    max < min ? [min, max] = [max, min] : '';

    diff = max - min;
  }

  retVal.push(min);
  return retVal;
}