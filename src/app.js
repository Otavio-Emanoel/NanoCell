const express = require('express')
const path = require('path')
const app = express()
const produtos = require('./products/products_list')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))



app.get('/', (req, res) => {
    res.render('index', {
        produtos: produtos
    })
})

const PORT = 3000

app.listen(PORT, () => {
    console.log('Ta Rodandooooooo na porta ', PORT)
})