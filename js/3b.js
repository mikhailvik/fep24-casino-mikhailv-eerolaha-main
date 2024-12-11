//3b Viktoriia Mikhailova = userinfo.html
// Visa information om plattform, webbläsare och språk
console.log("Plattform:", navigator.platform);
console.log("Webbläsare:", navigator.userAgent);
console.log("Språk:", navigator.language);
console.log("Skärmupplösning: " + screen.width + "x" + screen.height);
console.log("Fönsterstorlek: " + window.innerWidth + "x" + window.innerHeight);


// Bestämning av geolokalisering
// Funktion - hämta geolokalisering
function getGeolocation() {
    // Kontrollera om det redan finns data i localStorage
    const Coordinates = localStorage.getItem('coordinates');
    
    if (Coordinates) {
      // Om det finns i localStorage - skriv ut det i konsolen
      const ourCoordinates = JSON.parse(Coordinates);
      console.log(`Längdgrad: ${ourCoordinates.longitude}, Breddgrad: ${ourCoordinates.latitude}`);
    } else {
      // Om det inte finns data i LocalStorage - be om geolokalisering
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function(position) {
            // Hämta koordinater latitude och longitude
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
  
            // Spara koordinater i localStorage
            const coordinates = { latitude, longitude };
            localStorage.setItem('coordinates', JSON.stringify(coordinates));
  
            // Skriv ut koordinater i konsolen
            console.log(`Längdgrad: ${longitude}, Breddgrad: ${latitude}`);
          },
          function(error) {
            // Hantera fel om användaren avböjer geolokalisering
            console.error('Fel vid hämtning av geolokalisering:', error.message);
          }
        );
      } else {
        // Om geolokalisering inte stöds
        console.log('Geolokalisering stöds inte av denna webbläsare');
      }
    }
}
  
// Starta funktionen när sidan laddas
getGeolocation();


//3b Viktoriia Mikhailova How much do you play
// Funktion för att öka räknaren och gå vidare
function incrementPlayCount(event) {
    // Förhindra standardbeteende för knappen 
    event.preventDefault();

    // Hämta det aktuella antalet spel från localStorage
    let playCount = localStorage.getItem('playCount');
    if (playCount === null) {
        playCount = 0;  // Om det inte finns något sparat värde, börja med 0
    } 
    else {
        // Omvandla strängen till ett tal
        playCount = parseInt(playCount); 
    }
    // Öka räknaren med 1
    playCount++; 

    // Spara det nya antalet spel i localStorage
    localStorage.setItem('playCount', playCount);

    // Uppdatera visningen av räknaren på alla element med klassen 'play-count'
    const playCountElements = document.querySelectorAll(".play-count");
    playCountElements.forEach(function(element) {
        element.innerHTML = `You have played ${playCount} time(s).`;
    });

    // Hämta URL för att gå vidare från data-href attributet
    const targetPage = event.target.getAttribute('data-href');
    
    // Gå vidare till en annan sida
    window.location.href = targetPage;
}

// Knapparna
const MemoryButton = document.getElementById("firstgame-count");
const StanSaxPaseButton = document.getElementById("secondgame-count");

// Lägg till klickhanterare på varje knapp
if (MemoryButton) {
    MemoryButton.addEventListener("click", incrementPlayCount);
} 

if (StanSaxPaseButton) {
    StanSaxPaseButton.addEventListener("click", incrementPlayCount);
} 

// Visa antal klick vid sidladdning
let playCount = localStorage.getItem('playCount');
if (playCount === null) {
playCount = 0;  // Om det inte finns något sparat värde, börja med 0
} 
else {
// Omvandla strängen till ett tal
playCount = parseInt(playCount); 
}
// Öka räknaren med 1
playCount++; 
    
// Visa räknaren på alla element classen 
const playCountElements = document.querySelectorAll(".play-count");
playCountElements.forEach(function(element) {
    element.innerHTML = `You have played ${playCount} time(s).`;
});