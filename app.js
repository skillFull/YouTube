const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));


app.get('/', (req, res) => {
    res.sendFile (__dirname + '/public')
}).listen(5432, () => {
    console.log('Start')
})
