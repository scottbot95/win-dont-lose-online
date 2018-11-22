import React from 'react';

const Card = props => {
  const click = () => {
    if (props.cardSelected !== undefined) {
      props.cardSelected(props.card);
    }
  };

  const style =
    typeof props.scale === 'number'
      ? { transform: `scale(${props.scale})` }
      : {};

  return (
    <div className="card" onClick={click} style={style}>
      <h3>{props.card.title}</h3>
      {props.card.points ? (
        <h4>
          {props.card.points > 0 ? '+' : '-'}
          {props.card.points} Points
        </h4>
      ) : (
        ''
      )}
      <p>{props.card.description}</p>
      <p className="flavor">{props.card.flavor}</p>
    </div>
  );
};

export default Card;
