import React, { useState } from 'react';
import data from './data';
function App() {
  const [text, setText] = useState([]);
  const [valueOfPara, setValueOfPara] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(valueOfPara);

    if (amount < 1) {
      amount = 1;
    } else if (amount > data.length - 1) {
      setValueOfPara(data.length - 1);
    }
    setText(data.slice(0, amount));
    setValueOfPara(0);
  };

  return (
    <main>
      <div className='section-center'>
        <h2>TIRED OF BORING LOREM IPSUM?</h2>
        <form onSubmit={handleSubmit} className='lorem-form'>
          <div>
            <label htmlFor='numberOfPara'>Paragraphs : </label>
            <input
              type='number'
              id='numberOfPara'
              name='numberOfPara'
              value={valueOfPara}
              onChange={(e) => setValueOfPara(e.target.value)}
            />
            <button type='submit' className='btn'>
              Generate
            </button>
          </div>
        </form>
      </div>
      <div className='section-center result'>{text}</div>
    </main>
  );
}

export default App;
