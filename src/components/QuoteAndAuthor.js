import React from 'react'
import quotes from '../QuoteDB'

export default function QuoteAndAuthor(props) {

    const { quote, generateRandomQuote } = props;
    return (
        <div className="card" >

            <div className="card-body">
                <p className="card-text" style={{ fontSize: '100px' }}>{quote.quote}</p>
                <h5 className="card-title" style={{ fontSize: '70px' }}>- {quote.author}</h5>
                <button 
                    style={{ fontSize: '50px' }}
                    onClick={() => { generateRandomQuote(quotes) }}
                    type="submit">
                    <i class="fas fa-mouse"></i> Generate Quote
                </button>
                
            </div>
        </div>
    )
}