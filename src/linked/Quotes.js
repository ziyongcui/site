import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import QuoteAndAuthor from '../components/QuoteAndAuthor';
import quotes from '../QuoteDB';
import books from '../assets/images/books.jpg';

class Quotes extends React.Component {
    state = {
        quote: quotes[0].quote,
        author: quotes[0].author,
        img: quotes[0].img
    }
    //generate diffrent quote function
    generateRandomQuote = (arr) => {
        //get random numbers
        let num = Math.floor(Math.random() * quotes.length)

        let newQuote = quotes[num];

        //update state
        this.setState({
        quote: newQuote.quote,
        author: newQuote.author,
        img: newQuote.img
        })

        this.shuffleQuotes(quotes)

    }

    //shuufle quotes function
    shuffleQuotes = (arr) => {
        return arr.sort(function () { return 0.5 - Math.random() });
    }

    handleKeyPress = event => {
        // space
        if (event.keyCode === 32) {
          this.generateRandomQuote();
        }
        else if (event.keyCode === 13) {
            this.generateRandomQuote();
          }
      };

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress, false);
      }
    
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress, false);
      }

    render() {
    return(
        <div>
            <Hero title="Quotes" />

            <Content>
                <center>
                <img src={this.state.img} onClick={this.generateRandomQuote} width="40%" alt="books"/>
                </center>
            <QuoteAndAuthor
                generateRandomQuote={this.generateRandomQuote}
                quote={this.state}
            />
            </Content>
        </div>
    );}

}

export default Quotes;