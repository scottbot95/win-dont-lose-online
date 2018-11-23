/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

import { CardPile, Card, CardList, GameBoard } from '../../src/components';
import { testHand, testDeck, testPlayers } from '../testData';

const adapter = new Adapter();
Enzyme.configure({ adapter });

describe('<GameBoard /> Component', () => {
  let wrapper;

  beforeEach('Create component', () => {
    wrapper = shallow(<GameBoard />);
  });

  describe('Rendering', () => {
    it('displays the correct number of players');
    it('has a face down draw pile');
    it('has a face up discard pile');
  });

  describe('State', () => {
    it('has an `activePlayer` field');
    it('has a `drawPile` field');
    it('has a `discardPile` field');
  });

  describe('Functionality', () => {
    it('deals 3 cards to each player at the start');
    it('deals a card to the active player when they click the draw pile');
    it('does nothing if an inactive player clicks the draw pile');
  });
});
