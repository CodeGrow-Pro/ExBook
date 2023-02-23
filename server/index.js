const express = require('express');
const User = require('./models/user')
const app = express();

app.post('/login', () => {
    console.log("Hello");
})
const port = 8000;
app.listen(port, ()=> {
    console.log(`litening port ${port}`);
})