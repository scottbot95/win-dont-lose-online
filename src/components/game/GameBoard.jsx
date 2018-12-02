import React from 'react';
import { connect } from 'react-redux';

import GameBoardPresentational from './GameBoardPresentational';
import { drawCard } from '../../redux/actions';

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
        drawCard={this.props.drawCard}
      />
    );
  }
}

const mapStateToProps = state => ({
  players: state.players,
  drawPile: state.drawPile,
  discardPile: state.discardPile
});

const mapDispatchToProps = dispatch => ({
  drawCard: () => dispatch(drawCard())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);
