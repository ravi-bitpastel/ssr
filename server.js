const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/salt/browser'));

app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: 'dist/salt/browser/' })
});

app.listen(process.env.PORT || 8000);