import React from 'react'

const Text = ({ state, changeQuote }) => {
  return (
    <div>
      <div id="text">{state.quote}</div>
      <div id="author">{state.author}</div>
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

export default Text
