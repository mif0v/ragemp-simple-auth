const mongoose = require('mongoose');
const config = require('../configs/DB.js')

class MongoDB {
    connect(cb) {
        mongoose.connect(config.link, {useNewUrlParser: true, useUnifiedTopology: true}).catch(e => console.log(e));
        this.handle = mongoose.connection;
        this.generateModels();

        this.handle.on('error', (e) => {
            console.log(`\n\x1b[34m[LOADER] \x1b[37mDatabase Error - \x1b[31m${e}`)
        });
        this.handle.once('open', () => {
            console.log('\n\x1b[34m[LOADER] \x1b[37mDatabase - \x1b[32mconnected');
            cb();
        });
    }

    generateModels() {
        global.models = {};

        for (let el in config.schemas) {
            models[el] = mongoose.model(el, new mongoose.Schema(config.schemas[el]));
        }
    }
}

module.exports = new MongoDB();