export default function GameBoard({ onSelectSquare, board }) {
  //we get rid of the activeplayersymbol prop here
  /*const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      //objects and arrays are reference values in js so you should not mutate them directly instead create a deep copy first
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      // updatedBoard[rowIndex][colIndex] = "X";
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;

      return updatedBoard;
    });

    onSelectSquare(); //defined in the app component
  }*/
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {/* <button onClick={() => handleSelectSquare(rowIndex, colIndex)}> */}
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
