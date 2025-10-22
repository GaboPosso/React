const { useState } = React;

export function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [gameOver, setGameOver] = useState(false);

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],  // Top row
            [3, 4, 5],  // Middle row  
            [6, 7, 8],  // Bottom row
            [0, 3, 6],  // Left column
            [1, 4, 7],  // Middle column
            [2, 5, 8],  // Right column
            [0, 4, 8],  // Diagonal top-left to bottom-right
            [2, 4, 6],  // Diagonal top-right to bottom-left
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const handleClick = (i) => {
        if (squares[i] || gameOver) return;

        const newSquares = squares.slice();
        newSquares[i] = isXNext ? 'X' : 'O';
        setSquares(newSquares);
        setIsXNext(!isXNext);

        const winner = calculateWinner(newSquares);
        if (winner) {
            setGameOver(true);
        } else if (newSquares.every(square => square !== null)) {
            setGameOver(true);
        }
    };

    const handleReset = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
        setGameOver(false);
    };

    const winner = calculateWinner(squares);
    const isDraw = !winner && squares.every(square => square !== null);

    // Create 3x3 grid structure
    const renderSquare = (i) => (
        <button
            className="square"
            key={i}
            onClick={() => handleClick(i)}
            disabled={squares[i] || gameOver}
        >
            {squares[i]}
        </button>
    );

    const getStatus = () => {
        if (winner) {
            return `Winner: ${winner}`;
        } else if (isDraw) {
            return "It's a Draw!";
        } else {
            return `Next Player: ${isXNext ? 'X' : 'O'}`;
        }
    };

    return (
        <div>
            <h1>Tic Tac Toe Game</h1>
            <div className="board">
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            <div className="status">{getStatus()}</div>
            <button id="reset" onClick={handleReset}>
                Reset Game
            </button>
        </div>
    );
}