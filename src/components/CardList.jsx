import React from 'react';

import Card from './Card';

const CardList = props => {
  return (
    <div className="cardList">
      {props.cards.map(card => (
        <Card key={card.id} card={card} selectCard={props.selectCard} />
      ))}
    </div>
  );
};

export default CardList;
