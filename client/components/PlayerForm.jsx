import React from 'react';

class PlayerForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ input: '' });
    this.props.submit(this.state.input);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Player Name:{' '}
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.input}
          />
        </label>
        <button type="submit">Add Player</button>
      </form>
    );
  }
}

export default PlayerForm;
