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
      {/* TODO make these parameters scale with number of children?*/}
      {props.spread ? (
        <CircleContainer alpha={10} radiusV={5} radiusH={60}>
          {cards}
        </CircleContainer>
      ) : (
        cards
      )}
    </div>
  );
};

export default CardList;
