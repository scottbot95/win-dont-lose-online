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
  const selectSpy = spy();

  beforeEach('Create component', () => {
    wrapper = shallow(
      <CardList cards={testHand} selectCard={selectSpy} spread />
    );
  });

  describe('Rendering', () => {
    it('renders the correct number of <Card /> components', () => {
      expect(wrapper.find(Card)).to.have.property('length', testHand.length);
    });
  });

  describe('Functionality', () => {
    afterEach('Reset spy', () => {
      selectSpy.resetHistory();
    });

    it("passes it's `selectCard` callback to call cards", () => {
      wrapper.find(Card).forEach(node => {
        expect(node.props()).to.have.property('selectCard', selectSpy);
      });
    });
  });
});
