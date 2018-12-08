import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import CardData from '../../game/cards/Card';

/**
 * **This may be merged into the [CardList](#CardList) in the future**
 *
 * A component representing a pile of cards in a stack.
 * Will only allow card selection form top of the pile
 */
const CardPile = props => {
  return (
    <div id={props.id}>
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

CardPile.propTypes = {
  /** the html id to assign to containing div */
  id: PropTypes.string,
  /** An array of cards to display */
  cards: PropTypes.arrayOf(PropTypes.instanceOf(CardData)).isRequired,
  /** An optional callback to be called when a card is clicked */
  selectCard: PropTypes.func,
  /** A flag indication whether the cards should be displayed face up or down */
  faceDown: PropTypes.bool
};

CardPile.defaultProps = {
  cards: [],
  faceDown: false
};

export default CardPile;
