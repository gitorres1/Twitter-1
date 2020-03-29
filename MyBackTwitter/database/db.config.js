const dbconfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "toor",
    DB: "faketwitter",
    dialect: "mysql",
    pool: {
        maz: 5,
        min: 0,
        acquire:3000,
        idle: 10000
    }
}

module.exports = dbconfig;