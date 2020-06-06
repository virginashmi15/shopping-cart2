const express = require('express')
const app = express()
const mysql = require('mysql')
const Connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'ashmi',
    database : 'ashmicart'
})


Connection.query("SELECT * FROM users" ,(err, rows, fields) => {
  console.log("fetched successfully")
  res.json(rows)
})

app.get('/login',(req,res)=>{
    connection.query(`select * from user where email='${req.query.email}'`,function(error,result,field){
        if(error) return res.status(400).send();
        if(result.length === 0) return res.status(403).send();
        res.send({id : result[0].id});
    })
})

app.get('/getProducts',(req,res)=>{
    connection.query('select * from products',function(error,result,fields){
        if(error) return res.status(400).send(error);
        res.send(result);
    })
});

app.get('/getCartItems',(req,res)=>{
    if(req.query.id === undefined) return res.status(400).send('require id')
    connection.query(`select * from user where id='${req.query.id}'`,function(error,result,fields){
        if(error) return res.status(400).send(error);
        connection.query(`select * from cart where user_id='${result[0].id}'`,function(error,result,fields){
        if(error) return res.status(400).send(error);
            res.send(result);
        })    
    });
});

app.get('/gettotal',(req,res)=>{
    if(req.query.id === undefined) return res.status(400).send('require id')
    connection.query(`select * from user where id='${req.query.id}'`,function(error,result,fields){
        if(error) return res.status(400).send(error);
        connection.query(`select * from total where user_id='${result[0].id}'`,function(error,result,fields){
        if(error) return res.status(400).send(error);
            res.send(result);
        })    
    });
})

app.post('/addToCart',(req,res)=>{
    console.log(req.body);
    const user_id = req.body.user_id;
    const product_id = req.body.product_id;
    const product_name = req.body.product_name;
	console.log(product_id);
    if(!user_id && !product_id) return res.status(403).send();
    connection.query(`insert into cart (user_id,product_id,product_name) values ('${user_id}','${product_id}','${product_name}')`,function(error,result,fields){
        if(error) return res.status(403).send();
        res.send(result);
    })
});

app.post('/addTototal',(req,res)=>{
    const user_id = req.body.user_id;
    const product_id = req.body.product_id; 

    if(!user_id && !product_id) return res.status(403).send();

  
        connection.query(`delete from cart where user_id='${user_id}' AND product_id='${product_id}'`,function(error,result,fields){
console.log(result);
            res.send(result);
    })
})



app.listen(3000, () => {
    console.log("server is runing at http://localhost:3000")
})