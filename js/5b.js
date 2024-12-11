//5b  Hannes Eerola = secondgame.html

const choices =[
    {   name: "Rock", beats: "Scissors"},
    {   name: "Paper", beats: "Rock"},
    {   name: "Scissors", beats: "Paper"},   //definierar spelvalen och vem som vinner vem
];

let userAccountBalance = 0; // saldot för satsningar är först nollställt, men visas inte i text
let userBet = 0;  // till först har inga satsningar gjorts = är nollställd
let betPlaced = false; // boolean för att att hjälpa verfiera när en satsning gjorts

function placeBet(bet) {
userBet = parseInt(bet);  
if (isNaN(userBet) || userBet <= 0 || userBet == null){  // säkerställa att man sätter in en siffra som är högre än noll
    document.getElementById('bet').innerText = 'Please enter a valid bet amount greater than zero.';
    betPlaced = false;
}else {
document.getElementById('bet').innerText = `You placed a bet of ${userBet}`;  // visas vad som har valts till satsning
document.getElementById('result').innerText = '';  // förrän det spelats visas inget resultat
betPlaced = true; // nu har satsningen gjorts, och det verifieras
}
}
function userChoice(choiceName) {
    if (!betPlaced) {
        document.getElementById('result').innerText = 'Please place a bet before making a choice.';   // loopar det, att man måste välja en satsning först
        return;
    }
    const userChoice = choices.find(choice => choice.name === choiceName); // definierar hur man gör valet, och likställer fotona och deras tagnamn i html med deras valnamn i js
    const computerChoice = computerPick(); // AI-valet
    document.querySelectorAll('.options').forEach(option => {
        option.classList.remove('choice-selected');  
    });
    document.querySelectorAll('.options').forEach(option => {            // när ett foto blir valt blir det mörklagt, men när nästa blir valt blir det mörklagt och dett gamla valet får tillbaka sin normala färg
        if (option.alt === choiceName) {
            option.classList.add('choice-selected');
        }
    });
    console.log(`User choice: ${choiceName}`); // En debugger för att säkra att allt funkat
    const result = winner(userChoice, computerChoice)   // anropar class choices för att se vems val vinner vems
    updateResult(result);
    displayResult(userChoice, computerChoice, result);  // först uppdatera och sedan visa resultatet

    betPlaced = false;      // nollställning av spelet för denna runda, med satsning och valet av sten, sax, påse
    disableChoices();
    document.getElementById('newBet').innerText = 'Please place a new bet to play again.'; // ny satsning kan sättad
    document.getElementById('betAmount').value = ''; // stället där det stod om satsningen blir tom i väntan på ny satsning
}

function computerPick(){  // funktion för att AI-valet skall vara helt slumpmässigt mellan de tre alternativen
    const randomness = Math.floor(Math.random() * choices.length);
    return choices[randomness];
}


function winner(userChoice, computerChoice) {    // funktionen för hur vinnaren räknas ut per matte och logik och vad för text som visad
    let choiceText = `You chose ${userChoice.name}, computer chose ${computerChoice.name}.`; // text för vad resultatet blev
    let afters = ` ` // vad som kommer efter att spelet är spelat för en rond -> tomt i textväg tills nästa rond spelas
    document.getElementById('choice').innerText = choiceText;  
    setTimeout(() => {   // timer för hur länge texten visas, sju sekunder
    document.getElementById('choice').innerText = afters;
    },7000)
    if (userChoice.name === computerChoice.name){      // båda valt samma
        return 'draw';
    }
    else if (
        (userChoice.beats === computerChoice.name)    // väljaren vinner
    ) {
        return 'win';
    }
    else {
        return 'lose'                             // väljaren förlorar
    }
}

function updateResult(result) {   // om man vinner, vinner man för den rundan dubbelt det man satsat för rundan
    if (result === 'win'){
        userAccountBalance += userBet * 2;  // man sätter saldot att reagera till nya situationen
        document.getElementById('result').innerText = 'You win!!!';
        setTimeout(() => {
        document.getElementById('result').innerText = ' ';
        }, 7000)   // man sätter timer så att det inte visas alltför länge
    }
    else if (result === 'lose'){  // // om man förlorar, förlorar man för den rundan dubbelt det man satsat för rundan
        userAccountBalance -= userBet * 2; // man sätter saldot att reagera till nya situationen
        document.getElementById('result').innerText = 'Unfortunately, you lose this round...';
        setTimeout(() => {
        document.getElementById('result').innerText = ' ';
        }, 7000)   // man sätter timer så att det inte visas alltför länge
    }
    else {
        document.getElementById('result').innerText = 'It is a draw! Your balance stays the same for now, would you like to play again?';
        setTimeout(() => {
        document.getElementById('result').innerText = ' ';
        }, 7000)   // man sätter timer så att det inte visas alltför länge
    }
    document.getElementById('balance').innerText = `Your account balance is: ${userAccountBalance}`; // ständigt påminnelsemeddelande om saldot
}