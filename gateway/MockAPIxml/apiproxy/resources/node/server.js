const express = require('express')
const app = express()
fs = require('fs')



app.get('/', function (req, res) {
    res.set('Content-Type', 'text/xml');
    res.send("<note> <to>Tove</to> <from>Jani</from> <heading>Reminder</heading> <body>Don't forget me this weekend!</body> </note>")
})


app.post('/coverageBucketsMultiple', function (req, res) {
    res.set('Content-Type', 'text/xml');
    fs.readFile( './coverageBucketsMultiple.xml', function(err, data) {
        res.send(data)
    });
})

app.get('/empi', function (req, res) {
    res.set('Content-Type', 'text/xml');
    fs.readFile( './empi.xml', function(err, data) {
        res.send(data)
    });
})
app.post('/aaa', function (req, res) {
    res.set('Content-Type', 'text/xml');
    fs.readFile( './AAAResponse.xml', function(err, data) {
        res.send(data)
    });
})
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
