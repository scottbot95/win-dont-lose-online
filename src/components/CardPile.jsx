import React from 'react';

import Card from './Card';

const CardPile = props => {
  return (
    <div>
      <div className="cardPile">
        {props.cards.slice(0, 5).map((card, idx) => {
          return (
            <Card
              key={card.id}
              selectCard={idx === 0 && props.selectCard}
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
