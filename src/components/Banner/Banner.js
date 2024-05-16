import React from "react";

function Banner({ answer, guesses, gameFinished, gameWon }) {

  return (
    <>
    {gameFinished && gameWon ? (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guesses} guesses</strong>.
      </p>
    </div>
  ) : gameFinished && !gameWon ? (
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  ) : null}
    </>
);
}

export default Banner;
