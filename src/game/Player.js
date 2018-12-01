export const PlayerStatus = { PLAYING: 1, LOST: 2, WON: 3 };
Object.freeze(PlayerStatus);

export default class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.keepers = [];
    this.status = PlayerStatus.PLAYING;

    this._symbol = Symbol(name);
  }

  getPoints() {
    return this.keepers.reduce((points, card) => points + card.points, 0);
  }

  get id() {
    return this._symbol;
  }
}
