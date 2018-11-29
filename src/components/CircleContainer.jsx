/* eslint-disable react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';

const degToRad = deg => (deg * Math.PI) / 180;

export default class CircleContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      style: { padding: '0px 0px' }
    };

    this.calcStyle = this.calcStyle.bind(this);
  }

  componentDidMount() {
    console.log('mount');
    this.updatePadding();
    this._loadFromProps();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps !== this.props ||
      nextState.style.padding !== this.state.style.padding
    );
  }

  componentWillUnmount() {
    console.log('unmount');
  }

  componentDidUpdate(prevProps) {
    // eslint-disable-next-line react/no-find-dom-node
    this.updatePadding();
  }

  updatePadding() {
    const node = ReactDOM.findDOMNode(this);
    let sumWidth = 0;
    let sumHeight = 0;
    const children = node.childNodes[0].childNodes;
    // adjust margin on children to get them to align
    // along their center instead of top left
    children.forEach(child => {
      const rect = { width: child.clientWidth, height: child.clientHeight };
      sumWidth += rect.width / 2;
      sumHeight += rect.height / 2;
      child.style.margin = `-${rect.height / 2}px -${rect.width / 2}px`;
    });
    // calculate padding for container
    const pY = (sumHeight * Math.SQRT2) / children.length;
    const pX = (sumWidth * Math.SQRT2) / children.length;
    const padding = `${pY.toFixed(2)}px ${pX.toFixed(2)}px`;
    if (this.autoRadius) {
      this.radiusX = document.documentElement.clientWidth / 2 - pX;
      // this.radiusY = document.documentElement.clientHeight / 2 - pY;
      this.radiusY = this.radiusX;
    }
    if (this.state.style.padding !== padding) {
      // console.log(this.state.style.padding, '|', padding);
      // setTimeout(() => this.setState({ style: { padding } }), 1000);
      this.setState({ style: { padding } });
    }
  }

  _getOrDefault(prop, def) {
    return this.props[prop] !== undefined ? this.props[prop] : def;
  }

  _loadFromProps() {
    this.numChildren = React.Children.count(this.props.children);
    this.alpha = this._getOrDefault('alpha', 360 / this.numChildren);
    this.autoRadius = +(this.props.radius === 'auto'); // 0 or 1 instead of true or false
    this.radius = this.autoRadius || this.props.radius;

    this.radiusX = this.radiusX || this._getOrDefault('radiusX', this.radius);
    this.radiusY = this.radiusY || this._getOrDefault('radiusY', this.radius);
    if (this.radiusX === undefined || this.radiusY === undefined) {
      throw new Error(
        'Must specify either `radius` or both `radiusX` and `radiusY`'
      );
    }

    this.totalRotation = (this.numChildren - 1) * this.alpha;
    this.centerPoint = this._getOrDefault('center', 0.5);
    this.startAngle = this._getOrDefault('startAngle', 90);
  }

  // eslint-disable-next-line complexity
  calcStyle(idx) {
    // needs to calculate `transform`

    const theta = -(
      this.startAngle +
      this.totalRotation * this.centerPoint -
      idx * this.alpha
    );
    let finalRotation;
    switch (this.props.rotate) {
      case 'tangent':
        finalRotation = this.startAngle;
        break;
      case 'none':
      default:
        finalRotation = -theta;
    }

    const transX = Math.cos(degToRad(theta)) / this.radiusX;
    const transY = Math.sin(degToRad(theta)) / this.radiusY;
    const translation = Math.sqrt(1 / (transX ** 2 + transY ** 2));
    // console.log(translation);
    const style = {
      transform: `rotate(${theta}deg) translate(${translation}px) rotate(${finalRotation}deg)`
    };
    return style;
  }

  render() {
    this._loadFromProps();

    const style = {
      width: this.radiusX * 2,
      height: this.radiusY * 2
    };
    // wtf was i going to do with this?
    const [top, left] = this.state.style.padding.split(' ');
    const keys = Array.isArray(this.props.keys) ? this.props.keys : [];
    const padding = this.state.style.padding;
    return (
      <div style={{ display: 'table', position: 'relative' }}>
        <div
          style={{ padding, ...style }}
          className={
            'circleContainer' + (this.props.drawCircle ? ' dashed' : '')
          }
        >
          {React.Children.map(this.props.children, (child, idx) => (
            <div
              className={this.props.raise ? 'raise' : ''}
              key={keys[idx] || idx}
              style={this.calcStyle(idx)}
            >
              {child}
            </div>
          ))}
        </div>
        {this.props.drawCircle ? (
          <div
            className="circleContainer dashed"
            style={{
              ...style,
              position: 'absolute',
              top: top.slice(0, -2),
              left: left.slice(0, -2),
              zIndex: -1
            }}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}
