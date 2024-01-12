const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value;

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = Array.from(selectedSeats).map(seat => Array.from(seats).indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    const selectedSeatsCount = selectedSeats.length;
    count.textContent = selectedSeatsCount;
    total.textContent = selectedSeatsCount * ticketPrice;
    setMovieData(movieSelect.selectedIndex, movieSelect.value);
}

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if (selectedSeats && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.includes(index)) {
                seat.classList.add('selected');
            }
        });
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

container.addEventListener('click', e => {
    const isSeat = e.target.classList.contains('seat');
    const isOccupied = e.target.classList.contains('occupied');
    if (isSeat && !isOccupied) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

// Initial count and total set
updateSelectedCount();
