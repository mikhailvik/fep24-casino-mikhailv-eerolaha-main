// Funktion skickar formuläret
function createUser() {
   // Get values ​​from the input - fields
    let name = document.getElementById('username').value;
    let lastname = document.getElementById('userlastname').value;
    
   // Check if both fields are filled!
    if (name === "" || lastname === "") {
        alert("Write your name and lastname please!");
        return;
    }

    let userName = lastname.toLowerCase().substring(0, 5) + name.toLowerCase().charAt(0);

    document.getElementById('answer').innerHTML = "Välkommen " + name + ". Ditt användarnamn är " + userName;
    document.getElementById('answer').style = "color:#ffffff";

}

function addButtonWithLink() {
    // Skapa ett nytt knappelement
    var button = document.createElement("button");
    
   // Lägg till text på knappen
    button.innerHTML = "Start game";
    
    button.onclick = function() {
       // När knappen trycks, gå till en annan sida
        window.location.href = "firstgame.html"; 
    };

   // Hitta elementet med id="button-container" och lägg till en knapp till det
    document.getElementById("button-container").appendChild(button);
}