var    mysql = require('mysql');
const  port = process.env.PORT || 4205;




var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'daneel_infos_currencies',
        insecureAuth: true
});


connection.connect(function(err) {
  if (err) console.log('database erreur');
  console.log("Connected!");
});

module.exports = connection;