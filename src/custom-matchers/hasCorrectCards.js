function hasCorrectCards(array, cards, players) {

  return array.length === players && array.every(hasRightNumberOfCards)

  function hasRightNumberOfCards(element) {
    return element.length === cards
  }

}
