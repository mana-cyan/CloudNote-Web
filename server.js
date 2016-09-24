var express = require('express')
//var sqlite3 = require('sqlite3')

var app = express()
/*
var data

var userDB = new sqlite3.Database('/project/CloudNotes/data/users.db')

userDB.all("SELECT * FROM user_info", function(err, res) {
    if(!err)
        data = JSON.stringify(res)
    else
        console.log(err)
})
*/

/*
app.get('/findUser', function(req, res) {
	res.send(data)
})
*/

app.use(express.static(__dirname + '/WebContent'))

var server = app.listen(80, function() {
	var host = server.address().address
	var port = server.address().port
})
