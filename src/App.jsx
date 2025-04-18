import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <main>
        <UserInput userInput={userInput} onChange={handleChange} />
        {!inputIsValid && (
          <p className="center">
            Invalid input. Please enter a duration of at least 1 year.
          </p>
        )}
        {inputIsValid && <Results input={userInput} />}
      </main>
    </>
  );
}

export default App;
