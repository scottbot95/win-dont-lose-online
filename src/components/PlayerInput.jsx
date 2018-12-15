import React from 'react';
import { connect } from 'react-redux';

import PlayerForm from './PlayerForm';

const PlayerInput = props => {
  const players = Object.keys(props.players).map(key => props.players[key]);
  console.log(players);
  return (
    <div>
      <PlayerForm />
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

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerInput);
