

const infosCurrencies = require('./api/infos_currencies');
module.exports = function(app, db) {
	app.use('/api', require('./auth.js'));
  	infosCurrencies(app, db);
};