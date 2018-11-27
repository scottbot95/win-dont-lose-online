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
    const { propName } = e.target.dataset;
    let value;
    switch (e.target.type) {
      case 'number':
        value = Number(e.target.value);
        break;
      case 'text':
      case 'select-one':
      default:
        value = e.target.value;
        break;
    }
    this.setState(state => {
      return {
        props: { ...state.props, [propName]: value }
      };
    });
  }

  render() {
    const calcInput = property => {
      const props = {
        id: property.name,
        'data-prop-name': property.name,
        onChange: this.updateProp,
        value: this.state.props[property.name]
      };
      const type = Array.isArray(property.type) ? 'select-one' : property.type;
      switch (type) {
        case 'integer':
          return <input {...props} type="number" step="1" />;
        case 'float':
          return <input {...props} type="number" />;
        default:
        case 'text':
          return <input {...props} type={type} />;
        case 'select-one':
          return (
            <select {...props}>
              {property.type.map(opt => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          );
      }
    };

    return (
      <div>
        {this.props.props.map((prop, i) => (
          <div key={i}>
            <label htmlFor={prop.name}>{prop.name}</label>
            {calcInput(prop)}
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
