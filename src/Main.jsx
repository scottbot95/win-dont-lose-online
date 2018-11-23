import React from 'react';

import { Card, CardList, CardPile, Player } from './components';

import { card, testHand, testPlayer } from '../tests/testData';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.cardSelected = this.cardSelected.bind(this);
  }

  cardSelected(selected) {
    console.log(selected);
  }

  render() {
    return (
      <div style={{ paddingLeft: 50, paddingTop: 50 }}>
        {/* <Card selectCard={this.cardSelected} card={card} /> */}
        <CardList cards={testHand} selectCard={this.cardSelected} spread />
        <CardList cards={testHand} selectCard={this.cardSelected} faceDown />
        <CardPile cards={testHand} selectCard={this.cardSelected} />
        <Player
          cards={testHand}
          playCard={this.cardSelected}
          player={testPlayer}
          me
        />
      </div>
    );
  }
}
