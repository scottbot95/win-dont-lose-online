import React from 'react';

import { GameBoard, Player, CircleContainer, Card } from './components';

import { card, testHand, testPlayer, testPlayers } from '../tests/testData';
import Playground from './components/Playground';

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
        label: 'Start Angle',
        name: 'startAngle',
        value: 90,
        type: 'integer'
      },
      {
        label: 'Circle Radius',
        name: 'radius',
        value: 100,
        type: 'integer'
      },
      {
        label: 'Circle Radius (X)',
        name: 'radiusX',
        value: 100,
        type: 'integer'
      },
      {
        label: 'Circle Radius (Y)',
        name: 'radiusY',
        value: 100,
        type: 'integer'
      },
      {
        label: 'Post Rotation Type',
        name: 'rotate',
        value: 'none',
        type: ['none', 'tangent']
      },
      {
        label: 'Draw Circles?',
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

    const cards = testPlayer.hand.map(c => (
      <p key={c.id} card={c}>
        {card.name}
      </p>
    ));

    return (
      <div style={{ paddingLeft: 50, paddingTop: 50 }}>
        <Playground props={props}>
          <CircleContainer>{cards}</CircleContainer>
        </Playground>
        {/* <GameBoard players={testPlayers} /> */}
        {/* <Player player={testPlayer} cards={testPlayer.hand} me /> */}
      </div>
    );
  }
}
