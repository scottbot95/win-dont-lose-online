import React from 'react';

import Card from './Card';

const CardPile = props => {
  return (
    <div>
      <div className="cardPile">
        {props.cards.slice(0, 5).map((card, idx) => {
          const onClick = idx === 0 ? { selectCard: props.selectCard } : '';
          return (
            <Card
              key={card.id}
              {...onClick}
              card={card}
              faceDown={props.faceDown}
            />
          );
        })}
      </div>
      <p className="cardCount">{props.cards.length}</p>
    </div>
  );
};

export default CardPile;
