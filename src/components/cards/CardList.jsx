import React from 'react';
import PropTypes from 'prop-types';

import CardData from '../../game/cards/Card';
import Card from './Card';
import CirclePlacer from '../CirclePlacer';

/**
 * A component representing a collection of cards.
 * A `CardList` can either display the cards in a line,
 * or can overlay them on top of each other.
 */
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
        <CirclePlacer
          alpha={10}
          radiusX={50}
          radiusY={50}
          center={1 / 3}
          rotate="tangent"
          raise={props.raise}
        >
          {cards}
        </CirclePlacer>
      ) : (
        cards
      )}
    </div>
  );
};

CardList.propTypes = {
  /** An array of cards to display */
  cards: PropTypes.arrayOf(PropTypes.instanceOf(CardData)).isRequired,
  /** An optional callback to be called when a card is clicked */
  selectCard: PropTypes.func,
  /** A flag indicating whether to fan the cards out or display them in a list */
  spread: PropTypes.bool,
  /** A flag indication whether the cards should be displayed face up or down */
  faceDown: PropTypes.bool
};

CardList.defaultProps = {
  raise: true,
  spread: false,
  faceDown: false
};

export default CardList;
