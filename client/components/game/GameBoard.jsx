import React from 'react';
import { connect } from 'react-redux';

import GameBoardPresentational from './GameBoardPresentational';
import { getPlayerArray } from '../../redux/players';

class GameBoard extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.playCard = this.playCard.bind(this);
  }

  playCard() {
    console.log('PLAYING CARD', ...arguments);
  }

  render() {
    return (
      <GameBoardPresentational
        players={this.props.players}
        drawPile={this.props.drawPile}
        discardPile={this.props.discardPile}
        drawCard={this.props.drawCard}
        playCard={this.playCard}
        me={this.props.me}
      />
    );
  }
}

const mapStateToProps = state => ({
  players: getPlayerArray(state.players),
  drawPile: state.cards.drawPile,
  discardPile: state.cards.discardPile,
  me: state.players.me
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);
