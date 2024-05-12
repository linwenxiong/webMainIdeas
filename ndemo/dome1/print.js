const config = require("./config");

function print(index) {
    console.clear();
    const text = config.text.substring(0, index)
    console.log(text)
}
module.exports = print;