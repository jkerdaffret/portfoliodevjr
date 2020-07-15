const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const fileUpload =require('express-fileupload')
const path = require('path')
const cors = require('cors') 
const util = require('util')

const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'portfolio'
})

db.connect((err) => {
    if(err) { throw err}
    console.log('Connecté à la base de donnée')
})
global.db = db

const querySql = util.promisify(db.query).bind(db)
global.querySql = querySql

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(fileUpload())
app.use(cors())

// Routes
const projetRoutes = require('./routes/projetsRoutes')
const competenceRoutes = require('./routes/competencesRoutes')

app.use('/api/projets', projetRoutes)
app.use('/api/competences', competenceRoutes)

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "../client/build", "index.html"))
    })
}

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Le serveur tourne sur le port ${port}`)
    
})