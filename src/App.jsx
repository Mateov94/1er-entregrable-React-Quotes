import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import color from './utils/color'


function App() {

  // Esta función calcula un índice random
  const getIndexRandom = arr => Math.floor(Math.random() * arr.length)
  
  // Aqui extrae el elemento según el índice random
  const firstQuote = quotes[getIndexRandom(quotes)]
  const firstColor = color[getIndexRandom(color)]

  const [randomQuote, setRandomQuote] = useState(firstQuote)
  const [randomColor, setRandomColor] = useState(firstColor)

  const backgroundObject = {
    backgroundColor: randomColor
  }

  // Esta función calcula tanto un quote como un color random
  const getIndexRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(color[getIndexRandom(color)])
  }


  return (
    <div style={backgroundObject} className='App'>
      <QuoteBox
      randomQuote={randomQuote}
      getIndexRandomAll={getIndexRandomAll}
      randomColor={randomColor} 
      />
    </div>
  )
}

export default App
