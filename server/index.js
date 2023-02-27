const express = require('express');
const routers = require('./routes/apis/index')
const bodyyParser = require('body-parser');
const DBConnect = require('./configs/dbConnection');
const cors = require('cors');
const Book = require('./models/book');
const seedBook = require('./seedDb');
const app = express();
app.use(cors())
app.use(express.json())
app.use(bodyyParser.urlencoded({extended:false}))

app.post('/seedDb', async(req, res) => {
    console.log("dfsa")
    for(let i = 0; i < seedBook.length; i++) {
        const res = await Book.create(seedBook[i]);
        if(!res){
            return res.status(400).send({
                message:"Bad Request .",
                success:"false"
            }) 
        }
    }
    return res.status(200).send({
        message: "Database seeded",
        success:"true"
    })
})

app.use('/ExBook',routers);
const port = 8000;



app.listen(port, ()=> {
    console.log(`litening port ${port}`);
    DBConnect;
})