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
        type: ['none', 'tangent']
      },
      {
        name: 'drawCircle',
        value: true,
        type: 'boolean'
      },
      {
        name: 'center',
        value: 0.5,
        type: 'float',
        min: 0,
        max: 1,
        step: 0.01
      },
      {
        name: 'alpha',
        value: 0,
        type: 'integer'
      }
    ];

    const cards = testHand.map(card => (
      <Card key={card.id} card={card} selectCard={this.cardSelected} />
    ));
    return (
      <div style={{ paddingLeft: 50, paddingTop: 50 }}>
        {/* <GameBoard players={testPlayers} /> */}
        <Playground props={props}>
          <CircleContainer drawCircle>{cards}</CircleContainer>
        </Playground>
      </div>
    );
  }
}
