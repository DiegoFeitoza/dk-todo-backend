const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb+srv://deploy:todoUpload@cluster0-4eb0q.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true },(err,res)=>{
    if(err){
        throw err
    }else{
        console.log('connect mongodb...')
    }
});