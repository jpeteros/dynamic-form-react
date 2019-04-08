const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

var SRC_DIR = path.resolve(__dirname, "src");

app.use(express.static(__dirname));

app.get('*', (req,res) => {
    res.sendFile(SRC_DIR + "/index.html",);
});

app.listen(port);
console.log('Server started');