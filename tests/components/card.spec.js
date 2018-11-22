/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

const adapter = new Adapter();
Enzyme.configure({ adapter });

import { Card } from '../../src/components';
import { card } from '../testData';

describe('<Card /> component', () => {
  let wrapper;
  const selectedSpy = spy();

  beforeEach('Create component', () => {
    wrapper = shallow(<Card cardSelected={selectedSpy} card={card} />);
  });

  describe('Rendering', () => {
    it('renders title to an h3 tag', () => {
      expect(
        wrapper
          .find('h3')
          .text()
          .trim()
      ).to.equal(card.title);
    });
    it('renders points to an h4 tag if given', () => {
      expect(wrapper.find('h4').text()).to.contain(card.points);
    });
    it('renders description and flavor text to p tags', () => {
      expect(wrapper.containsMatchingElement(<p>{card.description}</p>)).to.be
        .true;
      expect(wrapper.containsMatchingElement(<p>{card.flavor}</p>)).to.be.true;
    });
  });

  describe('Functionality', () => {
    afterEach('Reset selectedSpy', () => {
      selectedSpy.resetHistory();
    });

    it('calls the `cardSelected` callback on click', () => {
      wrapper.simulate('click');
      expect(selectedSpy.calledWith(card)).to.be.true;
    });

    it('optionally take an `cardSelected` callback', () => {
      const noCallback = shallow(<Card card={card} />);
      noCallback.simulate('click');
    });
  });
});
