export default class Card {
  constructor(options) {
    // if (this.constructor === Card) {
    //   throw new Error('Cannot insaniate `Card` class');
    // }
    const defs = {
      title: 'Title',
      points: 0,
      description: 'Insert filler text here',
      flavor: 'Filler? I hardly know her!',
      isScary: false
    };

    this._data = Object.assign({}, defs, options);
  }

  get title() {
    return this._data.title;
  }

  get points() {
    return this._data.points;
  }

  get description() {
    return this._data.description;
  }

  get flavor() {
    return this._data.flavor;
  }

  get isScary() {
    return this._data.isScary;
  }

  playCard() {
    if (typeof this._data.applyAction === 'function') {
      this._data.applyAction(...arguments);
    }
  }
}
