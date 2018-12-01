import React from 'react';
import { connect } from 'react-redux';

import GameBoardPresentational from './GameBoardPresentational';

class GameBoard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <GameBoardPresentational
        players={this.props.players}
        drawPile={this.props.drawPile}
        discardPile={this.props.discardPile}
      />
    );
  }
}

const mapStateToProps = state => ({
  players: state.players,
  drawPile: state.drawPile,
  discardPile: state.discardPile
});

export default connect(mapStateToProps)(GameBoard);
