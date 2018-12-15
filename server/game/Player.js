const PlayerFlags = {
  PLAYING: 1,
  WON: 2,
  LOST: 4
};
Object.freeze(PlayerFlags);

let nextId = 1;

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.keepers = [];
    this.score = 0;
    this.flags = 0;
    this.id = nextId++;
  }
}

module.exports = { Player, PlayerFlags };
