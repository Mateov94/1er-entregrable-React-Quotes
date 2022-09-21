import React from 'react'
import Quote from './Quote';

const QuoteBox = ({randomQuote, randomColor, getIndexRandomAll}) => {

  const colorObj = {
    color: randomColor
  }

  const backgroundObj = {
    backgroundColor: randomColor
  }

  console.log(randomQuote);

  return (
    <article style={colorObj} className='card'>
      <i className="quote-icon fa-solid fa-quote-left"></i>
      <Quote randomQuote={randomQuote} />
      <button 
      className='card__btn' 
      style={backgroundObj}
      onClick={getIndexRandomAll}
      >&#62;</button>
    </article>
  )
}

export default QuoteBox