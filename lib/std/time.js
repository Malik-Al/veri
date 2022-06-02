function now() {
  return Date.now();
}
const startTime = now();

function getStartTime() {
  return startTime;
}

function getLessTime() {
  return now() - startTime;
}

module.exports = {
  getStartTime,
  getLessTime,
  now,
};
