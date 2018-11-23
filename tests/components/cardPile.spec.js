/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

import { CardPile, Card, CardList } from '../../src/components';
import { testHand, testDeck } from '../testData';

import jsdom from 'jsdom';
import { exec } from 'child_process';
const { document } = new jsdom.JSDOM('').window;
global.document = document;
global.window = document.defaultView;

const adapter = new Adapter();
Enzyme.configure({ adapter });

describe('<CardPile /> Component', () => {
  let wrapper, cards;
  const drawSpy = spy();

  beforeEach('Create component', () => {
    wrapper = mount(
      <CardPile cards={testHand} selectCard={drawSpy} faceDown />
    );
    cards = wrapper.find(Card);
  });

  describe('Rendering', () => {
    it('shows an empty pile with no cards', () => {
      const empty = shallow(<CardPile cards={[]} />);
      expect(empty.find(Card).length).to.equal(0);
    });

    it('shows the appropriate number of cards with a few', () => {
      expect(cards.length).to.equal(testHand.length);
    });

    it('only shows of 5 cards max number of cards', () => {
      const deck = shallow(<CardPile cards={testDeck} />);
      expect(deck.find(Card).length).to.equal(5);
    });

    it('shows an indicator of number of cards in the pile', () => {
      const cardCount = wrapper.find('.cardCount');
      expect(cardCount).to.have.property('length', 1);
      expect(cardCount.text()).to.contain(testHand.length);
    });

    it('propogates `faceDown` prop to all cards', () => {
      cards.forEach(card => {
        expect(card.props()).to.have.property('faceDown', true);
      });
    });

    it('properly adds scary class to cards', () => {
      cards.forEach((card, i) => {
        expect(card.find('.scary').exists()).to.equal(!!testHand[i].isScary);
      });
    });

    it('sets the z-index on cards', () => {
      cards.forEach((card, i) => {
        expect(card.prop('style')).to.have.property('zIndex', -i);
      });
    });

    it('moves the cards on top up and to the left a bit', () => {
      cards.forEach((card, i) => {
        if (i !== cards.length - 1) {
          expect(card.prop('style').top).to.be.lessThan(
            cards.at(i + 1).prop('style').top
          );
          expect(card.prop('style').left).to.be.lessThan(
            cards.at(i + 1).prop('style').left
          );
        }
      });
    });
  });

  describe('Functionality', () => {
    afterEach('Reset the spy', () => {
      drawSpy.resetHistory();
    });

    it('calls `drawCard` only when the top card is clicked', () => {
      expect(drawSpy).to.have.property('callCount', 0);
      cards.forEach(card => card.simulate('click'));
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
