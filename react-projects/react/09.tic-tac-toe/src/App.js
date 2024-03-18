import { useState } from 'react';

// Square component represents each square on the Tic Tac Toe board.
// It receives 'value' (X, O, or null) as a prop to display and an 'onSquareClick' callback as a prop to handle clicks.
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// Board component represents the Tic Tac Toe board.
// It receives 'xIsNext' (boolean) to determine which player's turn it is, 
// 'squares' (array) representing the state of the board, and 'onPlay' (function) to update the state upon playing a move.
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    // Prevent further clicks if there's already a winner or the square is filled.
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O'; // Set the square based on whose turn it is.
    onPlay(nextSquares); // Pass the new state of squares to the Game component to update.
  }

  // Calculate and display the game status.
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// Game component orchestrates the Tic Tac Toe game.
// It maintains the 'history' of the game's state and the 'currentMove' to navigate through the history.
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]); // Initial state is an array of 9 nulls, representing an empty board.
  const [currentMove, setCurrentMove] = useState(0); // Tracks the current move number for navigating history.
  const xIsNext = currentMove % 2 === 0; // Determines whose turn it is based on the parity of 'currentMove'.
  const currentSquares = history[currentMove]; // Retrieves the current board state from history.

  // Updates the game state ('history' and 'currentMove') when a player makes a move.
  function handlePlay(nextSquares) {
    const nextHistory = history.slice(0, currentMove + 1).concat([nextSquares]); // Truncate the history if moving back before adding the new move.
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1); // Update the move number to the latest move.
  }

  // Allows players to jump to a past move.
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // Maps over the 'history' to create a list of moves that the player can navigate to.
  const moves = history.map((squares, move) => {
    const description = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// Helper function to calculate the winner of the game.
function calculateWinner(squares) {
  const lines = [ // Winning combinations
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Returns 'X' or 'O' if a winner is found.
    }
  }
  return null; // Returns null if no winner.
}
