/*jshint esversion:6*/


class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = '';
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if (keyCode.keyCode >= 65 && keyCode.keyCode <= 90){
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    for(let value of this.letters){
      if (letter === value){
        return false;
      } else {
        return true;
      }
    }

  }

  addCorrectLetter(letter) {
    // ... your code goes here

    for(let i = 0; i < this.secretWord.length; i++){
      if (this.secretWord.charAt(i) === letter ) {
        this.guessedLetters[i] = letter;
      }
    }    
    this.checkWinner();
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft--;
    this.checkGameOver();
    if(this.letters.indexOf(letter) === -1){
      this.letters.push(letter);
    }

  }

  checkGameOver() {
    // ... your code goes here
    if(this.errorsLeft > 0){
      return false;
    } else {
      return true;
    }
  }

  checkWinner() {
    // ... your code goes here
    if(this.guessedLetters === this.secretWord) {
      return true;
    } else {
      return false;
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    //HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keyup', event => {

  if(checkIfLetter(event)) {

    let keyStr = event.key;

    if(!hangman.checkClickedLetters(keyStr)){

      if (hangman.secretWord.indexOf(keyStr) != -1){

        hangman.addCorrectLetter(keyStr);
        hangman.writeCorrectLetter(keyStr);

      } else {

        hangman.addWrongLetter(hangman.secretWord.charAt(keyStr));
        hangman.writeWrongLetter(keyStr, hangman.errorsLeft);
        // Add action that draws the next part of the hangman on the screen using errorsLeft
      }

      

    } else {

      alert(`You Alredy clicked the letter ${keyStr}`);
    }

  } else {

    alert('Please choose a letter from a-z.');
  }
  
});
