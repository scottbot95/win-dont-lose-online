import React from 'react';
import PropTypes from 'prop-types';
import CardData from '../../game/cards/Card';

/**
 * A presentational component to render information about a provided card
 */
const Card = props => {
  const style = { ...props.style };
  const click = () => {
    if (typeof props.selectCard === 'function') {
      props.selectCard(props.card);
    }
  };

  if (typeof props.scale === 'number') {
    style.transform += ` scale(${props.scale})`;
  }

  const className =
    'card raise' +
    (props.faceDown ? ' faceDown' : '') +
    (props.card.isScary ? ' scary' : '');

  return (
    <div className={className} onClick={click} style={style}>
      {!props.faceDown ? (
        <div>
          <h3>{props.card.title}</h3>
          <h4>
            {props.card.points
              ? `${props.card.points > 0 ? '+' : ''}
          ${props.card.points} Points`
              : ''}
          </h4>
          <p>{props.card.description}</p>
          <p className="flavor">{props.card.flavor}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

Card.propTypes = {
  /** optional styling to be passed on to card element */
  style: PropTypes.object,
  /** Optional Callback function to be called when the card is clicked.  */
  selectCard: PropTypes.func,
  /** The card data to render */
  card: PropTypes.instanceOf(CardData).isRequired,
  /** An optional seperate scale property */
  scale: PropTypes.number,
  /** When true, render back of card and don't even put data into DOM */
  faceDown: PropTypes.bool
};

Card.defaultProps = {
  faceDown: false,
  style: {}
};

export default Card;
