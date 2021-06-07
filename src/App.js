import React, { useState } from 'react'
import DisplayBox from './Component/DisplayBox';
import quotes from "./data"

const App = () => {

  const [quote, setQuote] = useState({
    content: quotes[0].content,
    author: quotes[0].author
  })

  const changeQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const randomQuotes = quotes[randomNumber]
    setQuote({
      content: randomQuotes.content,
      author: randomQuotes.author
    })
  }

  return (
    <div className="wrapper">
      <div id="quote-box">
        <DisplayBox quote={quote} changeQuote={changeQuote} />
      </div>
    </div>
  );
}

export default App;
