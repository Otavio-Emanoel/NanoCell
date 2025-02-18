const express = require('express')
const path = require('path')
const app = express()
let carrinho = [];
const produtos = require('./products/products_list')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.post("/adicionar", (req, res) => {
    carrinho.push(req.body);
    res.sendStatus(200);
});

app.post("/remover/:index", (req, res) => {
    carrinho.splice(req.params.index, 1);
    res.sendStatus(200);
});


app.get('/', (req, res) => {
    res.render('index', {
        produtos: produtos,
        carrinho
    })
})

const PORT = 3000

app.listen(PORT, () => {
    console.log('Ta Rodandooooooo na porta ', PORT)
})