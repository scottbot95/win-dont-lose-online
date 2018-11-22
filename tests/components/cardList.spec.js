/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

import { Card, CardList } from '../../src/components';

const adapter = new Adapter();
Enzyme.configure({ adapter });

describe('<CardList /> Component', () => {
  describe('Rendering', () => {
    it('renders the correct number of <Card /> components');
  });
  describe('Functionality', () => {
    it('calles `selectCard` when a card is clicked');
  });
});
