import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import UserInput from './components/UserInput/UserInput.jsx';
import Results from './components/Results/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handlerChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header></Header>
      <UserInput
        userInput={userInput}
        onChangeInput={handlerChange}
      ></UserInput>
      {!inputIsValid && (
        <p className="center">Please enter a duration greater then zero</p>
      )}
      {inputIsValid && <Results input={userInput}></Results>}
    </>
  );
}

export default App;
