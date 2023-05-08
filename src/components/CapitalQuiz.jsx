import React, { useState } from 'react';
import './styles/spinner.css';
import './styles/quiz.css';
import useShuffleFetch from './useShuffleFetch';


function CapitalQuiz() {
  const { data: countries, loading, error, refetch } = useShuffleFetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,flags"
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  function startGame() {
    setGameStarted(true);
    setCurrentQuestion(0);
    setScore(0);
  }

  function handleAnswer(answer) {
    const correctAnswer = countries[currentQuestion].capital[0];
    if (correctAnswer === answer) {
      console.log('Correct answer');
      setScore(score + 1);
    } else {
      console.log('Incorrect answer');
    }
    setCurrentQuestion(currentQuestion + 1);
  }

  function resetGame() {
    setGameStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    refetch(); 
  }

  function renderQuestion() {
    if (loading || error) {
      return null;
    }
  
    const questionCountry = countries[currentQuestion];
    const correctAnswer = questionCountry.capital[0];
    const allAnswers = countries
      .slice()
      .sort(() => Math.random() - 0.5) 
      .filter((country) => country.capital[0]) 
      .slice(0, 3)
      .map((country) => country.capital[0]);
    allAnswers.push(correctAnswer); 
    const shuffledAnswers = shuffle(allAnswers);
  
    return (
      <div className="container">
        <h2 className="subtitle">Question {currentQuestion + 1}</h2>
        <h3 className="subtitle">What is the capital of {questionCountry.name.common}?</h3>
        <img className='flag' src={questionCountry.flags.png} alt={questionCountry.name.common} />
        {shuffledAnswers.map((answer, index) => (
          <div className="button-group" key={index}>
            <button key={answer} onClick={() => handleAnswer(answer)}>
              {answer}
            </button>
          </div>
        ))}
      </div>
    );
  }

  function shuffle(array) {
    // Fisher-Yates shuffle algorithm !!!
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle
    while (currentIndex !== 0) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  function renderScore() {
    return (
      <div className="container">
        <h2 className="subtitle">
          Your score: {score} out of {currentQuestion}
        </h2>
        <div className="button-group">
          <button onClick={resetGame}>Play Again</button>
          <button onClick={() => (window.location.href = '/')}>
            Return to HomePage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Quiz App</h1>
      <h2 className="subtitle">Guess the capital of a country</h2>
      <div className="button-group">
        {!gameStarted && <button onClick={startGame}> Start Game</button>}
        {gameStarted && currentQuestion < 10 && renderQuestion()}
        {gameStarted && currentQuestion >= 10 && renderScore()}
      </div>
    </div>
  );
}

export default CapitalQuiz;

// import useFetch from "./useFetch";
// import React from 'react';
// import './styles/spinner.css';


// function CapitalQuiz() {
//   const { data: countries, loading, error } = useFetch('https://restcountries.com/v3.1/all?fields=name,capital,flags');
//   if (loading) return <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
//   if (error) return <p className="error-message">{error}</p>;
//   return (
//     <div>
//       <h1>Quiz App. </h1>
//       <h2>Guess the capital of a country</h2>
//       {countries.map(country => (
//         <div key={country.name.common}>
//           <h2>{country.name.common}</h2>
//           {country.capital && country.capital.length > 0 ? (
//             <p>Capital: {country.capital}</p>
//           ) : (
//             <p>Capital: Not available</p>
//           )}
//           <img src={country.flags.png} alt={country.name.common} width="200" />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CapitalQuiz;