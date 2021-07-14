const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'nodedb'
});

let query = 'SELECT id,fruit,quantity FROM fruits';

connection.query(query, function(err, results) {
	if ( err ) {
		console.error(err);
	}

	for ( let i = 0; i < results.length; i++ ) {
		console.log(results[i].fruit);
	}
});

connection.end();