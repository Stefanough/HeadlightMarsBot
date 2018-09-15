/**
 * Bot class
 */
class Bot {
  constructor(callsign) {
    this.callsign = callsign;
    this.pos;
    this.nodes = [];
    this.currNode;
  }
}

module.exports = Bot;
