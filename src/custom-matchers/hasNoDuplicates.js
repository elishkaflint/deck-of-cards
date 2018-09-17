function hasNoDuplicates(array) {
  return array.length === uniqueValues(array).length;
}

function uniqueValues(array) {
  return array.filter((x, i, a) => a.indexOf(x) == i);
}
