const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const usersRouter = require('./routes/users')

app.use(express.static('static'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(morgan('dev'))
app.set('view engine', 'ejs')

// app.set('/', (req, res) => {
//     res.render('index')
// })

app.use(usersRouter)

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`)
})