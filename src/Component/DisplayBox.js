import React from 'react'

const DisplayBox = ({ quote, changeQuote }) => {
  return (
    <div>
      <div id="text">{quote.context}</div>
      <div id="author">{quote.author}</div>
      <div>
        <a className="button" id="tweet-quote" href="http://twitter.com/intent/tweet">
          <i className="fab fa-twitter"></i>
        </a>
        <a className="button" id="tumblr-quote" href="https://www.tumblr.com/">
          <i className="fab fa-tumblr"></i>
        </a>
        <button className="button" id="new-quote" onClick={changeQuote}>New quote</button>
      </div>
    </div>
  )
}

export default DisplayBox
