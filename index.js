const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const port = 3000;

const app = express();

app.get('/', (req, res) =>{
	/*
	Codigo conexao mongo
	Montar o JSON (se nescessario)*/
	res.send('Hello Word');

});

/*Exemplo de conexão com MySql*/
app.get('/atletas', (req, res)=>{
	var conn = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'test'
	});
	conn.connect();

	/*momento da query*/
	conn.query('SELECT 1 + 1 AS solution', function(err, result){
		if(err) throw err

		console.log('A solucao is: ', rows[0].solution);	
	});
	/*Fechamento da transação*/
	conn.end();
});

/*Exemplo de conexão com MongoDB*/
app.get('/mongolog', (req, res)=>{
	MongoClient.connect('mongodb://localhost:27017/local',
		{ useNewUrlParser: true },
	function(err, client){
		if(err) throw err;
		var db = client.db('local');
		var collection = db.collection('startup_log').
		find().toArray(function(err, result){
			if(err) throw err;
			res.send(JSON.stringify(result));
		});
	});
});

app.get('/pessoa', (req, res)=>{
	var p = {nome:"Edwin Lima", cpf:"11122233344"};
	res.send(JSON.stringify(p));
	/*
	Codigo conexao mongo
	Pegar dados da req
	Inserir no mongoDB */
});

app.get('/pessoa/:cpf', (req, resp) => {
    if (req.params.cpf === "99988877766") {
        resp.send(JSON.stringify({ error: "CPF Verificado e Válido" }));
    } else {
        resp.send(JSON.stringify({ error: "Miau" }));
    }
});
/*
app.get('/atletas', (req, resp) => {
    var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'cartola'
    });
    conn.connect();
    conn.query('SELECT * FROM cartola.atletas', (err, rows, fields) => {
        if(err) throw err
        resp.send(JSON.stringify(rows));
    });
    conn.end();
});

app.get("/mongolog", (req, resp) => {
  MongoClient.connect(
    "mongodb://localhost:27017/local",
    { useNewUrlParser: true },
    function(err, client) {
      if (err) throw err;
      var db = client.db("local");
      var collection = db
        .collection("startup_log")
        .find()
        .toArray(function (err, result) {
            if (err) throw err
        
            resp.send(JSON.stringify(result));
          });
    }
  );
});
*/

app.listen(port, function(){
	console.log(`Exemplo aplicação escutando porta ${port}!`);
});