import React from 'react';

import Card from './Card';

const CardPile = props => {
  return (
    <div>
      <div className="cardPile">
        {props.cards.slice(0, 5).map((card, idx) => {
          const pos = props.cards.length - 1 - idx;
          return (
            <Card
              key={card.id}
              selectCard={idx === 0 && props.selectCard}
              card={card}
              style={{
                zIndex: -1 * idx,
                top: pos * -3,
                left: pos * -1
              }}
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
