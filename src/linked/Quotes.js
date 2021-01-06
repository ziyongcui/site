import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import QuoteAndAuthor from '../components/QuoteAndAuthor';
import quotes from '../QuoteDB'

class Quotes extends React.Component {
    state = {
        quote: quotes[0].quote,
        author: quotes[0].author
    }
    //generate diffrent quote function
    generateRandomQuote = (arr) => {
        //get random numbers
        let num = Math.floor(Math.random() * quotes.length)

        let newQuote = quotes[num];

        //update state
        this.setState({
        quote: newQuote.quote,
        author: newQuote.author
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
            <QuoteAndAuthor
                generateRandomQuote={this.generateRandomQuote}
                quote={this.state}
            />
            </Content>
        </div>
    );}

}

export default Quotes;