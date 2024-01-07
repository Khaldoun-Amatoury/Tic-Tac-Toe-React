# Tic-Tac-Toe Game in React

This is a simple Tic-Tac-Toe game built using React. The game allows two players to take turns marking squares on a 3x3 grid. The first player to get three of their marks in a row, column, or diagonal wins the game.

## Getting Started

To run the game, clone the repository and install the dependencies:

```
git clone https://github.com/Khaldoun-Amatoury/Tic-Tac-Toe-React.git
cd tic-tac-toe-react
npm install
```

Once the dependencies are installed, you can start the development server:

```
npm run dev
```

## Code Overview

The code for the game is organized into several components:

- `App.js`: This is the main component of the game. It contains the state of the game, such as the current player, the game board, and the winner. It also handles user interactions, such as selecting a square or restarting the game.
- `Player.js`: This component represents a player in the game. It displays the player's name and symbol, and allows the user to change the player's name.
- `GameBoard.js`: This component represents the game board. It displays the current state of the game board, and allows the user to select a square.
- `Log.js`: This component displays a log of the game turns.
- `GameOver.jsx`: This component displays a message when the game is over, and allows the user to restart the game.

## How to Play

To play the game, simply click on a square on the game board. The square will be marked with your symbol (X or O). If you get three of your marks in a row, column, or diagonal, you win the game.
