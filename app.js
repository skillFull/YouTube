const express = require('express');
const app = express();
const search = require('./Server/utils/Search');
const multer = require('multer');
const unload = multer();


// app.use(express.static(__dirname + '/Server/data/Data.json'));
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/data',  (req, res) => {
         let data = require('./Server/data/dataBase');
         res.header("Content-Type", 'application/json');
         res.json(data);
})

app.post('/results', unload.none(), (req, res) => {
    let data = require('./Server/data/dataBase');
    let results = search(req.body.search_input, data);
    res.json(results)
})

app.listen(5000, () => {
    console.log('Start')
})