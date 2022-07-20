
const express = require('express');
const app = express();

const path = require('path');

app.use(express.static('public'));

app.listen(8000, () =>
console.log("Servidor levantado")
);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});
