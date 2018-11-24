import React from 'react';
import ReactDOM from 'react-dom';
import { isObject } from 'util';

const degToRad = degrees => {
  return (degrees * Math.PI) / 180;
};

export default class CircleContainer extends React.Component {
  constructor() {
    super();

    this.calcStyle = this.calcStyle.bind(this);

    this.state = {
      style: {}
    };
  }

  calcStyle(idx) {
    const numChildren = this.props.children.length;
    const alpha = this.props.alpha || 360 / numChildren; // angle between
    const radiusV = this.props.radiusV || this.props.radius || 100;
    const radiusH = this.props.radiusH || this.props.radius || 100;
    const totalRotation = (numChildren - 1) * alpha;
    const theta = -totalRotation / 3 + idx * alpha;
    return {
      transform: `rotate(${theta}deg)`,
      top: radiusV + radiusV * Math.cos(degToRad(theta)),
      left: radiusH + radiusH * Math.sin(degToRad(theta))
    };
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    // eslint-disable-next-line react/no-find-dom-node
    const node = ReactDOM.findDOMNode(this);
    const bounds = {
      top: Infinity,
      left: Infinity,
      right: -Infinity,
      bottom: -Infinity
    };
    node.childNodes.forEach(child => {
      const childBox = child.getBoundingClientRect();
      if (childBox.top < bounds.top) bounds.top = childBox.top;
      if (childBox.left < bounds.left) bounds.left = childBox.left;
      if (childBox.right > bounds.right) bounds.right = childBox.right;
      if (childBox.bottom > bounds.bottom) bounds.bottom = childBox.bottom;
    });
    const style = {
      width: bounds.right - bounds.left,
      height: bounds.bottom - bounds.top
    };
    if (
      this.state.style.width !== style.width ||
      this.state.style.height !== style.height
    ) {
      this.setState({ style });
    }
  }

  render() {
    return (
      <div style={this.state.style} className="circle container">
        {this.props.children.map((child, idx) => {
          return React.cloneElement(child, { style: this.calcStyle(idx) });
        })}
      </div>
    );
  }
}
