// jshint esversion:6

class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(1200, 800, 1200, 800);
    this.drawLines();
  }

  drawLines() {

    // ... your code goes here
    let x = 350;
    
    for (let i = 0; i < this.secretWord.length; i++) {
    
      this.context.beginPath();
      this.context.moveTo(x,700);
      x+= 75;
      this.context.lineTo(x,700);
      this.context.stroke();
      this.context.closePath();
      x+= 25;

    }
      
  }

  writeCorrectLetter(index) {
    
    // ... your code goes here
    let letter = this.secretWord[index];
    console.log('letter to be impressed =>',letter);
    
    // To Find the Bug
    // if (index == 0) {
    //   this.context.font = '48px sans-serif';
    //   this.context.fillText(letter, 365, 690);
    // } else {
    //   index = index * 100 + 10;  
    //   this.context.font = '48px sans-serif';
    //   this.context.fillText(letter, 365 + index, 690);
    // }
  
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    let xOfLetters;
    if (hangman.letters.length == 1) {
      this.context.font = '48px sans-serif';
      this.context.fillText(letter, 700, 200);
    } else {
      
      for (let i = 0; i < hangman.letters.length; i++){
        if(letter === hangman.letters[i])
          xOfLetters = i * 50 + 10;  
          this.context.font = '48px sans-serif';
          this.context.fillText(letter, 700 + xOfLetters, 200);
      }
      
    }
  }

  drawHangman(errorsLeft) {
    // ... your code goes here

    if(hangman.checkGameOver()){

      //hanger base
      this.context.beginPath();
      this.context.moveTo(150, 650);
      this.context.lineTo(75, 700);
      this.context.lineTo(225, 700);
      this.context.lineTo(150, 650);
      this.context.lineWidth = 3;
      this.context.stroke();
      this.context.closePath();
      //hanger stick1

      this.context.beginPath();
      this.context.moveTo(150, 650);
      this.context.lineTo(150, 100);
      this.context.lineWidth = 3;
      this.context.stroke();
      this.context.closePath();

      //hanger stick2
      this.context.beginPath();
      this.context.moveTo(150, 100);
      this.context.lineTo(500, 100);
      this.context.lineTo(500, 160);
      this.context.lineWidth = 3;
      this.context.stroke();
      this.context.closePath();

      //head
      this.context.beginPath();
      this.context.arc(500, 200, 40, 0, Math.PI*2);
      this.context.lineWidth = 3;
      this.context.stroke();
      this.context.closePath();

      //nech
      this.context.beginPath();
      this.context.moveTo(500, 240);
      this.context.lineTo(500, 280);
      this.context.lineWidth = 3;
      this.context.stroke();
      this.context.closePath();

      //left arm
      this.context.beginPath();
      this.context.moveTo(425, 320);
      this.context.lineTo(500, 280);
      this.context.lineWidth = 3;
      this.context.stroke();
      this.context.closePath();

      // right arm
      this.context.beginPath();
      this.context.moveTo(575, 320);
      this.context.lineTo(500, 280);
      this.context.lineWidth = 3;
      this.context.stroke();
      this.context.closePath();

      //upper body
      this.context.beginPath();
      this.context.moveTo(500, 280);
      this.context.lineTo(500, 400);
      this.context.lineWidth = 3;
      this.context.stroke();
      this.context.closePath();



      //left leg
      this.context.beginPath();
      this.context.moveTo(450, 475);
      this.context.lineTo(500, 400);
      this.context.lineWidth = 3;
      this.context.stroke();
      this.context.closePath();

      //right leg
      this.context.beginPath();
      this.context.moveTo(550, 475);
      this.context.lineTo(500, 400);
      this.context.lineWidth = 3;
      this.context.stroke();
      this.context.closePath();
    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
