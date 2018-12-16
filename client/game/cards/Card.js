let nextId = 1;

export default class Card {
  constructor(options, ignoreWarnings) {
    const defs = {
      title: 'Title',
      description: 'Insert filler text here',
      flavor: 'Filler? I hardly know her!',
      isScary: false
    };

    this._data = Object.assign({}, defs, options);
    this._id = nextId++;

    if (!ignoreWarnings) {
      if (options === undefined) {
        console.warn('Creating card with default values');
        return;
      }
      if (options.title === undefined)
        console.warn('Creating card with default title');
      if (options.description === undefined)
        console.warn('Creating card with default description');
      if (options.flavor === undefined)
        console.warn('Creating card with default flavor');
    }
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._data.title;
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
