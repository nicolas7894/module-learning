require('dotenv').config()
const config = require('./config');
const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const router 		 = express.Router();                     
const port 			 = config['app']['port']
const db			 = require('./dbconnection')


app.use(bodyParser.urlencoded({ extended: true }));


require('./routes')(app, db);

app.listen(port, () => {
  console.log('We are live on ' + port);
});

