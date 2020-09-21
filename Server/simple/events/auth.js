module.exports = {
    "server::auth:login": (player, username, password) => {
        _.auth.loginAccount(player, username, password);
    },

    "server::auth:register": (player, username, email, password) => {
        _.auth.registerAccount(player, username, email, password);
    }
}