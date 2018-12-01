export default class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.keepers = [];
  }

  getPoints() {
    return this.keepers.reduce((points, card) => points + card.points, 0);
  }
}
