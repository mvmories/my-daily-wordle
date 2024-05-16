import { useState, useEffect } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import UserInput from "../UserInput/UserInput";
import Guess from "../Guess/Guess";
import Banner from "../Banner/Banner";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });



function Game() {
  const [guessList, setGuessList] = useState([]);
  const [guess, setGuess] = useState("");
  const [gameWon, setGameWon] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  console.info({ gameFinished });
  console.info({ gameWon });
  console.info( guessList.length );

  function handleFormSubmit(e) {
    e.preventDefault();
    console.info({ guess });
    setGuess("");
    const newGuessList = [...guessList, guess];
    setGuessList(newGuessList);


    if (checkCorrectLetters(guess, answer) === true) {
      setGameFinished(true);
      setGameWon(true);
    } else if(newGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      console.log("entered here")
      setGameFinished(true);
      setGameWon(false);
    } else {
      setGameFinished(false);
    }
  }

  function checkCorrectLetters(guess, answer) {
    const result = checkGuess(guess, answer)?.filter(
      (char) => char.status === "correct"
    );
    return result?.length === 5 ? true : false;
  }

  return (
    <>
      <Guess guessList={guessList} answer={answer} />
      <UserInput
        guess={guess}
        setGuess={setGuess}
        handleFormSubmit={handleFormSubmit}
        guessList={guessList}
      />

      <Banner answer={answer} guesses={guessList.length} gameWon={gameWon} gameFinished={gameFinished} />
    </>
  );
}

export default Game;
