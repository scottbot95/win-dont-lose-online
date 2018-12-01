import React from 'react';
import { connect } from 'react-redux';

import { GameBoard } from './components';
import PlayerInput from './components/PlayerInput';
import { GameStateEnum } from './redux/store';

const Main = props => {
  let page;
  switch (props.gameState) {
    case GameStateEnum.PENDING:
      page = <PlayerInput />;
      break;
    case GameStateEnum.PLAYING:
    default:
      page = <GameBoard players={props.players} />;
  }
  return <div>{page}</div>;
};

const mapStateToProps = state => ({
  players: state.players,
  gameState: state.status
});

export default connect(mapStateToProps)(Main);
