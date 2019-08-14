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
        }
      ],
      currentQuote: {
        author: "",
        body: ""
      }
    };
  }

  handleClick = () => {
    let totalQuotes = this.state.quotes.length;
    console.log(totalQuotes);
    let min = Math.ceil(1);
    let max = Math.floor(totalQuotes);
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    this.state.quotes.forEach(item => {
      if (item.id === randomNumber) {
        this.setState({
          currentQuote: { body: item.body, author: item.author }
        });
      }
      return 0;
    });
  };

  render() {
    return (
      <div style={centerStyling}>
        <Quote
          clickAction={this.handleClick}
          quoteText={this.state.currentQuote.body}
          quoteAuthor={this.state.currentQuote.author}
        />
      </div>
    );
  }
}

const centerStyling = {
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  background: "#05386B"
};

export default App;
