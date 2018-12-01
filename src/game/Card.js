export default class Card {
  constructor() {
    if (this.constructor === Card) {
      throw new Error('Cannot insaniate `Card` class');
    }
  }

  get title() {
    return 'Title';
  }

  get points() {
    return 0;
  }

  get description() {
    return 'Insert filler text here';
  }

  get flavor() {
    return 'Filler? I hardly know her!';
  }

  get isScary() {
    return false;
  }
}
