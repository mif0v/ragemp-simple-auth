class Main {
    constructor() {
        this.modLoader();
    }
    
    modLoader() {
        global._ = {};
        global.DB = require('./plugins/DB.js');
        require('./plugins/loader.js');
    }
}

new Main();