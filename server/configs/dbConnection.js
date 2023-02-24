const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const DBConnect = mongoose.connect('mongodb://localhost:27017/ExBookDB',{family:4},(err)=>{
    if(err){
       console.log('DataBase Not Connected.')
    }else{
        console.log('DataBase Connected Successfully');
    }
})
module.exports = DBConnect;