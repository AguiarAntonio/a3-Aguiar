const express = require('express')
const formidable = require('express-formidable')
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let data = [];

app.post("/click-handler", (req, res) => {
    const recievedData = req.body;
    console.log(recievedData);
    res.send('Form data recieved')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

