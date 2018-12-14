import React from 'react';
import { connect } from 'react-redux';

import GameBoardPresentational from './GameBoardPresentational';
import { drawCard, endTurn, playCard } from '../../redux/actions';

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

  playCard(card) {
    console.log(card);
    // TODO choose target player if keeper
    // TODO run card action here
    this.props.playCard(card);
    this.props.endTurn();
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

const mapDispatchToProps = dispatch => ({
  drawCard: () => dispatch(drawCard()),
  endTurn: () => dispatch(endTurn()),
  playCard: (card, player) => dispatch(playCard(card, player))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);
