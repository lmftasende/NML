
const express = require('express');
const app = express();

const path = require('path');

const port = process.env.PORT || 8000;

app.use(express.static('public'));

app.listen(port, () =>
console.log("Servidor levantado")
);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});
