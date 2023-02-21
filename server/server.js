const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'dist/main_front')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/main_front/index.html'));
});

app.listen(port, () => {
    console.log('Server is up on port ' + port + ' !');
});