const { promiseRequest } = require('./promiseRequest');
const Bot = require('./Bot');

// const callsign = 'Xep';

/**
 * Register the bot with the CMS using the given name.
 * @param {string} callsign Bots distinct name.
 */
async function registerBot(callsign) {
  return promiseRequest('/register', { callsign });
}

/**
 * Moves the bot one unit at a time.
 * @param {string} x x coordinates
 * @param {string} y y coordinates
 */
async function moveBot(x, y) {
  return promiseRequest('/move', { x, y });
}

/**
 * Scans a 5 x 5 area and returns data
 * @param {string} callsign bot's callsign
 */
async function scan(callsign) {
  return promiseRequest('/scan', { callsign });
}

/**
 * Attaches the bot's callsign to a scanned node.
 * @param {string} callsign bot's callsign
 * @param {string} node node Id
 */
async function claim(callsign, node) {
  return promiseRequest('/claim', { callsign, node });
}

/**
 * Checks if the entire map has been scanned. Each coordinate is stored as a 0 (not scanned) or
 * a 1 (scanned). Returns true when all coordinates are scanned.
 * @param {array} area Total 100 x 100 map area represented by a 2D array.
 */
function allExplored(map) {
  return map.every(c => c);
}

/**
 * Runs bot script. What does bot do? Mine?
 */
async function run() {
  let pos;
  let map = Array(100).fill().map(() => Array(100).fill(0));
  const bot = new Bot('Xep');

  let p = await registerBot(bot.callsign);
  console.log(p);
  pos = p.Location;
  p = scan(bot.Location);
  console.log(scan);
  let claims = [];
  if (p.Nodes !== []) {
    p.Nodes.forEach((node) => {
      claims.push(claim(bot.callsign, node.Id));
    });
  }

  bot.updatePosition(p.Location);
  console.log('Bot: ', bot);
}

run();
