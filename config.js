require('dotenv').config()
const env = process.env.NODE_ENV; // 'prod' or 'test'

const prod = {
 app: {
   port:  process.env.PORT,
   JWT_SECRET: '3bec4bcc-9605-45df-9b2c-9a5eab0d6421'
 },
 db: {
   host: 'localhost',
   port: 27017,
   name: 'db'
 }
};

const test = {
 app: {
   port: 3000
 },
 db: {
   host: 'localhost',
   port: 27017,
   name: 'test'
 }
};

const config = {
 prod,
 test
};

module.exports = config[env];