function hasNoConsecutiveCards(originalArray, newArray) {
  let indices;
  for (let i = 0; i < newArray.length; i++) {
    indices = newArray[i].map(x => originalArray.indexOf(x));
    for (let j = 0; j < indices.length; j++) {
      if (indices[j + 1] - indices[j] === 1) {
        return false;
      }
    }
  }
  return true;
}
