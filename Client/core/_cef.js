global.c._Cef = class _Cef {
    constructor() {
        global.cef = mp.browsers.new('package://cef/index.html');
        //global.cef = mp.browsers.new('http://localhost:8080');
    }

    show(name, toggle) {
        cef.execute(`app.showInterface('${name}',${toggle ? 1 : 0})`);
    }

    addNotify(type, text) {
        cef.execute(`app.addNotify("${type}","${text}")`);
    }

    hideAll() {
        cef.execute(`app.hideAllInterfaces()`);
    }

    setInteract(toggle) {
        mp.gui.chat.show(!toggle);

        setTimeout(() => {
            mp.gui.cursor.show(toggle, toggle);
        }, 100);


        mp.game.ui.displayRadar(!toggle);
    }
}