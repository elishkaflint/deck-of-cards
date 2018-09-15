function hasNoSequentialElements(originalArray, newArray) {
  let indices = newArray.map(x => originalArray.indexOf(x))
  for (let i = 0; i < indices.length; i++) {
    if(indices[i+1] - indices[i] === 1){
      return false
    }
  }
  return true
}
