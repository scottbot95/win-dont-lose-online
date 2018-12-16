import React from 'react';
import { connect } from 'react-redux';

import PlayerForm from './PlayerForm';
import { changeName, getPlayerArray } from '../redux/players';
import { sendStartGame } from '../redux/gameState';

import basicCards from '../game/cards';

const PlayerInput = props => {
  return (
    <div>
      <PlayerForm submit={props.changeName} />
      <ul>
        {props.players.map(player => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
      {props.me.isVIP && (
        <button type="button" onClick={props.startGame}>
          Start Game
        </button>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  players: getPlayerArray(state.players),
  me: state.players.me
});

const mapDispatchToProps = dispatch => ({
  changeName: name => dispatch(changeName(name)),
  startGame: () => dispatch(sendStartGame(basicCards))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerInput);
