# DECK OF CARDS

## SUMMARY

An application to build a deck of cards which can be shuffled and dealt. I really enjoyed the challenge of getting my head around this exercise which, although including a seemingly straightforward set of requirements, called for some more advanced TDD techniques (mocking randomness and isolating classes) and included a complex shuffle algorithm.

#### Status at time of submission

- All unit tests consistently passing
- Feature test to ensure no consecutive cards in a successive shuffles is consistently failing (shuffle algorithm requires additional work)

## TECHNICAL

### QuickStart

#### Installing the code

1. Run `npm install` to add dependencies (ESLint)
2. Open index.html in the browser (Google Chrome)
3. Inspect page (right click and inspect)
4. Navigate to the console tab

#### Using the application

Create a game:
```
> let game = new Game()

> game.getCards()

  ["Ace of Hearts", "2 of Hearts", "3 of Hearts", "4 of Hearts", "5 of Hearts",
  "6 of Hearts", "7 of Hearts", "8 of Hearts", "9 of Hearts", "10 of Hearts",
  "Jack of Hearts", "Queen of Hearts", "King of Hearts", "Ace of Clubs",
  "2 of Clubs", "3 of Clubs", "4 of Clubs", "5 of Clubs", "6 of Clubs",
  "7 of Clubs", "8 of Clubs", "9 of Clubs", "10 of Clubs", "Jack of Clubs",
  "Queen of Clubs", "King of Clubs", "Ace of Spades", "2 of Spades",
  "3 of Spades", "4 of Spades", "5 of Spades", "6 of Spades", "7 of Spades",
  "8 of Spades", "9 of Spades", "10 of Spades", "Jack of Spades",
  "Queen of Spades", "King of Spades", "Ace of Diamonds", "2 of Diamonds",
  "3 of Diamonds", "4 of Diamonds", "5 of Diamonds", "6 of Diamonds",
  "7 of Diamonds", "8 of Diamonds", "9 of Diamonds", "10 of Diamonds",
  "Jack of Diamonds", "Queen of Diamonds", "King of Diamonds"]

```

Shuffle cards:
```
> game.deal()

> game.getCards()

  ["King of Hearts", "5 of Clubs", "Jack of Clubs", "10 of Diamonds",
  "7 of Spades", "10 of Spades", "9 of Spades", "4 of Clubs", "9 of Diamonds",
  "King of Spades", "9 of Clubs", "Queen of Spades", "10 of Clubs",
  "4 of Diamonds", "7 of Diamonds", "5 of Hearts", "Ace of Diamonds",
  "Ace of Hearts", "3 of Hearts", "8 of Spades", "6 of Spades", "Ace of Spades",
  "6 of Clubs", "6 of Hearts", "5 of Spades", "2 of Hearts", "3 of Spades",
  "9 of Hearts", "4 of Hearts", "3 of Clubs", "Queen of Diamonds",
  "Jack of Hearts", "King of Clubs", "2 of Spades", "Jack of Spades",
  "8 of Clubs", "6 of Diamonds", "3 of Diamonds", "Ace of Clubs", "2 of Clubs",
  "Jack of Diamonds", "10 of Hearts", "Queen of Hearts", "7 of Clubs",
  "King of Diamonds", "5 of Diamonds", "2 of Diamonds", "8 of Hearts",
  "Queen of Clubs", "4 of Spades", "8 of Diamonds", "7 of Hearts"]
```

Deal cards:
```
> game.deal()

> game.playerHands

  [["King of Hearts", "7 of Spades", "9 of Diamonds", "10 of Clubs",
  "Ace of Diamonds", "6 of Spades", "5 of Spades"],

  ["5 of Clubs", "10 of Spades", "King of Spades", "4 of Diamonds",
  "Ace of Hearts", "Ace of Spades", "2 of Hearts"],

  ["Jack of Clubs", "9 of Spades", "9 of Clubs", "7 of Diamonds", "3 of Hearts",
  "6 of Clubs", "3 of Spades"],

  ["10 of Diamonds", "4 of Clubs", "Queen of Spades", "5 of Hearts",
  "8 of Spades", "6 of Hearts", "9 of Hearts"]]
```

### RUNNING THE TEST SUITE

1. Open SpecRunner.html in the browser (Google Chrome)
2. Click the Options button on the webpage and disable 'run tests in random order'

High-level exercise requirements are covered principally by the feature tests in ./spec/feature-spec.js

### CHOICE OF TECHNOLOGY

Although an OO-focused language like Ruby would probably have been more suitable, I chose Javascript for the following reasons:
- I sensed that testing would be non-trivial on this project and wanted to make use of Jasmine's custom matchers in my tests
- I wanted to use this opportunity to consolidate my understanding of classes in ES5
- I wanted to use this model as a basis on which to extend my knowledge of React by building a front-end visualisation of the cards
- Javascript has more commonality with PHP than Ruby, so I thought choosing Javascript here could only aid my learning of PHP

## PROCESS

### MY OBJECTIVES FOR THIS PROJECT
1. Showcase my TDD and OOP capability
2. Gain an introductory understanding of PHP
3. Use the exercise to explore data structures and algorithmic efficiency in more detail

### PLAN
1. Spend one day learning PHP fundamentals
2. Distill tech test requirements into a set of clear user stories
3. Diagram initial options for high-level class structure and relationships
4. Show TDD capability by test-driving implementation of each user story using Javascript and Jasmine
5. Consider ways to test speed of potential implementations of a shuffle algorithm to drive an efficient solution
6. Build a supplementary model using PHP, possibly spiked depending on time

## EXECUTION

### Testing
I stuck to a strict TDD process throughout this exercise, as follows (hopefully this can be seen in my commits):
1. Take a user story
2. Write a feature test
3. Write unit tests for first component encountered in the feature test
4. Pass unit tests
5. Refactor
6. Repeat steps 3-5 until feature test passes

I really used this process to drive my development of the program, departing from my initial high-level plans where this process took me in a slightly different, better direction.

I also wrote my own matchers to ensure that the tech test requirements were met; see the custom-matcher folder and beforeEach blocks where test outcomes are defined.

### The Shuffle Method
My initial shuffle method met all requirements except that no consecutive cards should remain once shuffled. My code includes an attempt to fix this, however it is commented out as it currently crashes the programme.

### Version Control
I created a new branch for each user story and merged my changes into Master once my tests were passing. I was really pleased to learn some new git techniques while working on this project, including `git rebase`, `git amend` and `git stash / apply / pop`

### Use of Constants
I chose to create some constants in my code to hold the perfect sequence, number of players and number of cards per hand (see Constants folder). This approach means that any of these values can be altered without breaking the test suite.

## WHAT I WOULD DO WITH MORE TIME
1. Add Jasmine command line report runner and Istanbul coverage checker (learnt the hard way that I should have done this first; requires re-working of files to export modules)
2. Improve the shuffle algorithm
3. Extract a class to handle each player's cards thereby reducing the responsibility in the game class
4. Spike the code in PHP (having done a number of PHP tutorials earlier in the week, it's a real shame that I wasn't able to do this in time)
5. Remove some tests which are testing state as opposed to behaviour (particularly initialization functions)
6. Make more use of Jasmine spies to refactor test mocks

## USERS STORIES
```
As a dealer,
So that I can set up a game of cards,
I want to start with a deck of 52 cards in perfect sequence
```
```
As a dealer,
So that I can deal a random hand to each player,
I want to be able to shuffle the cards so no two cards are still in sequence
```
```
As a dealer,
So that I can start the game,
I want to be able to deal out 7 cards to 4 players
```
