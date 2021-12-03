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
    if (this.letters.indexOf(letter) != -1){
      return true;
    } else {
      return false;
    }

  }

  addCorrectLetter(letter) {
    // ... your code goes here
    
    for(let i = 0; i < this.secretWord.length; i++){
      
      if (this.secretWord.charAt(i) === letter ) {
        let a = this.guessedLetters.slice(0, i);
        let b = this.guessedLetters.slice(i);
        // find a way to sort the letters
        this.guessedLetters = a + letter +b; 
      }
      
    }

    this.checkWinner();
    this.letters.push(letter);
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft--;
    this.checkGameOver();
    this.letters.push(letter);
    

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
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {

  if(hangman.checkIfLetter(event)) {

    let keyStr = event.key;

    if(hangman.checkClickedLetters(keyStr) === false){

      if (hangman.secretWord.indexOf(keyStr) != -1){

        hangman.addCorrectLetter(keyStr);

        for(let i = 0; hangman.secretWord.length; i++){
          if (keyStr == hangman.secretWord[i]){
            hangmanCanvas.writeCorrectLetter(i);
          }
        }
        

      } else {

        hangman.addWrongLetter(keyStr);
        hangmanCanvas.writeWrongLetter(keyStr, hangman.errorsLeft);
        // Add action that draws the next part of the hangman on the screen using errorsLeft
      }

      

    } else {

      alert(`You Alredy clicked the letter ${keyStr}`);
    }

  } else {

    alert('Please choose a letter from a-z.');
  }
  
});
