export const card = {
  id: 1,
  title: 'Eeyore',
  points: 10,
  description: 'You lose',
  flavor: 'sadness?',
  isScary: true
};

export const testHand = [
  {
    id: 2,
    title: 'Fake Card',
    points: -10,
    description: 'You win',
    flavor: 'happiness?'
  },
  {
    id: 3,
    title: 'Fake Card 2',
    points: 0,
    description: 'You win',
    flavor: 'happiness?'
  },
  card
];

export const testDeck = [
  card,
  {
    id: 2,
    title: 'Fake Card',
    points: -10,
    description: 'You win',
    flavor: 'happiness?'
  },
  {
    id: 3,
    title: 'Fake Card 2',
    points: 0,
    description: 'You win',
    flavor: 'happiness?'
  },
  {
    id: 4,
    title: 'Fake Card 3',
    points: -10,
    description: 'You win',
    flavor: 'happiness?'
  },
  {
    id: 5,
    title: 'Fake Card 4',
    points: 0,
    description: 'You win',
    flavor: 'happiness?'
  },
  {
    id: 6,
    title: 'Fake Card 5',
    points: -10,
    description: 'You win',
    flavor: 'happiness?'
  },
  {
    id: 7,
    title: 'Fake Card 6',
    points: 0,
    description: 'You win',
    flavor: 'happiness?'
  },
  {
    id: 8,
    title: 'Fake Card 7',
    points: -10,
    description: 'You win',
    flavor: 'happiness?'
  },
  {
    id: 9,
    title: 'Fake Card 8',
    points: 0,
    description: 'You win',
    flavor: 'happiness?'
  },
  {
    id: 10,
    title: 'Fake Card 9',
    points: -10,
    description: 'You win',
    flavor: 'happiness?'
  },
  {
    id: 11,
    title: 'Fake Card 10',
    points: 0,
    description: 'You win',
    flavor: 'happiness?'
  }
];

const playerNames = Array(4)
  .fill(0)
  .map((_, i) => `Player ${i + 1}`);

export const testPlayers = Array(playerNames.length)
  .fill(0)
  .map((_, i) => {
    return {
      name: playerNames[i]
    };
  });

export const testPlayer = testPlayers[0];
