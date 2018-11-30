/* eslint-disable react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import CircleRenderer from './CircleRenderer';

export default class CirclePlacer extends React.Component {
  constructor() {
    super();

    this.state = {
      style: { padding: '0px 0px' }
    };
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
    this.alpha = this.props.alpha || 360 / this.numChildren;
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

  render() {
    this._loadFromProps();

    const keys = Array.isArray(this.props.keys) ? this.props.keys : [];

    // const children = React.Children.map(this.props.children, (child, idx) => (
    //   <div className={this.props.raise ? 'raise' : ''} key={keys[idx] || idx}>
    //     {child}
    //   </div>
    // ));

    const children = this.props.children;

    const padding = this.state.style.padding;

    const props = {
      radiusX: this.radiusX,
      radiusY: this.radiusY,
      drawCircles: this.props.drawCircles,
      startAngle: this.startAngle + this.totalRotation * this.centerPoint,
      alpha: this.alpha,
      rotate: this.props.rotate,
      passTheta: this.props.passTheta,
      padding
    };

    const renderer = <CircleRenderer {...props}>{children}</CircleRenderer>;

    return renderer;
  }
}

CirclePlacer.defaultProps = {
  startAngle: 90
};
