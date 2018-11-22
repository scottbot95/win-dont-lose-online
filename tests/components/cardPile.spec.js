/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

import { CardPile } from '../../src/components';

const adapter = new Adapter();
Enzyme.configure({ adapter });

describe('<CardPile /> Component', () => {
  const drawSpy = spy();

  describe('Rendering', () => {
    it('shows an empty pile with no cards');
    it('shows the appropriate number of cards with a few');
    it('only shows a max number of cards');
    it('shows an indicator of number of cards in the pile');
    it('propogates `faceDown` prop to all cards');
  });

  describe('Functionality', () => {
    afterEach('Reset the spy', () => {
      drawSpy.resetHistory();
    });
    it('Calls `drawCard` when the top card is clicked');
  });
});
