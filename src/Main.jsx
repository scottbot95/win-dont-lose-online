import React from 'react';

import {
  Card,
  CardList,
  CardPile,
  Player,
  GameBoard,
  CircleContainer
} from './components';

import Playground from './components/Playground';

import { card, testHand, testPlayer, testPlayers } from '../tests/testData';

export default class Main extends React.Component {
  constructor() {
    super();

    this.cardSelected = this.cardSelected.bind(this);
    this.updateCircle = this.updateCircle.bind(this);
  }

  cardSelected(selected) {
    console.log(selected);
  }

  updateCircle(event) {
    this.setState({ [event.target.id]: Number(event.target.value) });
  }

  render() {
    const props = [
      {
        name: 'startAngle',
        value: 90,
        type: 'integer'
      },
      {
        name: 'radius',
        value: 100,
        type: 'integer'
      },
      {
        name: 'rotate',
        value: 'none',
        type: ['none', 'tanget']
      }
    ];
    return (
      <div style={{ paddingLeft: 50, paddingTop: 50 }}>
        {/* <Card selectCard={this.cardSelected} card={card} /> */}
        {/* <CardList cards={testHand} selectCard={this.cardSelected} spread /> */}
        {/* <CardList cards={testHand} selectCard={this.cardSelected} faceDown /> */}
        {/* <CardPile cards={testHand} selectCard={this.cardSelected} /> */}
        {/* <Player
          cards={testHand}
          playCard={this.cardSelected}
          player={testPlayer}
          me
        /> */}
        {/* <GameBoard players={testPlayers} /> */}
        <Playground props={props}>
          <CircleContainer drawCircle>
            <p>a</p>
            <p>b</p>
            <p>c</p>
            <p>d</p>
          </CircleContainer>
        </Playground>
      </div>
    );
  }
}
