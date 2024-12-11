//2a Viktoriia Mikhailova = index.html
 // Global variabel (för att hålla koll på om casino är stängt)
 let closedCasino = false;

 // Funktion för att uppdatera klockan
 function updateClock() {
     const today = new Date();
     const day = today.getDate();
     const month = today.getMonth() + 1; // månader är 0-indexerade i Date
     const year = today.getFullYear();
     let hours = today.getHours();
     let minutes = today.getMinutes();
     let seconds = today.getSeconds();

     // Se till att timmar, minuter och sekunder alltid visas med två siffror
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
 
     const Mytime = `Today is the ${day}.${month}.${year} at ${hours}:${minutes}:${seconds}`;

     document.getElementById('clock').textContent = Mytime;
 }

 // Funktion för att kontrollera om casino är öppet eller stängt
 function casinoStatus() {
     const today = new Date();
     const weekDay = today.getDay(); // 0 = söndag

     // Om det är lördag (6) eller söndag (0) casino är stängt
     if (weekDay === 0 || weekDay === 6) {
         closedCasino = true;
         document.getElementById('casino-status').textContent = "Casino is closed on weekends!";
         document.getElementById("casino-status").style = "color: red";
    
     // Om det är måndag (1) - fredag (5) casino är öppet    
     } else {
         closedCasino = false;
         document.getElementById('casino-status').textContent = "Casino is open today!";
         document.getElementById("casino-status").style = "color: #0d6efd";
         document.getElementById('countdown-clock').textContent = ""; 
     }
 }

 // Uppdatera klockan
 setInterval(() => {
    updateClock(); casinoStatus(); Countdown();
}, 1000);

// Funktion för att visa nedräkningen (tills casinot öppnar på måndag)
function Countdown() {
    const today = new Date();
     // Calculate how many days until the next Monday
    let daysUntilMonday = (1 - today.getDay() + 7) % 7; // Räkna antal dagar till nästa måndag
    if (daysUntilMonday === 0) daysUntilMonday = 7; // Om det är söndag, visa countdown till nästa måndag

    // Create a new date object for the next Monday
    // Beräkna antal sekunder till nästa måndag
    const nextMonday = new Date(today);
    nextMonday.setDate(today.getDate() + daysUntilMonday); //// Set the day to next Monday
    nextMonday.setHours(0, 0, 0, 0); // Sätt tiden till midnatt på måndag

    // How much in seconds
    const secondsUntilMonday = Math.floor((nextMonday - today) / 1000);

    // Omvandla sekunder till timmar, minuter, sekunder
    const hours = Math.floor(secondsUntilMonday / 3600); // Hela timmar
    const minutes = Math.floor((secondsUntilMonday % 3600) / 60); // Hela minuter
    const seconds = secondsUntilMonday % 60; // Resterande sekunder

    const weekDay = today.getDay()
    // Om det är lördag (6) eller söndag (0) casino är stängt och vi ser hur länge innan casino öppnar 
    if (weekDay === 0 || weekDay === 6) {
        document.getElementById("countdown-clock").textContent = `Casino opens in ${hours} hours ${minutes} minutes and ${seconds} seconds!`;
   
    // Om det är måndag (1) - fredag (5) casino är öppet och vi ser inte hur länge innan casino öppnar     
    } else {
        document.getElementById("countdown-clock").textContent = "";
    }
}
