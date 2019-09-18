// require('mongodb')
// const mongoose = require('mongoose')
// mongoose.Promise = global.Promise
// module.exports = mongoose.connect('mongodb+srv://deploy:todoUpload@cluster0-4eb0q.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true },(err,res)=>{
//     if(err){
//         throw err
//     }else{
//         console.log('connect mongodb...')
//     }
// });
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://deploy:todoUpload@cluster0-4eb0q.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});