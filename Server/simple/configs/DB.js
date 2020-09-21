module.exports = {
    link: '', // MongoDB link
    schemas: {
        "accounts": {
            username: String,
            email: String,
            password: String,
            HWID: String,
            ip: String,
            socialClub: String,
        }
    }
}