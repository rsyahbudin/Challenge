const fs = require('fs');

const loadUsers = () => {
    const fileBuffer = fs.readFileSync('./database/users.json')
    const users = JSON.parse(fileBuffer)
    return users
}

const saveUsers = (users) => {
    fs.writeFileSync('./database/users.json', JSON.stringify(users))
}

const addUsers = (user) => {
    const users = loadUsers()
    users.push(user)
    saveUsers(users)
}

module.exports = {loadUsers, addUsers}