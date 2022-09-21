import React from 'react'

const Quote = ({randomQuote}) => {
  return (
    <>
      <p className='card__quote'>{randomQuote.quote}</p>
      <h1 className='card__author'>{randomQuote.author}</h1>
    </>
  )
}

export default Quote