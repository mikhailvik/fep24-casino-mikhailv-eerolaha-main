//4b Hannes Eerola = firstgame.html
document.addEventListener('DOMContentLoaded', function() {
  let firstPick = { picked: false};  // first pick, false before it has been done
  let secondPick = {picked: false}; // second pick, false before it has been done
  let foundMatches = 0;   // value is added up
  const totalMatches = 6;  // total nr of pairs
  let match = `It's a Match!`                   // messages for different scenarios
  let completion = `Congratulations! You have completed the game!`
  let notMatched = `The cards do not match, please try again`
  let ignoreCompleted = ` `
  document.querySelector('#links-container').addEventListener('click', function(event) {

      //method for making the picking mechanism work, first pick, second pick, check if there is a match, and what happens if there is or is not a match
      if(event.target.classList.contains('hidden-card')) {
          if(!firstPick.picked){   // this means, "what happens if a first pick has not yet been made"
              firstPick = event.target;      // storing the first choice
              firstPick.classList.add('visible');  //making the first choice "turn", i.e. making it visible
              firstPick.picked = true;
          }
          else if (!secondPick.picked && event.target !==firstPick){    //second pick is yet to be picked & making sure that the first choice is not clickable as the second choice
              secondPick = event.target;            // storing the second choice
              secondPick.classList.add('visible')   //making the second choice "turn", i.e. making it visible
              secondPick.picked = true;

 // if they match...
          if (firstPick.src === secondPick.src){                  //checking that properties and values of the picture url:s match                                
              document.getElementById('match-message').innerHTML = match;
              setTimeout(() => {
              document.getElementById('match-message').innerHTML = ignoreCompleted;
              }, 2000); // only show match message 2 second, no more, then the message dissappears
              firstPick = {picked: false}; // making the game forget about the previous choices
              secondPick = {picked: false}; // making the game forget about the previous choices
              foundMatches++;  // counting the number of matches
          }
//if they do not match
          else {
              document.getElementById('nonmatch-message').innerHTML = notMatched;
              setTimeout(() => {
                  firstPick.classList.remove('visible');  //earlier error that cannot access variables, this ensures that their variables are not null when trying to access them
                  secondPick.classList.remove('visible');
                  firstPick = {picked: false}; // making the game forget about the previous choices
                  secondPick = {picked: false}; // making the game forget about the previous choices
                  document.getElementById('nonmatch-message').innerHTML = ignoreCompleted;
              }, 2000)   //making the images go back to blank with 2 second delay
          }

          if (foundMatches === totalMatches){   //defining when game is completed and what happens then (message)
              document.getElementById('completion-message').innerHTML = completion;
              setTimeout(() => {
              document.getElementById('completion-message').innerHTML = ignoreCompleted;
          }, 100000); // let the completion sink in for 100 seconds, then the message dissappears
          }
      }
  }
});
});
