import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [showMore, setShowMore] = useState(false);

  const changeShow = () => {
    setShowMore((showMore) => {
      return !showMore;
    });
  };

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => changeShow()}>
          {!showMore ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>

      <p>{showMore ? info : ''}</p>
    </article>
  );
};

export default Question;
