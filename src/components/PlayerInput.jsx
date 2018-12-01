import React from 'react';
import { connect } from 'react-redux';

import PlayerForm from './PlayerForm';
import { startGame } from '../redux/store';

const PlayerInput = props => {
  return (
    <div>
      <PlayerForm />
      <button type="button" onClick={props.startGame}>
        Start Game
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(startGame())
});

export default connect(
  null,
  mapDispatchToProps
)(PlayerInput);
