import React, { useState } from 'react'
import Text from './Component/Text';
import quotes from "./data"

const App = () => {

  const [state, setState] = useState({
    quote: quotes[0].quote,
    author: quotes[0].author
  })

  const changeQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const randomQuotes = quotes[randomNumber]
    setState({
      quote: randomQuotes.quote,
      author: randomQuotes.author
    })
  }

  return (
    <div className="wrapper">
      <div id="quote-box">
        <Text state={state} setState={setState} changeQuote={changeQuote} />
      </div>
    </div>
  );
}

export default App;
