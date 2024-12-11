//3a Hannes Eerola = color.html
document.addEventListener('DOMContentLoaded', (event) => { // Väntar tills hela dokumentet har laddats
    const slider1 = document.getElementById('slider1'); // Hämtar elementet med id 'slider1'
    const slider2 = document.getElementById('slider2'); // Hämtar elementet med id 'slider2'
    const slider3 = document.getElementById('slider3'); // Hämtar elementet med id 'slider3'
    const slider4 = document.getElementById('slider4'); // Hämtar elementet med id 'slider4'
    const slider5 = document.getElementById('slider5'); // Hämtar elementet med id 'slider5'
    const slider6 = document.getElementById('slider6'); // Hämtar elementet med id 'slider6'
    const heading = document.querySelector('h1'); // Hämtar första h1-elementet
    const colorSelect = document.getElementById('colorSelect'); // Hämtar elementet med id 'colorSelect'
    const colorPicker = document.getElementById('colorPicker'); // Hämtar elementet med id 'colorPicker'
    const saveColorButton = document.getElementById('saveColorButton') // Hämtar elementet med id 'saveColorButton'

    loadSavedColors(); // Laddar sparade färger

    function changeColors() {
        const color = colorSelect.value; // Hämtar valt färg från dropdown-menyn
        switch (color) {
            case 'red': setRGBValues(255, 0, 0); break; // Sätter RGB-värden för röd
            case 'blue': setRGBValues(0, 0, 255); break; // Sätter RGB-värden för blå
            case 'yellow': setRGBValues(255, 255, 0); break; // Sätter RGB-värden för gul
            case 'green': setRGBValues(0, 255, 0); break; // Sätter RGB-värden för grön
            case 'black': setRGBValues(0, 0, 0); break; // Sätter RGB-värden för svart
            case 'white': setRGBValues(255, 255, 255); break; // Sätter RGB-värden för vit
            case 'purple': setRGBValues(255, 0, 255); break; // Sätter RGB-värden för lila
            case 'orange': setRGBValues(255, 165, 0); break; // Sätter RGB-värden för orange
            case 'custom': return; // Gör inget om 'custom' är valt
            default: 
            const savedColor = JSON.parse(localStorage.getItem(color));
            if (savedColor) {
                defineRGBValues(savedColor.pageColor, savedColor.fontColor);
            }
        }
        updateBackgroundColor(); // Uppdaterar bakgrundsfärgen
    }
    function defineRGBValues(pageColor, fontColor)
    {
        const [r, g, b] = pageColor.match(/\d+/g); // fångar upp den valda nya färgen och anropar den nya färgen med dess värden för R, G och B.
        const [R, G, B] = fontColor.match(/\d+/g); // fångar upp den valda nya textfärgen och anropar den nya färgen med dess värden för R, G och B.
        setRGBValues(r, g, b); 
        setFontRGBvalues(R, G, B)
        updateBackgroundColor();
        updateFontColor();
    }

    function setRGBValues(r, g, b) {
        slider1.value = r; // Sätter värdet för slider1
        slider2.value = g; // Sätter värdet för slider2
        slider3.value = b; // Sätter värdet för slider3
    }

    function setFontRGBvalues(R, G, B){
        slider4.value = R; // Sätter värdet för slider4 (kan användas för textfärg)
        slider5.value = G; // Sätter värdet för slider5
        slider6.value = B; // Sätter värdet för slider6
    }

    function updateBackgroundColor() {
        const rValue = slider1.value; // Hämtar värdet från slider1
        const gValue = slider2.value; // Hämtar värdet från slider2
        const bValue = slider3.value; // Hämtar värdet från slider3
        document.body.style.backgroundColor = `rgb(${rValue}, ${gValue}, ${bValue})`; // Sätter bakgrundsfärgen
    }

    function updateFontColor() {
        const fontR = slider4.value; // Hämtar värdet från slider4
        const fontG = slider5.value; // Hämtar värdet från slider5
        const fontB = slider6.value; // Hämtar värdet från slider6
        heading.style.color = `rgb(${fontR}, ${fontG}, ${fontB})`; // Sätter textfärgen
    }

    function saveColor() {
        const colorName = prompt("Enter a name for this color shade:"); // Ber användaren att ange ett namn för färgen
        if(colorName) {
            const rValue = slider1.value; // Hämtar värdet från slider1
            const gValue = slider2.value; // Hämtar värdet från slider2
            const bValue = slider3.value; // Hämtar värdet från slider3
            const fontR = slider4.value; // Hämtar värdet från slider4
            const fontG = slider5.value; // Hämtar värdet från slider5
            const fontB = slider6.value; // Hämtar värdet från slider6

            const pageColor = `rgb(${rValue}, ${gValue}, ${bValue})`; // Skapar RGB-sträng för bakgrundsfärg
            const fontColor= `rgb(${fontR}, ${fontG}, ${fontB})`; // Skapar RGB-sträng för textfärg

            const colorShades = { pageColor, fontColor }; // Skapar ett objekt med färgerna

            localStorage.setItem(colorName, JSON.stringify(colorShades)); // Sparar färgerna i localStorage
            alert(`Color settings "${colorName}" saved`); // Visar en alert meddelande
            const newOption = document.createElement('option');
            newOption.value = colorName;
            newOption.text = colorName;
            colorSelect.add(newOption);
        }
    }

        function loadSavedColors()
        {
        for (let i = 0; i < localStorage.length; i++)   // Loop som går igenom alla objekt i localStorage
        {
            const key = localStorage.key(i); // Identifierar och hämtar namnet för nya färgen i localStorage
            if (key !== 'pageColor' && key !== 'fontColor' && key !== 'selectedColor') // Kollar att namnet är något nytt som inte finns från förr
            {
                const newOption = document.createElement('option'); // Skapar ett nytt val för dropdown-menyn
                newOption.value = key; // Binder värdet på det nya valet till namnet från localStorage
                newOption.text = key;  // Sätter det namn som visas som visas i drop-down menyn till att vara namnet från localStorage
                colorSelect.add(newOption); // lägger till nya färgen till dropdown-menyn
            }
        }
    }

    colorSelect.addEventListener('change', changeColors); // Lägger till en event listener för färgändring
    slider1.addEventListener('input', updateBackgroundColor); // Lägger till en event listener för slider1
    slider2.addEventListener('input', updateBackgroundColor); // Lägger till en event listener för slider2
    slider3.addEventListener('input', updateBackgroundColor); // Lägger till en event listener för slider3
    slider4.addEventListener('input', updateFontColor); // Lägger till en event listener för slider4
    slider5.addEventListener('input', updateFontColor); // Lägger till en event listener för slider5
    slider6.addEventListener('input', updateFontColor); // Lägger till en event listener för slider6
    colorPicker.addEventListener('input', (event) => { // Lägger till en event listener för färgplockaren
        const CustomizedColor = event.target.value; // Hämtar den valda färgen
        document.body.style.backgroundColor = CustomizedColor; // Sätter bakgrundsfärgen
    });
    saveColorButton.addEventListener('click', saveColor); // säkerställer att knappen save color leder till konkreta konsekvenser
});