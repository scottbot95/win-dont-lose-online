import React from 'react';
import CirclePlacer from '../CirclePlacer';
import Player from './Player';
import CardPile from '../cards/CardPile';

const GameBoardPresentational = props => {
  return (
    <div id="gameBoard">
      <CirclePlacer
        //radius="auto"
        radius={500}
        center={0}
        startAngle={-90}
        passTheta="rotate"
      >
        {props.players.map((player, i) => (
          <Player key={player.id} player={player} me={i === 0} />
        ))}
      </CirclePlacer>
      <CardPile
        selectCard={props.drawCard}
        id="drawPile"
        faceDown
        cards={props.drawPile}
      />
      <CardPile id="discardPile" cards={props.discardPile} />
    </div>
  );
};

export default GameBoardPresentational;
