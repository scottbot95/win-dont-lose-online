import React from 'react';

const CircleRenderer = props => {
  const style = {
    width: props.radiusX * 2,
    height: props.radiusY * 2
  };

  const padding = props.padding;
  let innerCircle;
  if (props.drawCircle && padding) {
    const [top, left] = padding.split(' ');
    innerCircle = (
      <div
        className="circleContainer dashed"
        style={{ ...style, position: 'absolute', top, left, zIndex: -1 }}
      />
    );
  }

  return (
    <div style={{ display: 'table', position: 'relative' }}>
      <div
        style={{ padding, ...style }}
        className={'circleContainer' + (props.drawCircle ? ' dashed' : '')}
      >
        {props.children}
      </div>
      {innerCircle}
    </div>
  );
};

export default CircleRenderer;
