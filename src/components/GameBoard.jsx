import React from 'react';

import Player from './Player';
import CircleContainer from './CircleContainer';

export default class NewComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="gameBoard">
        <CircleContainer
          radius={500}
          // center={2 / (this.props.players.length - 1)}
          center={0}
          startAngle={-90}
        >
          {this.props.players.map((player, i) => (
            <Player
              key={player.name}
              player={player}
              cards={player.hand}
              me={i === 0}
            />
          ))}
        </CircleContainer>
      </div>
    );
  }
}