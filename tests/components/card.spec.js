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
  const testStyle = {
    transform: 'rotate(0deg)',
    left: 0,
    top: 0
  };

  beforeEach('Create component', () => {
    wrapper = shallow(
      <Card
        style={testStyle}
        selectCard={selectedSpy}
        card={card}
        scale={testScale}
      />
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
      expect(wrapper.prop('style').transform).to.contain(`scale(${testScale})`);
    });
    it('passes along the given style', () => {
      const style = wrapper.prop('style');
      expect(style.transform).to.contain(testStyle.transform);
      expect(style.left).to.equal(testStyle.left);
      expect(style.top).to.equal(testStyle.top);
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
