const config = require('./config');
const print = require('./print');
const delay = require('./delay');
async function run() {
    let index = 0;
    while(index < config.text.length) {
        print(index);
        await delay(config.wordDuration);
        index ++;
    }
}
run();