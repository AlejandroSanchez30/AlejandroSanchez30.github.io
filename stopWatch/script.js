const time = document.getElementById('time');
const btnStart = document.getElementById('btnStart');
const btnPause = document.getElementById('btnPause');
const btnStop = document.getElementById('btnStop');
const btnLap = document.getElementById('btnLap');

const lapList = document.getElementById('lap-list');


//Utils

let [hours, minutes, seconds, miliseconds] = [0,0,0,0];

let interval = null;

let lapCounter = 0;

function initializeStopWatch()
{
    time.innerHTML="00:00:00:00";
    btnPause.classList.add('hide');
    btnStop.classList.add('hide');
    btnLap.classList.add('hide');

}

function main()
{
    miliseconds += 1;
    if(miliseconds == 100)
    {
        miliseconds = 0;
        seconds += 1;
        if(seconds == 60)
        {
            seconds = 0;
            minutes += 1;
            if(minutes == 60)
            {
                minutes = 0;
                hours += 1;
            }
        }
    }
    
    showTime();
}

function showTime(){
    const hoursFixed = hours < 10 ? "0" + hours : hours;
    const minutesFixed = minutes < 10 ? "0" + minutes : minutes;
    const secondsFixed = seconds < 10 ? "0" + seconds : seconds;
    const milisecondsFixed = miliseconds < 10 ? "0" + miliseconds : miliseconds;

    time.innerHTML = "";
    time.innerHTML = `${hoursFixed}:${minutesFixed}:${secondsFixed}:${milisecondsFixed} `
   
}


btnStart.addEventListener('click', () => {
    btnStart.classList.add('hide');
    btnPause.classList.remove('hide');
    btnStop.classList.add('hide');
    btnLap.classList.remove('hide');
    interval = setInterval(main, 10);    
});

btnPause.addEventListener('click', () => {
    clearInterval(interval);
    btnPause.classList.add('hide');
    btnStart.classList.remove('hide');
    btnStop.classList.remove('hide');
    btnLap.classList.add('hide');
});

btnStop.addEventListener('click', () => {
    initializeStopWatch();
    lapCounter = 0;
    lapList.innerHTML = '';
    [hours, minutes, seconds, miliseconds] = [0,0,0,0];
});

btnLap.addEventListener('click', () => {
    lapCounter += 1;
    const hoursFixed = hours < 10 ? "0" + hours : hours;
    const minutesFixed = minutes < 10 ? "0" + minutes : minutes;
    const secondsFixed = seconds < 10 ? "0" + seconds : seconds;
    const milisecondsFixed = miliseconds < 10 ? "0" + miliseconds : miliseconds;


    lapList.innerHTML += `<li class="lap">Lap ${lapCounter}: ${hoursFixed}:${minutesFixed}:${secondsFixed}:${milisecondsFixed}</li>`
});

initializeStopWatch();




