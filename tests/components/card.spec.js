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
  const testScale = 0.75;

  beforeEach('Create component', () => {
    wrapper = shallow(
      <Card selectCard={selectedSpy} card={card} scale={testScale} />
    );
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

    it('renders an empty h4 tag if points are 0', () => {
      const noPoints = shallow(<Card card={{ ...card, points: 0 }} />);
      expect(noPoints.find('h4').text()).to.be.empty;
    });

    it('renders description and flavor text to p tags', () => {
      expect(wrapper.containsMatchingElement(<p>{card.description}</p>)).to.be
        .true;
      expect(wrapper.containsMatchingElement(<p>{card.flavor}</p>)).to.be.true;
    });
    it('scales itself based on the `scale` property', () => {
      expect(wrapper.prop('style')).to.have.property(
        'transform',
        `scale(${testScale})`
      );
    });
  });

  describe('Functionality', () => {
    afterEach('Reset selectedSpy', () => {
      selectedSpy.resetHistory();
    });

    it('calls the `selectCard` callback on click', () => {
      wrapper.simulate('click');
      expect(selectedSpy.calledWith(card)).to.be.true;
    });

    it('optionally take an `selectCard` callback', () => {
      const noCallback = shallow(<Card card={card} />);
      noCallback.simulate('click');
    });
  });
});
