global.c._Auth = class _Auth {
    constructor() {

    }

    join() {
        _.cef.setInteract(true);
        localPlayer.freezePosition(true);
        localPlayer.setVisible(false, false);

        global.client.camera = mp.cameras.new('default', new mp.Vector3(2778.8583984375, 4445.71240234375, 129.32052612304688), new mp.Vector3(0, 0, 0), 15);

        global.client.camera.pointAtCoord(2578.02880859375, 4269.470703125, 60.12599182128906);
        global.client.camera.setActive(true);

        mp.game.cam.renderScriptCams(true, false, 0, true, false);

        _.cef.show('auth', true);
    }

    finish(username) {
        localPlayer.setCoords(-425.517, 1123.620, 325.8544, false, false, false, false);
        localPlayer.freezePosition(false);
        localPlayer.setVisible(true, true);

        global.client.camera.destroy(true);

        mp.game.cam.renderScriptCams(false, true, 0, false, true);

        _.cef.show('auth', false);
        _.cef.setInteract(false);

        mp.gui.chat.push(`Welcome, ${username}!`)
    }
}
