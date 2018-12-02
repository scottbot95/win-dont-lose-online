import React from 'react';
import { connect } from 'react-redux';

import { GameBoard } from './components';
import PlayerInput from './components/PlayerInput';
import { GameStateEnum } from './redux/types';

const Main = props => {
  let page;
  switch (props.gameState) {
    case GameStateEnum.PENDING:
      page = <PlayerInput />;
      break;
    case GameStateEnum.PLAYING:
    default:
      page = <GameBoard />;
  }
  return <div>{page}</div>;
};

const mapStateToProps = state => ({
  gameState: state.status
});

export default connect(mapStateToProps)(Main);
