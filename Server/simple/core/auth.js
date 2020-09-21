class Auth {
    loginAccount(player, username, password) {
        models.accounts.find({username: username}).exec((e, r) => {
            if (e) return console.log(e);
            if (r.length > 0) {
                if (r[0].password === password) {
                    player.name = username;
                    player.dimension = 0;
                    player.call("client::auth:finish", [username])
                } else {
                    player.call("client::notify", ["e", "Wrong password"]);
                }
            } else {
                player.call("client::notify", ["e", "Such an account doesn't exist"]);
            }
        });
    }

    registerAccount(player, username, email, password) {
        models.accounts.find({
            $or: [{
                'username': username
            }, {
                'socialClub': player.socialClub
            }, {
                'email': email
            }, {
                'HWID': player.serial
            }]
        }).exec((e, r) => {
            if (e) return console.log(e);
            if (r.length > 0) {
                if (r[0].username === username) {
                    return player.call("client::notify", ["e", "This login is already busy"]);
                } else if (r[0].socialСlub === player.socialClub) {
                    return player.call("client::notify", ["e", "An account has already been registered for this social club"]);
                } else if (r[0].email === email) {
                    return player.call("client::notify", ["e", "An account has already been registered at this email"]);
                } else if (r[0].HWID === player.serial) {
                    return player.call("client::notify", ["e", "An account is already registered on this computer"]);
                }
            }

            let qData = {
                username: username,
                email: email,
                password: password,
                HWID: player.serial,
                ip: player.ip,
                socialClub: player.socialClub,
            };

            player.name = username;

            let data = new models.accounts(qData);
            data.save().catch(e => console.log(e));
            player.dimension = 0;
            player.call("client::auth:finish", [username])
        });
    }
}

module.exports = new Auth();