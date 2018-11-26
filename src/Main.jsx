import React from 'react';

import {
  Card,
  CardList,
  CardPile,
  Player,
  GameBoard,
  CircleContainer
} from './components';

import Container from './components/Container';

import { card, testHand, testPlayer, testPlayers } from '../tests/testData';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      startAngle: 90,
      radius: 100
    };

    this.cardSelected = this.cardSelected.bind(this);
    this.updateCircle = this.updateCircle.bind(this);
  }

  cardSelected(selected) {
    console.log(selected);
  }

  updateCircle(event) {
    this.setState({ [event.target.id]: Number(event.target.value) });
  }

  render() {
    return (
      <div style={{ paddingLeft: 50, paddingTop: 50 }}>
        {/* <Card selectCard={this.cardSelected} card={card} /> */}
        {/* <CardList cards={testHand} selectCard={this.cardSelected} spread /> */}
        {/* <CardList cards={testHand} selectCard={this.cardSelected} faceDown /> */}
        {/* <CardPile cards={testHand} selectCard={this.cardSelected} /> */}
        {/* <Player
          cards={testHand}
          playCard={this.cardSelected}
          player={testPlayer}
          me
        /> */}
        {/* <GameBoard players={testPlayers} /> */}
        <label htmlFor="startAngle">Start Angle</label>
        <input
          id="startAngle"
          type="number"
          step="1"
          value={this.state.startAngle}
          onChange={this.updateCircle}
        />
        <label htmlFor="radius">Radius</label>
        <input
          id="radius"
          type="number"
          step="1"
          value={this.state.radius}
          onChange={this.updateCircle}
        />
        <CircleContainer
          radius={this.state.radius}
          startAngle={this.state.startAngle}
        >
          <p>a</p>
          <p>b</p>
          <p>c</p>
          <p>d</p>
        </CircleContainer>
      </div>
    );
  }
}
