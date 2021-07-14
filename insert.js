const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'nodedb'
});

let query = 'INSERT INTO fruits (fruit,quantity) VALUES ("banana", 2)';

connection.query(query, function(err, results) {
	if ( err ) {
		console.error(err);
	}

	console.log('inserted a record');
});

connection.end();