function hasNoDuplicates(array) {
  return array.length === uniqueValues(array).length
}

function uniqueValues(array) {
  // refactor?
  return array.filter((x, i, a) => a.indexOf(x) == i)
}
