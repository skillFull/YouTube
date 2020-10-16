const express = require('express');
const app = express();
const search = require('./Server/utils/Search');
const multer = require('multer');
const unload = multer();



app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/data', async (req, res) => {
         let data = await require('./Server/data/dataBase');
        res.header("Content-Type", 'application/json');
        await res.json(data);
})

app.post('/results', unload.none(), async (req, res) => {
    let results = await search(req.body.search_input);
    await res.json(results)
})

app.listen(5000, () => {
    console.log('Start')
})