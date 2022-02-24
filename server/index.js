const express = require('express');
const path = require('path');

const app = express();


const port = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/Home.html'));
})

app.listen(port, () => {
    console.log(`Port running on ${port}`);
})