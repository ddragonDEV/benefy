const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3050;

const app = express();

var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: '*'}));


app.use(bodyParser.json());


const connection = mysql.createConnection({

   host: 'localhost',
   user: 'root',
   password: '',
   database: 'benefy' 
});



app.get('/clientes', (req, res) => {
   const sql = 'SELECT * FROM clientes';

   connection.query(sql, (error, results) => {
       if (error) throw error;
       if (results.length > 0){
           res.json(results)
       }else{
           res.send('Sin resultados')
       }
   });
});


app.get('/clientes/:id', (req, res) =>{

const {id }= req.params
const sql = `SELECT * FROM clientes WHERE id = ${id}`;
connection.query(sql, (error, result) => {
   if (error) throw error;

   if (result.length > 0){
       res.json(result)
   }else{
       res.send('Sin resultados')
   }
});


});


app.post('/add', (req, res) =>{
  const sql = 'INSERT INTO clientes SET ?'

  const clientesObj = {
      name: req.body.name,
      city: req.body.city
  }

  connection.query(sql, clientesObj, error => {
   if (error) throw error;
   res.send('Cliente creado!')

  });
   });

app.put('/update/:id', (req, res) => {

   const {id } = req.params;
   const {name, city} = req.body;
   const sql = `UPDATE clientes SET name = '${name}', city= '${city}'
   WHERE id =${id}`;

   connection.query(sql, error => {
       if (error) throw error;
       res.send('Cliente actualizado!')
   
      });
});

app.delete('/delete/:id', (req, res) => {
   const {id} = req.params;
   const sql = `DELETE FROM clientes WHERE id = ${id}`;

   connection.query(sql, error => {
       if (error) throw error;
       res.send('Cliente eliminado!')
   
      });
   


});

connection.connect(error => {
   if(error) throw error   
   console.log('Database server running!');

})

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))