import React from 'react';

const Card = props => {
  const style = { ...props.style };
  const click = () => {
    if (props.selectCard !== undefined) {
      props.selectCard(props.card);
    }
  };

  if (typeof props.scale === 'number') {
    style.transform += ` scale(${props.scale})`;
  }

  return (
    <div
      className={'card' + (props.faceDown ? ' faceDown' : '')}
      onClick={click}
      style={style}
    >
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
