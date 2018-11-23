/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

import { Player, CardList } from '../../src/components';
import { testHand, testDeck, testPlayer } from '../testData';

const adapter = new Adapter();
Enzyme.configure({ adapter });

testPlayer.points = 0;

describe('<Player /> Component', () => {
  let wrapper;
  let cardList;
  const cardSpy = spy();

  beforeEach('Create component', () => {
    wrapper = shallow(
      <Player cards={testHand} playCard={cardSpy} player={testPlayer} />
    );
    cardList = wrapper.find(CardList);
  });

  describe('Rendering', () => {
    it('displays the players name', () => {
      expect(wrapper.containsMatchingElement(<p>{testPlayer.name}</p>)).to.be
        .true;
    });

    it("passes it's `cards` prop along to it's list", () => {
      expect(cardList.props()).to.have.property('cards', testHand);
    });

    it("cards are `faceDown` if `me` isn't provided", () => {
      expect(cardList.props()).to.have.property('faceDown', true);
    });

    it("passes `playCard` to it's CardList", () => {
      expect(cardList.props()).to.have.property('selectCard', cardSpy);
    });

    it("displays the player's current score", () => {
      expect(wrapper.find('.score').text()).to.contain(testPlayer.points);
    });
  });
});
