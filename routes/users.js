const usersRouter = require('express').Router()
const {loadUsers, addUsers} = require("../utils/users");

usersRouter.get("/", (req, res) => {
    res.render("index")
});

usersRouter.get("/games", (req, res) => {
    res.render("main")
});

usersRouter.get("/api/v1/users", (req, res) => {
    const data = loadUsers();
    const users = data.map((user) => {
        return {
            nama: user.nama,
            umur: user.umur,
        };
    });

    res.json(users);
});

usersRouter.post("/api/v1/users", (req, res) => {
    addUsers(req.body);
});

module.exports = usersRouter;
