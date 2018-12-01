import React from 'react';

import CardList from '../cards/CardList';

const Player = props => {
  return (
    <div className="player" style={props.style}>
      <div>
        <p className="playerName">{props.player.name}</p>
        <p className="score">{props.player.points || 0} Points</p>
      </div>
      <div style={{ transform: `rotate(${props.rotate - 90}deg)` }}>
        <CardList
          cards={props.player.hand}
          selectCard={props.playCard}
          faceDown={!props.me}
          spread
          raise={props.me}
        />
      </div>
    </div>
  );
};

Player.defaultProps = {
  rotate: 90
};

export default Player;
