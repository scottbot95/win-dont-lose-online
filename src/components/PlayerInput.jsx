import React from 'react';
import { connect } from 'react-redux';

import PlayerForm from './PlayerForm';
import { startGame } from '../redux/actions';
import { basicCards } from '../game/cards';

const PlayerInput = props => {
  return (
    <div>
      <PlayerForm />
      <ul>
        {props.players.map(player => (
          <li key={player.name}>{player.name}</li>
        ))}
      </ul>
      <button type="button" onClick={props.startGame}>
        Start Game
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  players: state.players
});

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(startGame(basicCards))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerInput);
