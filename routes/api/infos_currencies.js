

module.exports = function(app, db) {
	app.get('/api/currency/:name', (req, res) => {
		const name = req.params.name.toUpperCase();
		if(name){
			res.status(200).send(name)
		}else{
			console.log('erreur')
		}
    	
  	});
};