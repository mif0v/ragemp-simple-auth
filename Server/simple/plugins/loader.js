const fs = require('fs');
const path = require('path');

DB.connect(() => {

    console.log('\n\x1b[34m[LOADER] \x1b[37mLoading objects:');

    fs.readdirSync(path.resolve(__dirname, '../core')).forEach(src => {
        process.stdout.write('\x1b[37m\t\"' + src + '\"');
        global._[src.replace(".js", "")] = require('../core/' + src);
        console.log(" - \x1b[32mOK");
    });

    let events = [];
    console.log('\n\x1b[34m[LOADER] \x1b[37mLoading events:');

    fs.readdirSync(path.resolve(__dirname, '../events')).forEach(src => {
        process.stdout.write('\x1b[37m\t\"' + src + '\"');
        events = events.concat(require('../events/' + src));
        console.log(" - \x1b[32mOK");
    });
    events.forEach(event => {
        mp.events.add(event);
    });

    console.log("\n\x1b[34m[LOADER] \x1b[37mServer successfully started\n")
});
