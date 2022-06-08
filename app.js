const express = require('express')
const { json } = require('express/lib/response')
const app = express()


app.use(express.json())

app.use(express.urlencoded({
    extended: true
}
))

//get
app.get('/', function (req, res){
  res.send('Selamat datang di API')
})

//query
  app.post('/datadiri-query', function (req, res) {
    res.json({
        npm : req.query.npm,
        nama: req.query.nama,
        alamat: req.query.alamat
    })
  })

//post
app.post('/datadiri/:npm/:hp-query', function (req, res){
  res.json({
    npm     : req.params.npm,
    nama    : req.body.nama,
    gender  : req.body.gender,
    agama   : req.body.agama,
    hobi    : req.query.hobi,
    email   : req.body.email,
    hp      : req.params.hp,
    nik     : req.query.nik,
    alamat  : req.body.alamat,
    negara  : req.body.negara
  })
})

app.listen(3000)