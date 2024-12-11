
//1a Viktoriia Mikhailova
// Funktion skickar formuläret
function createUser() {
   // Get values ​​from the input - fields
    let name = document.getElementById("username").value;
    let lastname = document.getElementById("userlastname").value;
    
   // Check if both fields are filled!
    if (name === "" || lastname === "") {
        alert("Write your name and lastname please!");
        return;
    }
   // Create a string consisting of the first 5 characters of the last name (converted to lower case) and the first letter of the first name, also in lower case.
    let userName = lastname.toLowerCase().substring(0, 5) + name.toLowerCase().charAt(0);

    document.getElementById("answer").innerHTML = "Welcome " + name + ". Your username is " + userName;
    document.getElementById("answer").style = "color:#0d6efd";

}
 //Funktion create button "Start play"
function addButtonWithLink() {
    // Skapa ett nytt knappelement
    var button = document.createElement("button");
    
   // Lägg till text på knappen
    button.innerHTML = "Start play";
    
    button.onclick = function() {
       // När knappen trycks, gå till en annan sida
        window.location.href = "startgame.html"; 
    };

    const today = new Date();
    const weekDay = today.getDay()

     // Om det är lördag (6) eller söndag (0) casino är stängt och vi ser inte knappen  
    if (weekDay === 0 || weekDay === 6) {
        document.getElementById("button-container").innerHTML = "Unfortunately you can't play, the casino is closed today";
        document.getElementById("button-container").style.cssText = "color: red; font-size: 30px";

     // Om det är måndag (1) - fredag (5) casino är öppet    
    } else {
        // Hitta elementet med id="button-container" och lägg till en knapp till det
        document.getElementById("button-container").appendChild(button);
    }

}

//1b Hannes Eerola = startgame.html
function verified()
{
    const age = document.querySelector("#verify").value;
    let rejection = `Sorry, playing when you are under 18 years old is strictly forbidden. You are welcome back when you are of the right age!`
    let greeting = `Thank you for the verification! What would you like your stakes to be today?`

    if (age < 18){
        document.querySelector("#greeting").innerHTML = rejection;
    }
    else{
        document.querySelector("#greeting").innerHTML = greeting;
    }
}

function stakes()
{
    const stake = document.querySelector("#stake").value;
    const testexpression = /^\d+\.\d{2}$/;
    let zero = `Please choose a stake higher than zero!`;
    let numeric = `Please choose a numeric value. If you have a comma for a decimal, replace it with a dot.`;
    let decimals = 'Please choose decimals representing the cents, with a dot representing the decimal.';
    let confirmation = `Your chosen stake was ${stake} euros. We wish you good luck!!!`;

    if (stake == 0){
        document.querySelector("#confirmation").innerHTML = zero;
    }
    else if (isNaN(stake)){
        document.querySelector("#confirmation").innerHTML = numeric;
    }
    else if (!testexpression.test(stake)){
        document.querySelector("#confirmation").innerHTML = decimals;
    }
    else{
        document.querySelector("#confirmation").innerHTML = confirmation;
    }
}


//5a Viktoriia Mikhailova menu nav bar bootstrap
//deklarera variabeln menuPageName + tilldela en array av objekt
const menuPageName = [
    { name: "Home", href: "index.html" },
    { name: "Memory game", href: "startfirstgame.html" },
    { name: "Rock-Paper-Scissors", href: "startsecondgame.html" },
    { name: "Gallery", href: "gallery.html" },
    { name: "Change color", href: "color.html" }
  ];

  // function Create menu
 function createMenu() {
    const navbarNav = document.querySelector('#navbarNav .navbar-nav');
    navbarNav.innerHTML = ''; // Clear menu om behövs?

    menuPageName.forEach(PageName => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      li.classList.add('nav-item');
      a.classList.add('nav-link');
      a.href = PageName.href;
      a.textContent = PageName.name;
      li.appendChild(a);
      navbarNav.appendChild(li);
    });
 }  

 /*my test alternativ
   
function createMenu() {
    const navbarNav = document.querySelector('#navbarNav .navbar-nav');
    navbarNav.innerHTML = menuPageName.map(PageName => 
      `<li class="nav-item"><a class="nav-link" href="${PageName.href}">${PageName.name}</a></li>`
    ).join('');
  }
    
*/

// Start create menu - load page
document.addEventListener('DOMContentLoaded', createMenu);
// + musik.js
  