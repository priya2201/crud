const mysql2=require('mysql2');
var connection=mysql2.createConnection({
    host:'localhost',
    database:'testing',
    user:'root',
    password:'rootpassword'
    
});

connection.connect(function(error){
    if(error)
    {
        throw error;
    }
    else{
        console.log('Mysql Database is connected Successfully');
    }
});
module.exports=connection;