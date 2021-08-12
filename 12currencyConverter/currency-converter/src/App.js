import logo from './logo.svg';
import './App.css';
import '../node_modules/currency-flags/dist/currency-flags.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';

function App() {
  const [currentCurrency, setCurrentCurrency] = useState('ALL');
  const [currencies, setCurrencies] = useState();
  const [loading, setLoading] = useState(true);
  const [changedCurrency, setChangedCurrency] = useState('ALL');
  const [price, setPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://free.currconv.com/api/v7/currencies?apiKey=7780a392be8f2537952c',
    })
      .then((response) => {
        // console.log(response);
        setCurrencies(Object.keys(response.data.results));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(currencies);

  if (loading) {
    return (
      <main>
        <h1>Loading</h1>
      </main>
    );
  }

  console.log(currentCurrency);
  console.log(changedCurrency);

  const toFixed2 = (num, fixed) => {
    var re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'GET',
      url: `https://free.currconv.com/api/v7/convert?q=${currentCurrency}_${changedCurrency}&compact=ultra&apiKey=7780a392be8f2537952c`,
    })
      .then((response) => {
        console.log(Object.values(response.data)[0]);

        const rate = Object.values(response.data)[0];
        setFinalPrice((rate * price).toFixed(2));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeOrder = () => {
    const tmpPrice = price;
    const tmpFinalPrice = finalPrice;
    const tmpCurrentCurrency = currentCurrency;
    const tmpChangedCurrency = changedCurrency;

    setCurrentCurrency(tmpChangedCurrency);
    setChangedCurrency(tmpCurrentCurrency);
    setFinalPrice(tmpPrice);
    setPrice(tmpFinalPrice);
  };

  return (
    <main>
      <h1>Currency Converter</h1>
      <section>
        <div className='flags'>
          <div
            className={`currency-flag currency-flag-${currentCurrency.toLowerCase()}`}
          ></div>
          <div
            className={`currency-flag currency-flag-${changedCurrency.toLowerCase()}`}
          ></div>
        </div>
        <form onSubmit={handleSubmit} className='frm'>
          <select
            name='from'
            value={currentCurrency}
            onChange={(e) => setCurrentCurrency(e.target.value)}
          >
            {currencies.map((currency, index) => {
              return (
                <option key={index} value={currency}>
                  {currency}
                </option>
              );
            })}
          </select>
          <div className='middle-form'>
            <button className='btn' onClick={() => changeOrder()}>
              <FaExchangeAlt />
            </button>
            <input
              type='number'
              className='number-of-currency'
              placeholder='...'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              min='0'
              step='0.01'
            />
            <button className='btn' type='submit'>
              Sumbit
            </button>
          </div>
          <select
            name='to'
            value={changedCurrency}
            onChange={(e) => setChangedCurrency(e.target.value)}
          >
            {currencies.map((currency, index) => {
              return (
                <option key={index} value={currency}>
                  {currency}
                </option>
              );
            })}
          </select>
        </form>
      </section>
      <section>
        <h3>{finalPrice}</h3>
      </section>
    </main>
  );
}

export default App;
