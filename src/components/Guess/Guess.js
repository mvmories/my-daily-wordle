import React from "react";
import UserGuessText from "../UserGuessText/UserGuessText";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess({ guessList, answer }) {
  return (
    <div className="guess-results">
      <UserGuessText answer={answer}>{guessList}</UserGuessText>

      {range(NUM_OF_GUESSES_ALLOWED - guessList?.length).map(() => (
        <p key={crypto.randomUUID()} className="guess">
          {range(5).map(() => (
            <span key={crypto.randomUUID()} className="cell">
              {""}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guess;
