import React, { useState } from 'react';
import './styles/spinner.css';
import './styles/quiz.css';
import useShuffleFetch from './useShuffleFetch';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

function RegionQuiz() {
  const { data: countries, loading, error, refetch } = useShuffleFetch(
    "https://restcountries.com/v3.1/all?fields=name,region,flags"
  );
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
    const correctAnswer = questionCountry.region;
    const allAnswers = regions.filter(region => region !== correctAnswer);
    const shuffledAnswers = shuffle([...allAnswers, correctAnswer]);
  
    return (
      <div className="container">
        <h2 className="subtitle">Question {currentQuestion + 1}</h2>
        <h3 className="subtitle">In which region is {questionCountry.name.common} located?</h3>
        <img className='flag' src={questionCountry.flags.png} alt={questionCountry.name.common} />
        {shuffledAnswers.map((answer, index) => (
          <div className="button-group" key={index} > 
            <button key={answer} onClick={() => handleAnswer(answer)}>{answer}</button>
          </div>
        ))}
      </div>
    );
  }
  
  function shuffle(array) {
    
    let currentIndex = array.length;
    let temporaryValue, randomIndex;
  
    
    while (currentIndex !== 0) {
  
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  function renderScore () {
    return (
      <div className="container">
        <h2 className="subtitle">Your score: {score} out of {currentQuestion}</h2>
        <div className="button-group">
          <button onClick={resetGame}>Play Again</button>
          <button onClick={() => window.location.href='/'}>Return to HomePage</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Quiz App</h1>
      <h2 className="subtitle">Guess the region of a country</h2>
      <div className="button-group">
        {!gameStarted && <button onClick={startGame}> Start Game</button>}
        {gameStarted && currentQuestion < 10 && renderQuestion()}
        {gameStarted && currentQuestion >= 10 && renderScore()}
      </div>
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