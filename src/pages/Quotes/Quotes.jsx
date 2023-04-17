import { useEffect } from "react";
import { useState } from "react";
import CachedIcon from '@mui/icons-material/Cached';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './Quotes.css'

const Quotes = () => {
  const [quote, setQuote] = useState({
    text: '',
    author: '',
    genre: ''
  })

  useEffect(() => {
    getQuote();
  }, [])


  const getQuote = async () => {
    const response = await fetch('https://quote-garden.onrender.com/api/v3/quotes/random?limit=1')

    const data = await response.json();
    setQuote({
      text: data.data[0].quoteText,
      author: data.data[0].quoteAuthor,
      genre: data.data[0].quoteGenre
    })
  }




  return (
    <div className="quotesBox">
      <div className="header" onClick={() => getQuote()}>
        random<CachedIcon />
      </div>
      <div className="quote">
        <div className="quoteText">"{quote.text}"</div>


        <div className="quotesFooter">
          <div className="quotesFooterLeft">
            <div className="quoteAuthor">{quote.author}</div>
            <div className="quoteGenre">{quote.genre}</div>
          </div>

          <div className="quotesFooterRight">
            <div className="quotesArrow"><ArrowRightAltIcon style={{ fontSize: 40 }} /></div>
          </div>


        </div>
      </div>
    </div>

  )
}

export default Quotes