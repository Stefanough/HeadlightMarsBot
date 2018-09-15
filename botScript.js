const promiseRequest = require('./promiseRequest');

const callsign = 'Xep';

/**
 * Register the bot with the CMS using the given name.
 * @param {string} callsign Bots distinct name.
 */
async function registerBot() {
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

async function scan(callsign) {
  return promiseRequest('/scan', { callsign });
}

/**
 * Runs bot script. What does bot do? Mine?
 */
async function run() {

  await registerBot();


}
