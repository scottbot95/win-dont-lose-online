import React from 'react';
import { connect } from 'react-redux';
import { Player } from '../game';

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

const mapDispatchToProps = dispatch => ({});

export default connect(
  null,
  mapDispatchToProps
)(PlayerForm);
