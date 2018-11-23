/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

import { CardPile, Card, CardList } from '../../src/components';
import { testHand, testDeck } from '../testData';

const adapter = new Adapter();
Enzyme.configure({ adapter });

describe('<CardPile /> Component', () => {
  let wrapper;
  const drawSpy = spy();

  beforeEach('Create component', () => {
    wrapper = shallow(<CardPile cards={testHand} faceDown />);
  });

  describe('Rendering', () => {
    it('shows an empty pile with no cards', () => {
      const empty = shallow(<CardPile cards={[]} />);
      expect(empty.find(Card).length).to.equal(0);
    });

    it('shows the appropriate number of cards with a few', () => {
      expect(wrapper.find(Card).length).to.equal(testHand.length);
    });

    it('only shows of 5 cards max number of cards', () => {
      const deck = shallow(<CardPile cards={testDeck} />);
      expect(deck.find(Card).length).to.equal(5);
    });

    it('shows an indicator of number of cards in the pile', () => {
      expect(
        wrapper.findWhere(n => n.text().contains(testHand.length))
      ).to.have.property('length', 1);
    });

    it('propogates `faceDown` prop to all cards', () => {
      wrapper.find(Card).forEach(card => {
        expect(card.props()).to.have.property('faceDown', false);
      });
    });

    it('properly shows when a scary card is on top', () => {
      expect(
        wrapper
          .find(Card)
          .first()
          .hasClass('scary')
      ).to.be.true;
    });
  });

  describe('Functionality', () => {
    afterEach('Reset the spy', () => {
      drawSpy.resetHistory();
    });

    it('calls `drawCard` when the top card is clicked', () => {
      expect(drawSpy).to.have.property('callCount', 0);
      wrapper
        .find(Card)
        .first()
        .simulate('click');
      expect(drawSpy).to.have.property('callCount', 1);
    });

    it("doesn't crash if top card is click and `drawCard` isn't specified", () => {
      const noClicking = shallow(<CardList cards={testHand} />);
      noClicking
        .find(Card)
        .first()
        .simulate('click');
    });
  });
});
