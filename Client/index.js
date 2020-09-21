class Main {
    constructor() {
        global.localPlayer = mp.players.local;
        global.client = {};

        this.uploadObjects();
        this.uploadEvents();
    }

    uploadEvents() {
        require('./core/events.js');
    }

    uploadObjects() {
        global.c = {};

        let objects = [
            "auth",
            "cef"
        ];

        objects.forEach(el => {
            require(`./core/_${el}.js`);
        });

        global._ = {
            cef: new c._Cef,
            auth: new c._Auth
        };
    }
}

new Main();
