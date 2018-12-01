import React from 'react';

import { testDeck } from '../../../tests/testData';
import GameBoardPresentational from './GameBoardPresentational';

export default class GameBoard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <GameBoardPresentational
        players={this.props.players}
        drawPile={testDeck}
        discardPile={testDeck}
      />
    );
  }
}
