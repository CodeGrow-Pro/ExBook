const express = require('express');
const routers = require('./routes/apis/index')
const bodyyParser = require('body-parser');
const DBConnect = require('./configs/dbConnection');
const app = express();
app.use(express.json())
app.use(bodyyParser.urlencoded({extended:false}))
app.use('/ExBook',routers);
const port = 8000;
app.listen(port, ()=> {
    console.log(`litening port ${port}`);
    DBConnect;
})