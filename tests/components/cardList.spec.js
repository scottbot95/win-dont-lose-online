/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

import { Card, CardList } from '../../src/components';

import { testHand } from '../testData';

const adapter = new Adapter();
Enzyme.configure({ adapter });

describe('<CardList /> Component', () => {
  let wrapper;
  let cards;
  const selectSpy = spy();

  beforeEach('Create component', () => {
    wrapper = shallow(
      <CardList cards={testHand} selectCard={selectSpy} spread />
    );
    cards = wrapper.find(Card);
  });

  describe('Rendering', () => {
    it('renders the correct number of <Card /> components', () => {
      expect(cards).to.have.property('length', testHand.length);
    });
    it('propogates `faceDown` prop to all cards', () => {
      const faceDownList = shallow(<CardList cards={testHand} faceDown />);
      faceDownList.find(Card).forEach(card => {
        expect(card.props()).to.have.property('faceDown', true);
      });
    });
  });

  describe('Functionality', () => {
    afterEach('Reset spy', () => {
      selectSpy.resetHistory();
    });

    it("passes it's `selectCard` callback to call cards", () => {
      cards.forEach(node => {
        expect(node.props()).to.have.property('selectCard', selectSpy);
      });
    });
  });
});
