import { useEffect } from "react";
import { useState } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState({
    text: '',
    author: '',
    genre: ''
  })

  useEffect(() => {
    getQuote();
  })


  const getQuote = async () => {
    const response = await fetch('https://quote-garden.onrender.com/api/v3/quotes?limit=1')

    const data = await response.json();
    setQuote({
      text: data.data[0].quoteText,
      author: data.data[0].quoteAuthor,
      genre: data.data[0].quoteGenre
    })

  }




  return (
    <div className="quote">
      <div className="quoteText">{quote.text}</div>

      <div className="quoteAuthor">{quote.author}</div>
    </div>
  )
}

export default Quotes