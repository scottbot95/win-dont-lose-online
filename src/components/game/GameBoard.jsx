import React from 'react';

import Player from './Player';
import CirclePlacer from '../CirclePlacer';
import CardPile from '../cards/CardPile';

import { testDeck } from '../../../tests/testData';

export default class GameBoard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="gameBoard">
        <CirclePlacer
          // radius="auto"
          radius={500}
          // center={2 / (this.props.players.length - 1)}
          center={0}
          startAngle={-90}
          passTheta="rotate"
        >
          {this.props.players.map((player, i) => (
            <Player
              key={player.name}
              player={player}
              cards={player.hand}
              me={i === 0}
            />
          ))}
        </CirclePlacer>
        <CardPile id="drawPile" faceDown cards={testDeck} />
        <CardPile id="discardPile" cards={testDeck} />
      </div>
    );
  }
}
