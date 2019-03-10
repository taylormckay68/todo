require('dotenv').config();
const express = require('express')
    , path = require('path')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , port = process.env.PORT || 8080
    , app = express();

app.use(bodyParser.json());
app.use(express.static('build'));

massive(process.env.CONNECTION_STRING).then(db => {
    console.log('connected')
    app.set('db', db);
}).catch(err => {
    console.log('DB connect error >> ', err)
})

let dataArr = [];
app.get('/getDataArr', (req, res) => {
    app.get('db').getTasks().then(response => {
        res.status(200).send(response);
    })
})

app.post('/addTask', (req, res) => {
    let {category, description, info, complete} = req.body;
    app.get('db').addTask([category, description, info, complete]).then(() => {
        app.get('db').getTasks().then(response => res.status(200).send(response))
    }) 
})

app.listen(port, () => console.log(`Listening on port ${port}`));