import React from 'react';
import PropTypes from 'prop-types';

const degToRad = deg => (deg * Math.PI) / 180;

const calcStyle = (props, theta) => {
  let finalRotation;
  switch (props.rotate) {
    case 'tangent':
      finalRotation = props.startAngle;
      break;
    case 'none':
    default:
      finalRotation = -theta;
  }

  const transX = Math.cos(degToRad(theta)) / props.radiusX;
  const transY = Math.sin(degToRad(theta)) / props.radiusY;
  const translation = Math.sqrt(1 / (transX ** 2 + transY ** 2));
  return {
    transform: `
      rotate(${theta}deg)
      translate(${translation.toFixed(2)}px)
      rotate(${finalRotation}deg)`
  };
};

/**
 * Presentaional component to display items
 * placed in a circle based on the props provided
 */
const CircleRenderer = props => {
  const style = {
    width: props.radiusX * 2,
    height: props.radiusY * 2
  };

  const padding = props.padding;
  let innerCircle;
  if (props.drawCircles && padding) {
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
        className={'circleContainer' + (props.drawCircles ? ' dashed' : '')}
      >
        {React.Children.map(props.children, (child, i) => {
          const theta = -(props.startAngle - i * props.alpha);
          const childProps = { style: calcStyle(props, theta) };
          if (props.passTheta) childProps[props.passTheta] = theta;
          return React.cloneElement(child, childProps);
        })}
      </div>
      {innerCircle}
    </div>
  );
};

CircleRenderer.propTypes = {};

CircleRenderer.defaultProps = {
  drawCircles: false
};

export default CircleRenderer;
