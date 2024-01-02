const clockContainer = document.querySelector('.clock');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function rotateClockHands() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const hourRotation = (hours * 30) + (minutes / 2);
    const minuteRotation = (minutes * 6) + (seconds / 10);
    const secondRotation = seconds * 6;

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

setInterval(rotateClockHands, 1000);
