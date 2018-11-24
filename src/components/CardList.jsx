import React from 'react';

import Card from './Card';
import CircleContainer from './CircleContainer';

const CardList = props => {
  const cards = props.cards.map(card => (
    <Card
      key={card.id}
      card={card}
      selectCard={props.selectCard}
      faceDown={props.faceDown}
    />
  ));

  return (
    <div className="cardList">
      {props.spread ? <CircleContainer>{cards}</CircleContainer> : cards}
    </div>
  );
};

export default CardList;
