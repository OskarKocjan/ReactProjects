import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <articale className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {!readMore ? 'See More' : 'See Less'}
          </button>
        </p>
        <buttuon className='btn delete-btn' onClick={() => removeTour(id)}>
          not intrested
        </buttuon>
      </footer>
    </articale>
  );
};

export default Tour;
