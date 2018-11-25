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

  calcStyle_old(idx) {
    const numChildren = this.props.children.length;
    const alpha = this.props.alpha || 360 / numChildren; // angle between
    const radiusV = this.props.radiusV || this.props.radius || 100;
    const radiusH = this.props.radiusH || this.props.radius || 100;
    const totalRotation = (numChildren - 1) * alpha;
    const theta = -totalRotation / 2 + idx * alpha;
    return {
      transform: `rotate(${theta}deg)`,
      top: radiusV + radiusV * Math.cos(degToRad(theta)),
      left: radiusH + radiusH * Math.sin(degToRad(theta))
    };
  }

  // eslint-disable-next-line complexity
  calcStyle(idx) {
    const numChildren = this.props.children.length;
    const alpha = this.props.alpha || 360 / numChildren;
    const radius =
      this.props.radius ||
      Math.max(this.props.radiusV, this.props.radiusH) ||
      100;
    const radiusV = this.props.radiusV || radius;
    const radiusH = this.props.radiusH || radius;
    const totalRotation = (numChildren - 1) * alpha;
    const centerPoint = this.props.center || 1 / 2;
    const theta = -(90 + totalRotation * centerPoint - idx * alpha);
    let finalRotation;
    switch (this.props.rotate) {
      case 'tangent':
        console.log('tanget rotation');
        finalRotation = 90;
        break;
      case 'none':
      default:
        finalRotation = -theta;
    }
    return {
      transform: `rotate(${theta}deg) translate(${radius}px) rotate(${finalRotation}deg)`
      // top: radiusV,
      // left: radiusH
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
