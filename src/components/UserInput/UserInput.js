import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function UserInput({ handleFormSubmit, guess, setGuess, guessList}) {

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={handleFormSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        title="Please enter a guess of exactly 5 characters."
        pattern="[A-Za-z]{5}"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        disabled={guessList?.length >= NUM_OF_GUESSES_ALLOWED}
      />
    </form>
  );
}

export default UserInput;
