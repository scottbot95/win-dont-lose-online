import React from 'react';

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

export default Card;
