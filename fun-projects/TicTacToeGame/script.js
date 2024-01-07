const boardElement = document.getElementById('board');
const winnerMessage = document.getElementById('winner-message');
const confettiElement = document.getElementById('confetti');
const ctx = confettiElement.getContext('2d');

confettiElement.width = window.innerWidth;
confettiElement.height = window.innerHeight;

let board = [['', '', ''], ['', '', ''], ['', '', '']];
let currentPlayer = '🤪';

// Initialize board
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', () => handleCellClick(i, j));
        boardElement.appendChild(cell);
    }
}

function handleCellClick(row, col) {
    if (board[row][col] !== '') return;

    board[row][col] = currentPlayer;
    renderBoard();

    if (checkWinner(row, col)) {
        winnerMessage.textContent = `${currentPlayer} is the winner!`;
        fireConfetti();
        return;
    }

    currentPlayer = currentPlayer === '🤪' ? '🥳' : '🤪';
}

function renderBoard() {
    let idx = 0;
    board.forEach(row => {
        row.forEach(cell => {
            const cellElement = boardElement.children[idx];
            cellElement.textContent = cell;
            cellElement.classList.remove('🤪', '🥳');  // Clear existing classes
            if (cell) {
                cellElement.classList.add(cell.toLowerCase());  // Add the new class
            }
            idx++;
        });
    });
}

function checkWinner(row, col) {
    if (board[row].every(cell => cell === currentPlayer)) return true;
    if (board.every(row => row[col] === currentPlayer)) return true;
    if (row === col && board.every((row, index) => row[index] === currentPlayer)) return true;
    if (row + col === 2 && board.every((row, index) => row[2 - index] === currentPlayer)) return true;

    return false;
}

function fireConfetti() {
    let confettiParticles = Array.from({ length: 100 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: 0,
        radius: Math.random() * 10 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 + 1,
        color: getRandomPastelColor(),
        shape: Math.random() < 0.5 ? "circle" : "square",
    }));

    const animateConfetti = () => {
        ctx.clearRect(0, 0, confettiElement.width, confettiElement.height);

        confettiParticles.forEach(particle => {
            ctx.fillStyle = particle.color;
            if (particle.shape === "circle") {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.fillRect(particle.x, particle.y, particle.radius * 2, particle.radius * 2);
            }

            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.y > window.innerHeight) {
                particle.y = 0;
                particle.x = Math.random() * window.innerWidth;
            }
        });

        requestAnimationFrame(animateConfetti);
    };

    animateConfetti();
}

function getRandomPastelColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
