const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'nodedb'
});

let query = 'SELECT id,fruit,quantity FROM fruits where id = 5';

connection.query(query, function(err, results) {
	if ( err ) {
		console.error(err);
	}

	console.log(results);

	connection.query('UPDATE fruits SET fruit = "dragon fruit", quantity = 6 WHERE id = 5', function(err, results) {
		if ( err ) { 
			console.error('update error: ' + err);
		}

		console.log('updated the fruit to dragon fruit');

		connection.end();
	});

});

