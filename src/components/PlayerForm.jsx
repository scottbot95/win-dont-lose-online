import React from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../redux/actions';
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
    this.props.addPlayer(new Player(this.state.input));
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

const mapDispatchToProps = dispatch => ({
  addPlayer: player => dispatch(addPlayer(player))
});

export default connect(
  null,
  mapDispatchToProps
)(PlayerForm);
