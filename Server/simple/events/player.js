module.exports = {
    "playerJoin": player => {
        player.spawn(2778.8583984375, 4445.71240234375, 100.32052612304688);
        player.dimension = player.id + 1000;

        player.call("client::auth:start");
    }
}
