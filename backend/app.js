require('dotenv').config()
const http = require('http')
const express = require('express');
const fs = require("fs");

const log = require('./tools/logger')(module)
const fmt = require('./tools/format')

const VoiceKidRoute = require('./routes/VoiceKidRoute')
const path = require('path');

app = express();
const server = http.createServer(app);
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    try {
        const path_index = path.join(__dirname, 'build', 'index.html')
        if (fs.existsSync(path_index)) {
            res.sendFile(path_index);
        } else {
            res.status(200).json(fmt.respone_api(false, {name: "SERVER_BUSY", message: "please try again late"}, {}))
        }
    } catch (e) {
        log.error(e)
        res.status(200).json(fmt.respone_api(false, {name: "SERVER_BUSY", message: "please try again late"}, {}))
    }
});

app.use('/Voicekid/api', VoiceKidRoute)

app.use(function(req, res) {
    res.status(404).json(fmt.respone_api(false, {name: "URL_NOT_FOUND", message: req.originalUrl + ' not found'}, {}))
})

port = process.env.PORT_SERVER || 3000;
server.listen(port, () => log.info('API server started on: ' + port));