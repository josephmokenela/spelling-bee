import { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { useState } from 'react';
import { Fragment } from 'react';
import { Honeycomb } from './components/Honeycomb';

function App() {
  const [data, setData] = useState();

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
        <section className='container'>
          <div className='inputs'>
            <div className='center'>
              <Honeycomb 
              centerLetter={data.centerLetter}
              outerLetters={data.outerLetters}
              validLetters={data.validLetters} />
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
