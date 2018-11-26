import React from 'react';

export default class Playground extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      props: props.props.reduce((values, prop) => {
        values[prop.name] = prop.value;
        return values;
      }, {})
    };

    this.updateProp = this.updateProp.bind(this);
  }

  updateProp(e) {
    e.persist();
    this.setState(state => {
      return {
        props: { ...state.props, [e.target.id]: e.target.value }
      };
    });
  }

  render() {
    return (
      <div>
        {this.props.props.map((prop, i) => (
          <div key={i}>
            <label htmlFor={prop.name}>{prop.name}</label>
            <input
              id={prop.name}
              onChange={this.updateProp}
              {...prop.input}
              value={this.state.props[prop.name]}
            />
          </div>
        ))}
        {Array.isArray(this.props.children)
          ? this.props.children.map((child, i) => {
              return React.cloneElement(child, { ...this.state.props, key: i });
            })
          : React.cloneElement(this.props.children, this.state.props)}
      </div>
    );
  }
}
