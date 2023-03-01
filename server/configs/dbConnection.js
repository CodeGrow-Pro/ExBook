const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const DBConnect = mongoose.connect('mongodb+srv://exbook:xAIWTZzXqZkWcsOr@cluster0.xa2c7qc.mongodb.net/?retryWrites=true&w=majority',{family:4},(err)=>{
    if(err){
       console.log('DataBase Not Connected.')
    }else{
        console.log('DataBase Connected Successfully');
    }
})
module.exports = DBConnect;