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

CircleRenderer.propTypes = {
  /** Radius of the cirle in the X axis */
  radiusX: PropTypes.number,
  /** Radius of the cirle in the Y axis */
  radiusY: PropTypes.number,
  /** Padding of the container itself. */
  padding: PropTypes.string,
  /** Whether or not to draw circles represending the circle's radius and outside padding  */
  drawCircles: PropTypes.bool,
  /** The starting angle to place the 'center' at (measured in degrees) */
  startAngle: PropTypes.number,
  /** The angle between adjacent elements on the circle (measured in degrees)  */
  alpha: PropTypes.number,
  /** Rotatation after placement on circle */
  rotate: PropTypes.oneOf(['none', 'tangent']),
  /** If specified, pass the angle each element is as a prop given my `passTheta` */
  passTheta: PropTypes.string
};

CircleRenderer.defaultProps = {
  drawCircles: false,
  padding: '0px',
  radiusX: 100,
  radiusY: 100,
  startAngle: 90,
  alpha: 0,
  rotate: 'none',
  passTheta: undefined
};

export default CircleRenderer;
