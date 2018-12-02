import { expect } from 'chai';

import { reducer, initialState } from '../../src/redux';

describe('Redux store', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).to.equal(initialState);
  });
});
