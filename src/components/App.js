import React, { Component } from "react";
import Quote from "./Quote";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [
        {
          id: 1,
          author: "Dr. Seuss",
          body: "Don't cry because it's over, smile because it happened."
        },
        {
          id: 2,
          author: "Oscar Wilde",
          body: "Be yourself; everyone else is already taken."
        },
        {
          id: 3,
          author: "Albert Einstein",
          body:
            "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
        },
        {
          id: 4,
          author: "Cicero",
          body: "A room without books is like a body without a soul."
        },
        {
          id: 5,
          author: "Mae West",
          body: "You only live once, but if you do it right, once is enough"
        },
        {
          id: 6,
          author: "Gandhi",
          body: "Be the change that you wish to see in the world."
        },
        {
          id: 7,
          author: "Mark Twain",
          body: "If you tell the truth, you don't have to remember anything."
        },
        {
          id: 8,
          author: "Elbert Hubbard",
          body:
            "A friend is someone who knows all about you and still loves you."
        },
        {
          id: 9,
          author: "Oscar Wilde",
          body:
            "I am so clever that sometimes I don't understand a single word of what I am saying."
        },
        {
          id: 10,
          author: "Ralph Waldo",
          body:
            "So be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
        },
        {
          id: 11,
          author: "Stephen Chbosky",
          body: "We accept the love we think we deserve."
        }
      ],
      currentQuote: {
        lastQuoteId: null,
        author: "",
        body: ""
      }
    };
  }

  generateRandom = () => {
    let totalQuotes = this.state.quotes.length;
    let min = Math.ceil(1);
    let max = Math.floor(totalQuotes);
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  };

  handleEnter = () => {
    //doesnt work
    let randomNumber = this.generateRandom();
    this.state.quotes.map(item => {
      if (item.id === randomNumber) {
        if (randomNumber === this.state.currentQuote.lastQuoteId) {
          console.log("i found duplicate");
        } else if (randomNumber !== this.state.currentQuote.lastQuoteId) {
          this.setState({
            currentQuote: {
              body: item.body,
              author: item.author,
              lastQuoteId: item.id
            }
          });
        }
      }
    });
  };

  handleClick = () => {
    let randomNumber = this.generateRandom();
    this.state.quotes.map(item => {
      if (item.id === randomNumber) {
        if (randomNumber === this.state.currentQuote.lastQuoteId) {
          console.log("i found duplicate");
        } else {
          this.setState({
            currentQuote: {
              body: item.body,
              author: item.author,
              lastQuoteId: item.id
            }
          });
        }
      }
    });
  };

  render() {
    return (
      <div style={centerStyling}>
        <Quote
          clickAction={this.handleClick}
          enterAction={this.handleEnter}
          quoteText={
            this.state.currentQuote.body
              ? this.state.currentQuote.body
              : "Click next to generate random quote"
          }
          quoteAuthor={
            this.state.currentQuote.author
              ? this.state.currentQuote.author
              : "Random Quote Machine"
          }
          buttonText="next"
        />
      </div>
    );
  }
}

const centerStyling = {
  display: "flex",
  minheight: "100vh",
  justifyContent: "center",
  alignItems: "center"
};

export default App;
