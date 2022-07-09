import React from "react";
import { Square } from "./Square";
import "./GameBoard.css";
import { useState } from "react";

export const GameBoard = () => {
  const currentState = {
    allSquares: Array(9).fill(null),
    xIsNext: true,
  };

  const [state, setState] = useState(currentState);

  const onFill = (id) => {
    const allSquares = state.allSquares.slice();
    if (allSquares[id] || findWinner(allSquares)) {
      return;
    }
    allSquares[id] = state.xIsNext ? "X" : "0";

    console.log(id);
    setState({
      allSquares: allSquares,
      xIsNext: !state.xIsNext,
    });
  };

  const returnSquare = (id) => {
    return <Square value={state.allSquares[id]} onClick={() => onFill(id)} />;
  };

  const findWinner = (allSquares) => {
    const winnersCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winnersCombinations.length; i++) {
      const [a, b, c] = winnersCombinations[i];
      if (
        allSquares[a] &&
        allSquares[a] === allSquares[b] &&
        allSquares[a] === allSquares[c]
      ) {
        return allSquares[a];
      }
    }
    return null;
  };

  const winner = findWinner(state.allSquares);
  let status;
  if (winner) {
    status = "Winner is player " + winner;
  } else {
    status = "Next step: " + (state.xIsNext ? "X" : "O");
  }

  return (
    <div className="wrapper">
      <h3>{status}</h3>
      <div className="section sectionOne">
        {returnSquare(0)}
        {returnSquare(1)}
        {returnSquare(2)}
      </div>
      <div className="section sectionTwo">
        {returnSquare(3)}
        {returnSquare(4)}
        {returnSquare(5)}
      </div>
      <div className="section sectionThree">
        {returnSquare(6)}
        {returnSquare(7)}
        {returnSquare(8)}
      </div>
    </div>
  );
};
