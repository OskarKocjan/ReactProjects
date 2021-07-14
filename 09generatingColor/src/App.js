import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [range, setRange] = useState(10);
  const [list, setList] = useState(new Values('#f15025').all(range));

  const handleSubmit = (e) => {
    e.preventDefault();
    let division = parseInt(range);
    try {
      console.log(range);
      let colors = new Values(color).all(division);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            placeholder='#f15025'
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? 'error' : null}`}
          />
          <label htmlFor='range'>Division by : {range}</label>
          <input
            className='range'
            type='range'
            value={range}
            onChange={(e) => setRange(e.target.value)}
            min='1'
            max='20'
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
