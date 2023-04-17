import { Link, useParams } from "react-router-dom"
import CachedIcon from '@mui/icons-material/Cached';
import './QuotesAuthor.css'
import { useEffect, useState } from "react";

const QuotesAuthor = () => {
  const { author } = useParams();
  decodeURIComponent(author);
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    getQuote();
  }, [])

  const getQuote = async () => {
    const response = await fetch('https://quote-garden.onrender.com/api/v3/quotes?author=' + author)

    const data = await response.json();
    setQuotes(data.data)
  }


  return (
    <div className="quotesBox">
      <Link to={`/`} style={{ textDecoration: `none` }}>
        <div className="header" onClick={() => getQuote()}>
          random<CachedIcon />
        </div>
      </Link>

      <div className="quoteAuthorList">
        <div className="quoteAuthor authorName">
          {author}
        </div>

        <div className="quoteList">
          {
            quotes.map((q, index) => {
              return <div key={index} className="quoteText">{q.quoteText}</div>
            })
          }

        </div>
      </div>


    </div >

  )
}

export default QuotesAuthor

/* 
      <div className="quote">
       

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
      */