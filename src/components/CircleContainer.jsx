import React from 'react';

const degToRad = degrees => {
  return (degrees * Math.PI) / 180;
};

const CircleContainer = props => {
  const calcStyle = idx => {
    const numChildren = props.children.length;
    // TODO make the angle difference scale with number of cards
    const alpha = 10; // angle between
    const radiusV = 5;
    const radiusH = 100;
    const totalRotation = (numChildren - 1) * alpha;
    const theta = -totalRotation / 3 + idx * alpha;
    return {
      transform: `rotate(${theta}deg)`,
      top: radiusV * Math.cos(degToRad(theta)),
      left: radiusH * Math.sin(degToRad(theta))
    };
  };

  return (
    <div className="circle container">
      {props.children.map((child, idx) => {
        return React.cloneElement(child, { style: calcStyle(idx) });
      })}
    </div>
  );
};

export default CircleContainer;
