import { expect } from 'chai';

import {
  reducer,
  reverseTurnOrder
} from '../../src/redux/actions/reverseTurnOrder';
import { REVERSE_TURN_ORDER } from '../../src/redux/types';

describe('reverseTurnOrder', () => {
  describe('action creator', () => {
    it('creates an action to reverse the turn order', () => {
      expect(reverseTurnOrder()).to.deep.equal({
        type: REVERSE_TURN_ORDER
      });
    });
  });

  describe('reducer', () => {
    it('flips direction left->right', () => {
      expect(
        reducer({ turnReversed: false }, { type: REVERSE_TURN_ORDER })
      ).deep.equal({ turnReversed: true });
    });

    it('flips direction right->left', () => {
      expect(
        reducer({ turnReversed: true }, { type: REVERSE_TURN_ORDER })
      ).deep.equal({ turnReversed: false });
    });
  });
});
