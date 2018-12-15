import React from 'react';
import { connect } from 'react-redux';

import PlayerForm from './PlayerForm';
import { changeName } from '../redux/players';

const PlayerInput = props => {
  const players = Object.keys(props.players).map(key => props.players[key]);
  // const players = [];
  return (
    <div>
      <PlayerForm submit={props.changeName} />
      <ul>
        {players.map(player => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
      <button type="button">Start Game</button>
    </div>
  );
};

const mapStateToProps = state => ({
  players: state.players
});

const mapDispatchToProps = dispatch => ({
  changeName: name => dispatch(changeName(name))
});

const FooBar = () => <div />;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerInput);
