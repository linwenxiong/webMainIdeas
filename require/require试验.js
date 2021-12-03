var count = 3
function add() {
  count++
}
module.exports = {
  count,
  add,
  getCount() {
    return count
  }
}
