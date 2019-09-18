// const port = 5005 // Add porta

//Add body parser => Passar todas as instancias de backend para o servidor
const bodyParser = require('body-parser')
//Add Express para o servidor
const express = require('express')
const server = express()
const allowCors = require('./cors')
let collection
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://deploy:todoUpload@cluster0-4eb0q.mongodb.net/crud?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  collection = client.db("crud").collection("usuarios");
  // perform actions on the collection object
//   client.close();
});

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.get('/', function(req, res){
    res.send('Bem-vindo a API CRUD')
})

server.get('/lista', (req,res) => {
    collection.find({}).toArray(function(err, docs) {
        res.send(docs);
    });
})

//Criando Rotas
server.route('/edit/:id')
    .get((req,res) => {
        //Pesquisar específico
        collection.find({"_id" : ObjectId(req.params.id)}).toArray(function(err, docs) {
            res.send(docs)
        });
    })
    .put((req,res) => {
        //Alterar
        collection.updateOne({ _id : ObjectId(req.params.id) },
        { $set: { name : req.body.name,
                    surname: req.body.surname        
        } }, function(err, result) {
            res.send(`Usuário ${req.body.name} editado com sucesso!`)
        });
    })
    .delete((req,res) => {
        //Deletar
        collection.deleteOne({"_id" : ObjectId(req.params.id)},function(err, resp){
            res.send(`Usuário ${req.params.id} apagado com sucesso!`)
        })
    })

server.post('/show',function(req, res){
    collection.insertOne(req.body, (err, result) => {
        //Gravar
        if(err) return console.log(err);
        res.send(`Usuário ${req.body.name} salvo com sucesso!`)
    })
})

let port = (process.env.PORT) ?process.env.PORT : 5005

server.listen(port, function(){
    console.log(`Rodando BACKEND na porta ${port}`)
})

module.exports = server