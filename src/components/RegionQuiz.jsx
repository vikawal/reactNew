import useFetch from "./useFetch";
import React, { useState } from 'react';
import './styles/spinner.css';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

function RegionQuiz() {
  const { data: countries, loading, error } = useFetch('https://restcountries.com/v3.1/all?fields=name,region,flags');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  function startGame () {
    setGameStarted(true);
    setCurrentQuestion(0);
    setScore(0);
  }

  function handleAnswer(answer) {
  const correctAnswer = countries[currentQuestion].region;
  if (correctAnswer.includes(answer)) {
    console.log('Correct answer');
    setScore(score + 1);
  } else {
    console.log('Incorrect answer');
  }
  setCurrentQuestion(currentQuestion + 1);
}

  function resetGame () {
    setGameStarted(false);
    setCurrentQuestion(0);
    setScore(0);
  }

  function renderQuestion() {
    const questionCountry = countries[currentQuestion];
    const correctAnswer = questionCountry.region;
    const allAnswers = regions.sort(() => Math.random() - 0.5);
  
    return (
      <div>
        <h2>Question {currentQuestion + 1}</h2>
        <h3>In which region is {questionCountry.name.common} located?</h3>
        {allAnswers.map((answer) => (
          answer !== correctAnswer && <button key={answer} onClick={() => handleAnswer(answer)}>{answer}</button>
        ))}
        <button key={correctAnswer} onClick={() => handleAnswer(correctAnswer)}>{correctAnswer}</button>
      </div>
    );
  }

  function renderScore () {
    return (
      <div>
        <h2>Your score: {score} out of {currentQuestion}</h2>
        <button onClick={resetGame}>Play Again</button>
        <button onClick={() => window.location.href='/'}>Return to HomePage</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Quiz App</h1>
      <h2>Guess the region of a country</h2>
      {!gameStarted && <button onClick={startGame}> Start Game</button>}
      {gameStarted && currentQuestion < 10 && renderQuestion()}
      {gameStarted && currentQuestion >= 10 && renderScore()}
    </div>
  );
}

export default RegionQuiz;

// import useFetch from "./useFetch";
// import React from 'react';
// import './styles/spinner.css';


// function RegionQuiz() {
//   const { data: countries, loading, error } = useFetch('https://restcountries.com/v3.1/all?fields=name,region,flags');
//   if (loading) return <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
//   if (error) return <p className="error-message">{error}</p>;
//   return (
//     <div>
//       <h1>Quiz App. </h1>
//       <h2>Guess the capital of a country</h2>
//       {countries.map(country => (
//         <div key={country.name.common}>
//           <h2>{country.name.common}</h2>
//           {country.region && country.region.length > 0 ? (
//             <p>Region: {country.region}</p>
//           ) : (
//             <p>Region: Not available</p>
//           )}
//           <img src={country.flags.png} alt={country.name.common} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default RegionQuiz;