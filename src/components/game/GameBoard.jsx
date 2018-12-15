import React from 'react';
import { connect } from 'react-redux';

import GameBoardPresentational from './GameBoardPresentational';

class GameBoard extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.playCard = this.playCard.bind(this);
  }

  componentDidMount() {
    // let remainingCards = this.props.players.length * 3;
    // const interval = setInterval(() => {
    //   this.props.drawCard();
    //   this.props.endTurn();
    //   if (--remainingCards === 0) clearInterval(interval);
    // }, 500);
  }

  render() {
    return (
      <GameBoardPresentational
        players={this.props.players}
        drawPile={this.props.drawPile}
        discardPile={this.props.discardPile}
        drawCard={this.props.drawCard}
        playCard={this.playCard}
      />
    );
  }
}

const mapStateToProps = state => ({
  players: state.players,
  drawPile: state.drawPile,
  discardPile: state.discardPile
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);
