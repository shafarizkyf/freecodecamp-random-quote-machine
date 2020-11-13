import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetchQuote()
  }, [])

  const fetchQuote = async () => {
    const url = 'http://api.quotable.io/random';
    const response = await fetch(url);
    const data = await response.json();
    setQuote(data);
  }

  return (
    <div className="quote-app" id="quote-box">
      <h1 id="text">{quote.content}</h1>
      <h1 id="author">{quote.author}</h1>
      <div id="buttons">
        <a href={`twitter.com/intent/tweet?text=${quote.content}`} id="tweet-quote">Tweet</a>
        <button id="new-quote" onClick={fetchQuote}>new quote</button>
      </div>
    </div>
  )
}

export default App;
