import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json"
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0,
    clickedCards: [],
    guess: 0
  };

  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle
    while (0 !== currentIndex) {
      
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  shuffleCards = id => {
    var alreadyClicked = this.state.clickedCards.includes(id);
    if (alreadyClicked) {
      var score = 0;
      var ts = this.state.clickedCards.length;
      var existingTs = this.state.topScore;
      if (ts > existingTs) {
        existingTs = ts;
      }
      this.setState({ clickedCards: [], score: score, topScore: existingTs, guess: -1 });
    }
    else {
      this.state.clickedCards.push(id);
      var score = this.state.score + 1;
      const friends = this.shuffle(this.state.friends)
      this.setState({ friends, score: score, guess: 1 });
    }

  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div style={{textAlign:'center', backgroundColor:'lightblue'}}>
      <Title score={this.state.score} topScore={this.state.topScore} guess={this.state.guess} > Clicky Game </Title>
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleCards={this.shuffleCards}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            />
          ))}
      </Wrapper>
      </div>
    );
  }
}
export default App;
