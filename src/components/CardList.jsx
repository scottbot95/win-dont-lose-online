import React from 'react';

import Card from './Card';

const CardList = props => {
  const calcStyle = idx => {
    if (!props.spread) return {};
    const numCards = props.cards.length;
    // TODO make the angle difference scale with number of cards
    const alpha = 10; // angle between
    const radiusV = 1;
    const radiusH = 30;
    const totalRotation = (numCards - 1) * alpha;
    const theta = -totalRotation / 3 + idx * alpha;
    return {
      transform: `rotate(${theta}deg)`,
      top: radiusV * Math.cos(theta),
      left: radiusH * Math.sin(theta)
    };
  };

  return (
    <div className={'cardList' + (props.spread ? ' spread' : '')}>
      {props.cards.map((card, idx) => (
        <Card
          style={calcStyle(idx)}
          key={card.id}
          card={card}
          selectCard={props.selectCard}
          faceDown={props.faceDown}
        />
      ))}
    </div>
  );
};

export default CardList;
