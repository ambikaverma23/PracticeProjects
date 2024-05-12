const minNum = 1;
const maxNum = 100;
const ans =Math.floor(Math.random() * (maxNum - minNum + 1))  + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){

  guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
  guess = Number(guess);

  if(isNaN(guess)){
    window.alert("Please enter a valid number")
  }
  else if(guess < minNum || guess > maxNum){
    window.alert("Please enter a valid number")
  }
  else{
    attempts++;
    if(guess < ans){
      window.alert("Too Low! Try Again")
    }
    else if(guess > ans){
      window.alert("Too High! Try again")
    }
    else{
      window.alert(`WON THE GAME! The answer was ${ans}. It took you ${attempts} attempts`)
      running = false;

    }
  }


}