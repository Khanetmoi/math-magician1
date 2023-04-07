import React, { useState, useEffect } from 'react';
import { v4 as id } from 'uuid';


const loadingMessage = <p>Waiting for data loading....</p>;
const errorMessage = <p>Oops, something went wrong!!!</p>;

const Quotes = () => {
  const [quotes, setQuotes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const quotesApi = async () => {
    setIsLoading(true);
    try {
      fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: {
          'X-Api-Key': 'FSvXTjxiPe8a+r73Jt+dLQ==j1LfG5Zfc7QrFBl8',
        },
      })
        .then((Response) => Response.json())
        .then((data) => {
          setQuotes(data);
        });
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    quotesApi();
  }, [setQuotes, setIsLoading]);
  return (
    <div className="quotesbox">
      {isLoading ? loadingMessage : null}
      {hasError ? errorMessage : null}
      {quotes && Array.isArray(quotes)
        && quotes.map((data) => (
          <div key={id()}>
            <h2>
              {data.quote}
              {' '}
              -
              {' '}
              {data.author}
            </h2>
          </div>
        ))}
    </div>
  );
};


export default Quotes;