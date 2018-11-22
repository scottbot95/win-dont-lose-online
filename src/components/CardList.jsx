import React from 'react';

import Card from './Card';

const CardList = props => {
  const calcStyle = idx => {
    if (!props.spread) return {};
    const numCards = props.cards.length;
    const totalRotation = (numCards - 1) * 10;
    const baseRotation = -1 * (totalRotation / 3);
    return {
      transform: `rotate(${baseRotation + idx * 10}deg)`,
      top: Math.max(0, (idx - 1) * 5),
      left: 30 * idx
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
