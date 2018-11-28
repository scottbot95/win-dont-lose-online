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
      case 'checkbox':
        value = e.target.checked;
        break;
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
    // eslint-disable-next-line complexity
    const calcInput = property => {
      const props = {
        id: property.name,
        'data-prop-name': property.name,
        onChange: this.updateProp,
        value: this.state.props[property.name]
      };
      const type = Array.isArray(property.type) ? 'select-one' : property.type;
      switch (type) {
        case 'boolean':
          // eslint-disable-next-line no-case-declarations
          const { value, ...notValue } = props;
          return <input {...notValue} type="checkbox" checked={value} />;
        case 'integer':
          return (
            <input
              {...props}
              type="number"
              step={property.step || '1'}
              min={property.min}
              max={property.max}
            />
          );
        case 'float':
          return (
            <input
              {...props}
              type="number"
              step={property.step || '0.1'}
              min={property.min}
              max={property.max}
            />
          );
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
            <label htmlFor={prop.name}>{prop.label || prop.name}:</label>
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
