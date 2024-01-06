let startTime;
let wordCount;

let typingTimer;
let typingInterval = 1000; // Adjust the interval as needed

document.getElementById('text').addEventListener('input', function() {
    clearTimeout(typingTimer);

    const text = this.value;
    const words = text.split(/\s+/).filter(word => word.length > 0);
    wordCount = words.length;

    if (wordCount === 0) {
        startTime = null;
        document.getElementById('time').textContent = 'Time: 0s';
        document.getElementById('wpm').textContent = 'WPM: 0';
    } else {
        startTime = startTime || Date.now();
        const currentTime = (Date.now() - startTime) / 1000;
        document.getElementById('time').textContent = `Time: ${currentTime.toFixed(2)}s`;

        typingTimer = setTimeout(() => {
            document.getElementById('wpm').textContent = `WPM: ${Math.floor((wordCount / currentTime) * 60)}`;
        }, typingInterval);
    }
});