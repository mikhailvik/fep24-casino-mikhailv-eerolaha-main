//2b Hannes Eerola = gametime.html

document.getElementById('startButton').addEventListener('click', function()
{

const clock = document.querySelector("#time").value;
const now = new Date();  //method for getting the time that is right now
const hours = now.getHours().toString().padStart(2, '0'); // padStart makes sure that the hours, minutes and seconds are expressed as two numbers, so if it is under 10, there is a zero before
const minutes = now.getMinutes().toString().padStart(2, '0');
const seconds = now.getSeconds().toString().padStart(2, '0');

//making a reminder for how much time has been chosen, which looks a little different depending on the time chosen. Also setting the chosen time as a changing variable, which is needed later for showing time left and the timer
let reminderUnderhour = `Time chosen: ${0}0 hours, ${clock} minutes. Press the button when you want to start playing!`
let reminderHour = `Time chosen: 0${clock/60} hours, ${clock-clock}0 minutes. Press the button when you want to start playing!`;
let reminderHourPlus = `Time chosen: 0${clock/clock} hours, ${clock-60} minutes. Press the button when you want to start playing!`;

if (clock == "30"){
    document.querySelector("#reminder").innerHTML = reminderUnderhour;
}
else if (clock =="45"){
    document.querySelector("#reminder").innerHTML = reminderUnderhour;
}
else if (clock =="60"){
    document.querySelector("#reminder").innerHTML = reminderHour;
}
else if (clock =="90"){
    document.querySelector("#reminder").innerHTML = reminderHourPlus;
}
else if (clock =="120"){
    document.querySelector("#reminder").innerHTML = reminderHour;
}
else if (clock == "180"){
    document.querySelector("#reminder").innerHTML = reminderHour;
}

//getting the time that is right now to be displayed
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('timeDisplay').textContent = `Current Time: ${currentTime}`;

    //determining how to calculate the correct time after 
    function calcQuitTime(clock){
    let newHours = parseInt(now.getHours()) + Math.floor(clock / 60);
    let newMinutes = parseInt(now.getMinutes()) + Math.floor(clock % 60);

    //method of accumulating the right amount of hours and minutes to the session end time
    if (newMinutes >= 60){          
        newHours += Math.floor(newMinutes/60);
        newMinutes = newMinutes - 60;
    }
    else if(newMinutes >= 120){
        newHours += Math.floor(newMinutes/60);
        newMinutes = newMinutes - 120;
    }
    else if (newMinutes >= 180){
        newHours += Math.floor(newMinutes/60);
        newMinutes = newMinutes - 180;
    }
    else if (newHours >= 24){
        newHours = (newHours-24)
    }
    else{
    newHours = newHours;
    newMinutes = newMinutes;
    }

    let formattedHours = String(newHours).padStart(2, '0');
    let formattedMinutes = String(newMinutes).padStart(2, '0');
    return `Session ends at time: ${formattedHours}:${formattedMinutes}:${seconds}` // display session end time 
    }


    const endTime = calcQuitTime(clock)
    document.getElementById('forLaters').textContent = endTime;

//setting the timer as one that is dependent on the choice of session length, and as something that ticks downwards without the possibility to pause the timer
    let countDownTime = clock * 60;
    let playTimer = null;

    function startCountdown(countDownTime) {
        playTimer = setInterval(() => {
        let finalHours = Math.floor(countDownTime / 3600);
        let finalMinutes = Math.floor((countDownTime % 3600)/60);
        let finalSeconds = countDownTime % 60;

        let formatTime =
            String(finalHours).padStart(2, '0') + ':' + //again using padStart to make sure that the hours, minutes and seconds are displayed as two digits
            String(finalMinutes).padStart(2, '0') + ':' + 
            String(finalSeconds).padStart(2, '0');

        document.querySelector('#countdownDisplay').innerText = `Time remaining: ` + formatTime; //what the user sees
        countDownTime--;  // the count down function

        if (countDownTime == 0){
            clearInterval(timerInterval);
            playTimer = null;
            document.body.innerHTML = ""; //make the page go blank, hinder usage
            return;
        }
    }, 1000); //ensure that the timer update is fast enough(per millisecond)
}
    document.getElementById('startButton').addEventListener('click', () => startCountdown(countDownTime)); //making the user click to verify time, then the timer can start
});



