import React, { useState } from 'react';
import data from './data';

const List = () => {
  const [sites, setSites] = useState(data);
  console.log(sites);

  return (
    <section className='section-center'>
      {sites.map((site) => {
        const { id, name, link, img } = site;

        return (
          <article className='site-prev' key={id}>
            <div className='cont'>
              <a href={link} style={{ textDecoration: 'none' }}>
                <img src={img} alt={name} />
                <h4>{name}</h4>
              </a>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default List;
