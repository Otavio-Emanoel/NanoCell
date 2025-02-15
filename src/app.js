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
        nome: "iPhone 15 128gb",
        marca: "Apple",
        preco: 8000,
        imagem: "https://a-static.mlcdn.com.br/1500x1500/iphone-15-apple-128gb-tela-de-6-1-camera-dupla-de-48mp-azul-mtp43br-a/kabum/511384/bdac051104250b55c79d9545a3ca28f3.jpeg"
    },
    {
        nome: "Moto G52",
        marca: "Motorola",
        preco: 1200,
        imagem: "https://cdn.avaliado.com.br/media/p/celular-motorola-moto-g52-branco-128gb-tela-66-4gb-ram-camera-tripla_7WMGLE6.jpg"
    },
    {
        nome: "Redmi Note 13",
        marca: "Xiaomi",
        preco: 1100,
        imagem: "https://www.armazemparaiba.com.br/ccstore/v1/images/?source=/file/v7543687176933702589/products/0100131982930006.11a1d33ad10be24be98dc84cf3f4c2293103c450.gif&height=100&width=100"
    },
    {
        nome: "Poco F6 Pro",
        marca: "Xiaomi",
        preco: 3067,
        imagem: "https://www.armazemparaiba.com.br/ccstore/v1/images/?source=/file/v7543687176933702589/products/0100131982930006.11a1d33ad10be24be98dc84cf3f4c2293103c450.gif&height=100&width=100"
    },
    {
        nome: "Galaxy A55",
        marca: "Samsung",
        preco: 1800,
        imagem: "https://martinelloeletrodomesticos.fbitsstatic.net/img/p/smartphone-samsung-galaxy-a55-5g-azul-escuro-256gb-8gb-ram-cam-tripla-selfie-32mp-79629/266221.jpg?w=482&h=482&v=no-change&qs=ignore"
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