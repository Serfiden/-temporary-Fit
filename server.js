var mysql = require('mysql');
var bodyParser = require('body-parser');
var express = require('express');

var conn = mysql.createConnection({
	'host': 'localhost',
	'user': 'root',
	'password': '',
	'database': 'wholefit'
});

conn.connect(function(err){ 
	if(err) throw err;
	console.log('Connected to database!');
});

var app = express();
var server = app.listen(process.env.PORT || 8000, function(){
	console.log('Connected to server on port ' + server.address().port);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Load all files

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
})

// Scripts

app.get('/scripts/services/app.js', function(req, res){
	res.sendFile(__dirname + '/scripts/services/app.js')
})

app.get('/scripts/controllers/homeCtrl.js', function(req, res){
	res.sendFile(__dirname + '/scripts/controllers/homeCtrl.js');
})

app.get('/scripts/controllers/registerCtrl.js', function(req, res){
	res.sendFile(__dirname + '/scripts/controllers/registerCtrl.js');
})

app.get('/scripts/controllers/headerCtrl.js', function(req, res){
	res.sendFile(__dirname + '/scripts/controllers/headerCtrl.js');
})

app.get('/scripts/controllers/footerCtrl.js', function(req, res){
	res.sendFile(__dirname + '/scripts/controllers/footerCtrl.js');
})

// Templates

app.get('/templates/header.html', function(req, res){
	res.sendFile(__dirname + '/templates/header.html');
})

app.get('/templates/home.html', function(req, res){
	res.sendFile(__dirname + '/templates/home.html');
})

app.get('/templates/footer.html', function(req, res){
	res.sendFile(__dirname + '/templates/footer.html');
})

app.get('/templates/register.html', function(req, res){
	res.sendFile(__dirname + '/templates/register.html');
})

// Resources

app.get('/resources/mainBanner.jpg', function(req, res){
	res.sendFile(__dirname + '/resources/mainBanner.jpg');
})

// Stylesheets

app.get('/styles/firstPageStyle.css', function(req, res){
	res.sendFile(__dirname + '/styles/firstPageStyle.css');
})

app.get('/styles/headerStyle.css', function(req, res){
	res.sendFile(__dirname + '/styles/headerStyle.css');
})

app.get('/styles/mainStyle.css', function(req, res){
	res.sendFile(__dirname + '/styles/mainStyle.css');
})

app.get('/styles/registerStyle.css', function(req, res){
	res.sendFile(__dirname + '/styles/registerStyle.css');
})

// New user

app.post('/submitUser', function(req, res){
	var userData = "('" + req.body.name + "', '" + req.body.email + "', '" + req.body.password + "')";
	var insertDataQuery = "INSERT INTO users (name, email, password) VALUES " + userData;
	
	conn.query(insertDataQuery, function(err, results) {
		if(err) throw err;
		console.log(results);
	})
	res.end();
})