import { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { useState } from 'react';
import { Fragment } from 'react';
import { Honeycomb } from './components/Honeycomb';
import { Guess } from './components/Guess';
import { CorrectGuesses } from './components/CorrectGuesses';

function App() {
  const [data, setData] = useState();
  const [guess, setGuess] = useState('');
  const [correctGuesses, setCorrectGuesses] = useState([]);

  const addLetter = (letter) => {
    setGuess((g) => g + letter);
  }

  const removeLetter = () => {
    setGuess(guess.slice(0, -1));
  }

  const addCorrectGuess = () => {
    setCorrectGuesses([...correctGuesses, guess])
  }

  const checkGuess = () => {
    if (correctGuesses.includes(guess)){
      console.log('Already found');
    } else if (data.answers && data.answers.includes(guess)) {
      addCorrectGuess(guess);
      console.log('Good job');
    } else {
      console.log('Not in the list');
    }
    setGuess('');
  }

  useEffect(() => {
    async function fetchData() {
      const result = await fetch('/api/data.json', {
        headers: {
          "Content-Type": "application/json"
        }
      })
      const json = await result.json();
      setData(json.data.today);
    }
    fetchData();
  }, []);

  return (
    <>
      { 
      data ? 
      <Fragment>
        <Header date={data.displayDate} editor={data.editor} />
        <CorrectGuesses correctGuesses={correctGuesses} />
        <section className='container'>
          <div className='inputs'>
            <div className='center'>
              <Guess guess={guess} />
              <Honeycomb 
              centerLetter={data.centerLetter}
              outerLetters={data.outerLetters}
              validLetters={data.validLetters}
              addLetter={addLetter}
              removeLetter={removeLetter}
              checkGuess={checkGuess} />
            </div>
          </div>
        </section>
      </Fragment>
      : <p>Loading...</p>
    }
    </>
  );
}

export default App;
