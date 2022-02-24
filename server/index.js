const express = require('express');
const path = require('path');

const app = express();
app.use(express.json())

const port = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/Home.html'));
})

app.use(express.static(path.join(__dirname, '../public')))
app.get('/api/test', () => {
    testfunction();
});

app.listen(port, () => {
    console.log(`Port running on ${port}`);
})

// include and initialize the rollbar library with your access token
const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: '9a235518dac540f789366037c5ff9d5d',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("DevOps Lab");