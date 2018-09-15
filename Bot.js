/**
 * Bot class
 */
class Bot {
  constructor(callsign) {
    this.callsign = callsign;
    this.pos = { x: 0, y: 0 };
    this.nodes = [];
    // this.currNode;
  }

  updatePosition(x, y) {
    this.pos = { x, y };
  }
}

module.exports = Bot;
