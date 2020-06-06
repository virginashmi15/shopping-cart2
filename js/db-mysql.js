const mysql = require ('mysql');
var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ashmi',
  database: 'shopuser'
});

mysqlConnection.connect((err) => {
  if(!err)
  Console.log('database connected succesfully.');
  else
  Console.log('database connection failed \n Error : '+ JSON.stringify(err,undefined,2));

});


