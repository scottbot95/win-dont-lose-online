import { expect } from 'chai';

import Card from '../../src/game/cards/Card';

const cardData = [
  {
    title: 'Get Crazy-Go-Nuts',
    description: 'Play the top three cards of the deck, one at a time',
    flavor: 'Play all thee at the same time would be stark-raving-mad-go-nuts.',
    isScary: true
  },
  {
    title: 'Narcolepsy',
    description:
      'Pick a player. They miss a turn. You can take a keeper card from tin form of them or pass them a keeper card in form of you.',
    flavor: 'Zzzzzzzzz…'
  },
  {
    title: 'Strategic Retreat',
    description:
      'You lose, but in the next game you draw an extra card and go first.',
    flavor: 'Run away! Run away! Keep running!'
  },
  {
    title: "The Ol' Switcheroo",
    description:
      "Choose one:\nTake a keeper from in front of a player into your hand and play another keeper card from your hand on that player,\n-or-\nTake a card from someone's hand and give them a different card from your hand, if you have one.",
    flavor: 'Since it worked so well for Indiana Jones'
  }
];

describe('Card class', () => {
  describe('getters', () => {
    let card;
    let raw;
    beforeEach('create card', () => {
      raw = cardData[Math.floor(Math.random() * cardData.length)];
      card = new Card(raw);
    });

    it('has a `title` getter', () => {
      expect(card.title).to.equal(raw.title);
    });

    it('has a `description` getter', () => {
      expect(card.description).to.equal(raw.description);
    });

    it('has a `flavor` getter', () => {
      expect(card.flavor).to.equal(raw.flavor);
    });

    it('has a `isScary` getter', () => {
      expect(card.isScary).to.equal(!!raw.isScary);
    });
  });
});
