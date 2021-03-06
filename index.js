require('dotenv').config();
const express = require('express')
    , path = require('path')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , port = process.env.PORT || 8080
    , app = express();

app.use(bodyParser.json());
app.use(express.static('build'));

massive(process.env.BACKUP_CONNECTION_STRING).then(db => {
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
    let {category, priority, task, info, complete} = req.body;
    app.get('db').addTask([category, priority, task, info, complete]).then(() => {
        app.get('db').getTasks().then(response => res.status(200).send(response))
    }) 
})

app.post('/toggleTask', (req, res) => {
    let {id, checked} = req.body;
    app.get('db').updateStatus([id, checked]).then(() => {
        app.get('db').getTasks().then(response => res.status(200).send(response))        
    })
})
app.post('/updateTask', (req, res) => {
    let {id, category, priority, task, info} = req.body;
    app.get('db').updateTask([id, category, priority, task, info]).then(() => {
        app.get('db').getTasks().then(response => res.status(200).send(response))
    })
})
app.post('/deleteTask', (req, res) => {
    app.get('db').deleteTask([req.body.id]).then(() => {
        app.get('db').getTasks().then(response => res.status(200).send(response))
    })
})
app.post('/filterData', (req, res) => {
    if(req.body.category === 'All'){
        app.get('db').getTasks().then(response => res.status(200).send(response))
    }else {
        app.get('db').filterTasks(['category', req.body.category]).then(response => res.status(200).send(response))
    }
})
app.post('/addCat', (req, res) => {
    if(req.body.category.length) {
        app.get('db').addCat([req.body.category]).then(() => {
            app.get('db').getCats().then(response => {
                res.status(200).send(response);
            })
        })
    } else {
        app.get('db').getCats().then(response => {
            res.status(200).send(response);
        })
    }
})
app.get('/getCats', (req, res) => {
    app.get('db').getCats().then(response => res.status(200).send(response))
})

app.listen(port, () => console.log(`Listening on port ${port}`));