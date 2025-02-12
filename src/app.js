const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

const produtos = [
    {
        nome: "iPhone 15",
        marca: "Apple",
        preco: 8000
    },
    {
        nome: "Moto G52",
        marca: "Motorola",
        preco: 1200
    },
    {
        nome: "Redmi Note 13",
        marca: "Xiaomi",
        preco: 1100
    },
    {
        nome: "Poco F8",
        marca: "Xiaomi",
        preco: 4000
    },
    {
        nome: "Galaxy A55",
        marca: "Samsung",
        preco: 1800
    }
    
]

app.get('/', (req, res) => {
    res.render('index', {
        produtos: produtos
    })
})

const PORT = 3000

app.listen(PORT, () => {
    console.log('Ta Rodandooooooo na porta ', PORT)
})