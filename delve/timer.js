
var timerRunning = false;
var timerID=null;
const TIMER_TICK_MS = 20;
var lastTimerTick = Date.now();
const INITIAL_TIMER_MS = 15 * 60 * 1000;
var timerMS = INITIAL_TIMER_MS;
setInterval(tickTimer, TIMER_TICK_MS);

function resetTimer() {
    timerMS = INITIAL_TIMER_MS;
    renderTimer();
}
function startTimer() {
    timerRunning = true;
    // pauseButton = document.getElementById("pause-button").style.display = "block";
    // pauseButton = document.getElementById("resume-button").style.display = "none";
}
function pauseTimer() {
    timerRunning = false;
    // pauseButton = document.getElementById("pause-button").style.display = "none";
    // pauseButton = document.getElementById("resume-button").style.display = "block";
}
function toggleTimer() {
    timerRunning = !timerRunning;
    renderTimer();
}
function tickTimer() {
    let newTimerTick = Date.now();
    // Only run the timer if unpaused and you're in the delve.
    if (timerRunning && (currentPage=="in-delve"||currentPage=="split")) {
        timerMS -= (newTimerTick-lastTimerTick);
        renderTimer();
    }
    lastTimerTick = newTimerTick;
}
function renderTimer() {
    let ms = timerMS;
    let nonnegative = ms >= 0;
    let absms = Math.abs(ms);
    let minutes;
    let seconds;
    if (nonnegative) {
        minutes = Math.floor(absms / (1000 * 60));
        seconds = Math.floor((absms % (1000 * 60)) / 1000);    
    } else {
        minutes = Math.floor(absms / (1000 * 60));
        seconds = Math.ceil((absms % (1000 * 60)) / 1000);    
    }
    delveTimer = document.getElementById("delve-timer");
    delveTimer.innerHTML = (nonnegative?"":"-") + minutes + ":" + seconds.toString().padStart(2, "0");
    if (nonnegative) {
        delveTimer.classList.add("normal-timer");
        delveTimer.classList.remove("negative-timer");
    } else {
        delveTimer.classList.add("negative-timer");
        delveTimer.classList.remove("normal-timer");
    }

    let clock = document.getElementById("clock-pane");
    if (timerRunning) {
        clock.classList.remove("inactive");
        clock.classList.add("active");
    } else {
        clock.classList.remove("active");
        clock.classList.add("inactive");
    }

    // TODO: optimize?
    renderResumeCode();
}