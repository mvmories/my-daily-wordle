import React from "react";
import {checkGuess} from '../../game-helpers';

function UserGuessText({ children, answer }) {
  console.log({answer})

  return (
    <>
      {children &&
        children?.map((child) => (
          <p key={crypto.randomUUID()} className="guess">
            {checkGuess(child, answer).map((char) => (
              <span key={crypto.randomUUID()} className={`cell ${char.status}`}>
              {char.letter}
              </span>
            ))}
          </p>
        ))}
    </>
  );
}

export default UserGuessText;
