let clockH = document.querySelector('.clock__hours');
let clockM = document.querySelector('.clock__minutes');
let clockS = document.querySelector('.clock__seconds');
let finalDate = new Date('Jan 1, 2022 00:00:00');
let countdownDays = document.querySelector('.countdown__days');
let countdownHours = document.querySelector('.countdown__hours');
let countdownMinutes = document.querySelector('.countdown__minutes');
let countdownSeconds = document.querySelector('.countdown__seconds');

let startClock = () => {
    updateTime();
    updateCountdown();
    setInterval(() =>{
        updateTime();
        updateCountdown();
    }, 1000);
}

let updateTime = () => {
    let now = new Date();
    let hours = now.getHours() % 12;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    clockH.style.transform = `rotate(${360 / 12 * hours + 30 / 60 * minutes}deg)`
    clockM.style.transform = `rotate(${360 / 60 * minutes + 6 / 60 * seconds}deg)`
    clockS.style.transform = `rotate(${360 / 60 * seconds}deg)`
}

let updateCountdown = () => {
    let now = new Date();
    let diff = finalDate - now;
    let result = convertMillisToDHMS(diff);
    countdownDays.textContent = result.days >= 10? result.days : '0' + result.days;
    countdownHours.textContent = result.hours >= 10? result.hours : '0' + result.hours;
    countdownMinutes.textContent = result.minutes >= 10? result.minutes : '0' + result.minutes;
    countdownSeconds.textContent = result.seconds >= 10? result.seconds : '0' + result.seconds;
    //console.log(convertMillisToDHMS(diff));
}

let convertMillisToDHMS = (milli) => {
    let secondTotal = Math.floor(milli / 1000);
    let days = Math.floor(secondTotal / 86400);
    let hours = Math.floor((secondTotal - days * 86400) / 3600);
    let minutes = Math.floor((secondTotal - days * 86400 - hours * 3600) / 60);
    let seconds = secondTotal - days * 86400 - hours * 3600 - minutes * 60;
    //console.log("result: "days + "days, " + hours + "hours, " + minutes + "minutes, " + seconds + "seconds")
    return {days, hours, minutes, seconds};
}

startClock();