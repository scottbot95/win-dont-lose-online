/* eslint-disable react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';

export default class CircleContainer extends React.Component {
  constructor() {
    super();

    this.calcStyle = this.calcStyle.bind(this);

    this.state = {
      style: {}
    };
  }

  calcStyle(idx) {
    // needs to calculate `transform`
    const numChildren = this.props.children.length;
    const alpha = 360 / numChildren;
    const radius = this.props.radius;
    const totalRotation = (numChildren - 1) * alpha;
    const centerPoint =
      this.props.center !== undefined ? this.props.center : 1 / 2;
    const startAngle = this.props.startAngle || 90;

    const theta = -(startAngle + totalRotation * centerPoint - idx * alpha);
    let finalRotation;
    switch (this.props.rotate) {
      case 'tangent':
        finalRotation = startAngle;
        break;
      case 'none':
      default:
        finalRotation = -theta;
    }
    return {
      transform: `rotate(${theta}deg) translate(${radius}px) rotate(${finalRotation}deg)`
    };
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    // eslint-disable-next-line react/no-find-dom-node
    const node = ReactDOM.findDOMNode(this);

    let sumWidth = 0;
    let sumHeight = 0;

    // adjust margin on children to get them to align
    // along their center instead of top left
    node.childNodes.forEach(child => {
      const rect = child.getBoundingClientRect();
      sumWidth += rect.width / 2;
      sumHeight += rect.height / 2;
      child.style.margin = `-${rect.height / 2}px -${rect.width / 2}px`;
    });

    // calculate padding for container
    const pY = (sumHeight * Math.SQRT2) / node.childNodes.length;
    const pX = (sumWidth * Math.SQRT2) / node.childNodes.length;
    const padding = `${pY}px ${pX}px`;
    if (this.state.style.padding !== padding)
      this.setState({ style: { padding } });
  }

  render() {
    const style = {
      ...this.state.style,
      width: this.props.radius * 2,
      height: this.props.radius * 2
    };
    const keys = Array.isArray(this.props.keys) ? this.props.keys : [];
    return (
      <div style={style} className="circleContainer">
        {this.props.children.map((child, idx) => (
          <div key={keys[idx] || idx} style={this.calcStyle(idx)}>
            {child}
          </div>
        ))}
      </div>
    );
  }
}
