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
        }
      ]
    };
  }

  handleClick = () => {
    const min = 1;
    const max = 5;
    const randomNumber = min + Math.random() * (max - min);

    this.state.quotes.map(item => {
      if (item.id === randomNumber) {
        return item;
      }
    });
  };

  render() {
    return (
      <div style={centerStyling}>
        <Quote />
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
