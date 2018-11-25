import React from 'react';

import CardList from './CardList';

const Player = props => {
  return (
    <div className="player" style={props.style}>
      <p className="playerName">{props.player.name}</p>
      <p className="score">{props.player.points || 0} Points</p>
      <CardList
        cards={props.cards}
        selectCard={props.playCard}
        faceDown={!props.me}
        spread
      />
    </div>
  );
};

export default Player;
