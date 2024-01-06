let countdown;
const weeksDisplay = document.getElementById('weeks');
const daysDisplay = document.getElementById('days');
const minsDisplay = document.getElementById('mins');
const secondsDisplay = document.getElementById('seconds');
const datePicker = document.getElementById('datePicker');

datePicker.addEventListener('change', function() {
    const chosenDate = new Date(this.value);
    countdown = Math.floor((chosenDate - new Date()) / 1000);
    this.blur(); // This will close the date picker
});

setInterval(() => {
    if (countdown > 0) {
        const weeks = Math.floor(countdown / (3600 * 24 * 7));
        const days = Math.floor((countdown % (3600 * 24 * 7)) / (3600 * 24));
        const hours = Math.floor((countdown % (3600 * 24)) / 3600);
        const minutes = Math.floor((countdown % 3600) / 60);
        const seconds = countdown % 60;
        weeksDisplay.textContent = weeks.toString().padStart(2, '0');
        daysDisplay.textContent = days.toString().padStart(2, '0');
        minsDisplay.textContent = hours.toString().padStart(2, '0');
        secondsDisplay.textContent = seconds.toString().padStart(2, '0');
        countdown--;
    } else {
        weeksDisplay.textContent = "00";
        daysDisplay.textContent = "00";
        minsDisplay.textContent = "00";
        secondsDisplay.textContent = "00";
    }
}, 1000);