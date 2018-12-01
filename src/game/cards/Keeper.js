import Card from './Card';

export default class Keeper extends Card {
  constructor() {
    super();

    const defs = {
      points: 0
    };

    this._data = Object.assign({}, defs, this._data);
  }
}
