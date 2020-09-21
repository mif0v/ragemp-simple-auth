mp.events.add({
    "render": () => {
        mp.game.ui.displayCash(false);
    },

    "client::notify": (type, text) => {
        _.cef.addNotify(type, text);
    },

    "client::auth:start": () => {
        _.auth.join();
    },

    "client::auth:register": (username, email, password) => {
        mp.events.callRemote('server::auth:register', username, email, password);
    },

    "client::auth:login": (username, password) => {
        mp.events.callRemote('server::auth:login', username, password);
    },

    "client::auth:finish": (username) => {
        _.auth.finish(username);
    }
});