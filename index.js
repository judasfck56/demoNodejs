var express = require('express')
var app = express()
var request = require('request');
var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var nodemailer = require('nodemailer');
// const path = require('path');
var path    = require("path");
var net = require("net");

// var HOST = '127.0.0.1'; 
// var PORT = 6969;
// var querystring = require('querystring');

// var app = express();
// app.get('/', function (req, res) {
//   var data = querystring.stringify({
//     username: "myname",
//     password: " pass"
//   });

//   var options = {
//     host: 'localhost',
//     port: 3000,
//     path: '/testport',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Content-Length': Buffer.byteLength(data)
//     }
//   };

//   var httpreq = http.request(options, function (response) {
//     response.setEncoding('utf8');
//     response.on('data', function (chunk) {
//       console.log("body: " + chunk);
//     });
//     response.on('end', function() {
//       res.send('ok');
//     })
//   });
//   httpreq.write(data);
//   httpreq.end();
// });

// app.listen(8090);

// var redis = require('redis');
// var redis_server = require('redis_server');
// var client = redis.createClient({host : 'localhost', port : 6379});
// var client2 = redis.createClient({host : 'localhost', port : 6379});
// var subcriber = redis.createClient({host: 'localhost', port: 6379});
// var subcriber2 = redis.createClient({host : 'localhost', port : 6379});
// var server = redis_server.
// var server = redis.

// subcriber.on("message", function(chanel, message){
// 	console.log("Message: " + message + " on chanel " + chanel + " arrived!");
// });
// subcriber2.on("message", function(chanel, message){
// 	console.log("message " + message + " on chanel " + chanel + " arrived!");
// })
// subcriber.subscribe("temp-reading:living-room");
// subcriber2.subscribe("test2");

// client.publish("test", "hahahaha");
// client.publish("test", "Hello World");
// client2.publish("test2", "Welcome to VN");
// client.publish("test2", "Welcome to Viet nam");
// client.quit();
// client.on('ready', function(){
// 	console.log("Ready to use redis");

// })
// client.on('error', function(err){
// 	console.log("Error in Redis" + console.error()
	
// 	);
// });
// client.set("string key", "string val", redis.print);
// client.set("key", "value", redis.print);
// client.hset("user1", "hashtest 1", "some value", redis.print);
// client.hset(["user1", "hashtest 2", "some other value"], redis.print);
// client.hkeys("user1", function(err, replies){
// 	console.log(replies.length + "replies");
// 	replies.forEach(function(reply, i){
// 		console.log("    " + i + " : " + reply);
// 	});
// 	// client.quit();
// 	// client.
// });
// client.hkeys("a", function(err, replies2){
// 	console.log(replies2.length() + " replies");
// 	replies2.forEach(function(reply,i){
// 		console.log("   "  + i + " : " + reply);
// 	});
// 	client.quit();
// })





// const RedisServer = require('redis-server');
// const server = new RedisServer(6379);
// var redis = require('redis');
// server.open((err) => {
//   if (err === null) {
// 	// redis.createClient({host: 'localhost', port : 6379});
	
//   }
  
// });
// server.on('data', function(data){
// 	console.log('Error in Redis' + console.error());
// })
// console.log('Server is running on port 6379')

// const https = require('https')

// const data = JSON.stringify({
//   todo: 'Buy the milk'
// })

// const options = {
//   hostname: 'flaviocopes.com',
//   port: 6969,
//   path: '/example',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': data.length
//   }
// }

// const req = https.request(options, (res) => {
//   console.log(`statusCode: ${res.statusCode}`)

//   res.on('data', (d) => {
//     process.stdout.write(d)
//   })
//   console.log("Deploy on port 6969");
// })

// req.on('error', (error) => {
//   console.error(error)
// })

// req.write(data)
// req.end()


// net.createServer(function(sock){


// 	console.log("CONECTED: " + sock.remoteAddress + " " + sock.remotePort);
// 	sock.on('data', function(data){
// 		sock.write(data);
// 		console.log("Message Receiving: " + data);
// 		// console.log(sock);
// 	});
// 	sock.on('close', function(data){
// 		console.log("CLOSED: " + sock.remoteAddress + " " + sock.remotePort);
// 	});
	
// }).listen(PORT, HOST);
// var server2=net.createConnection(PORT,HOST,function(nets){
//     nets.on('connect',function(){
//         nets.write('message',{'a':1,'foo':'bar'});
//         });
// });
// net.createServer(function(sock){
// 	console.log("CONECTED: " + sock.remoteAddress + " " + sock.remotePort);
// 	sock.on('connect', function(){
// 		// console.log("Message send to service");
// 		// sock.write('message', {'a':1, 'foo': 'bar'});
// 		sock.write("Trong Quyet");
		
// 	});
// 	sock.on('data', function(data){
// 		sock.write(data);
// 	})
// }).listen(HOST,PORT);

// console.log("Server listening on " + PORT + " " + HOST);






//   app.get('/',function(req,res){
// 	res.sendfile('./views/sendMail.html');
// 	});
	// var transporter = null;
	// app.get("/getInfo", function(req, res){
	// 	transporter = nodemailer.createTransport({
	// 		service: 'gmail',
	// 		auth: {
	// 		  user: req.query.from,
	// 		  pass: req.query.password
	// 		}
	// 	  });
	// 	  console.log("We have been login Email to " + req.query.from);
	// })

// app.get('/send',function(req,res){
// 	var transporter = nodemailer.createTransport({
// 		service: 'gmail',
// 		auth: {
// 		  user: req.query.from,
// 		  pass: req.query.password
// 		}
// 	  });
// 	  console.log("Status Login: " + transporter);
// 	var mailOptions={
// 		to : req.query.to,
// 		subject : req.query.subject,
// 		text : req.query.text
// 	}
// 	console.log(mailOptions);
	// console.log("Email send: " + req.query.from);
	// console.log("Password: " + req.query.password);
	// console.log("Email to: " + mailOptions.to);
	// console.log("Subject: " + req.query.subject);
	// console.log("text: " + req.query.text);
// 	transporter.sendMail(mailOptions, function(error, response){
// 	if(error){
// 				console.log(error);
// 			res.end("error");
// 		 }else{
// 				console.log("Message sent: " + response.message);
// 			res.end("sent");
// 			 }
// 	});
// 	});
// app.listen(3000, function(){
// 	console.log("Please opened port 3000")
// })


//   var mailOptions2 = 

// app.post("/", function(req,res){
// 	res.send("hello world");
// });

// app.listen(6969, function(){
// 	console.log("Port 6969 is open!")
// })

// app.post("/fileupload", function(req, res){
// 	var form = new formidable.IncomingForm();
// 	form.parse(req, function(err, fields, files){
// 		var oldpath = files.filetoupload.path;
// 		console.log(oldpath);
// 		var newpath = 'C://Software//TempFile//' + files.filetoupload.name;
// 		// fs.mkdir("homeless");
// 		// console.log
// 		// fs.
// 		fs.rename(oldpath, newpath, function(err){
// 			if(err) throw err;
// 			res.write("Files uploaded and moved");
// 			res.end();
// 		})
// 	})
// })
// app.listen(3001, function(){
// 	console.log("Port 3001 is opened!");
// })

// app.post("/sendMail", function(req, res){

// })
  
//   transporter.sendMail(mailOptions, function(error, info){
// 	if (error) {
// 	  console.log(error);
// 	} else {
// 	  console.log('Email sent: ' + info.response);
// 	}
//   });





var app = express();
// app.use(express.staticProvider(__dirname + '/views'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/views/giaodien.html'));
});

app.get('/giaodien.html', function(req, res) {
    res.sendFile(path.join(__dirname+'/views/giaodien.html'));
});


app.get('/elements.html',function(req,res){
	res.sendFile(path.join(__dirname+'/views/elements.html'));
  });
  
  app.get('/generic.html',function(req,res){
	res.sendFile(path.join(__dirname+'/views/generic.html'));
  });
app.set("view engine", "ejs")
app.set("views", "./views")
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use('/images', express.static(path.join(__dirname, 'images')))
console.log(__dirname)
app.get('/', function (req, res){
	res.sendFile(__dirname + '/views/giaodien.html');
// 	// res.render('submitFileCSS')
// 	// console.log(__dirname + '/views/index.html')
});
app.listen(3000, function(){
	console.log("Port 3000 is opened!");
})

// app.post('/', function (req, res){
//     var form = new formidable.IncomingForm();

//     form.parse(req);

//     form.on('fileBegin', function (name, file){
//         file.path = __dirname + '/data/' + file.name;
//     });

//     form.on('file', function (name, file){
//         console.log('Uploaded ' + file.name);
//     });

//     return res.json(200, {
// 							result: 'Upload Success'
//     });
// });
// app.listen(3000, () => console.log('Server app listening on port 3000!'))

// http.createServer(function(req,res)
// {
//     var x = request('https://www.youtube.com/watch?v=T9pmUcjDemQ')
//     req.pipe(x)
//     x.pipe(res)
// }).listen(1337, '127.0.0.1');

// var HelloController = require('./HelloController')
// app.use(express.static('resources'));
// app.use(express.static('views'));
// app.get('/submitFile', HelloController.getHelloView)
// app.listen(3000, function(){
// 	console.log("example app listen on port 3000")
// })

// app.set("view engine", "ejs")
// app.set("views", "./views")

// app.get("/", function(req, res){
// 	pool.connect(function(err, client, done){
// 		if(err){
// 			console.log("Have one error", error);
// 		}
// 		client.query("select * from my_table", function(err, result){
// 			res.render("trangchu", {data:result.rows})
// 		});
// 	})

// })

// http.get('/submitFile', HelloController.getHelloView)
// http.listen(8080, function(){
// 	console.log("Listen port on 8080")
// })

// http.get('/submitFile', function(res){
// 	res.render('submitFile.ejs');
// })
// http.listen(8080, function(){
// 	console.log("Open port 8080")
// })
// app.get('/submitFile', function(res, req){
// 	res.render('submitFile.ejs')
// })
// app.post('/submitFile', function(req, res){
// 	var form = new formidable.IncomingForm();
// 	form.parse(req, function(err, fields, files){
// 		var oldpath = files.filetoupload.path;
// 		var newpath = 'C://Software//TempFile//' + files.filetoupload.name;
// 		fs.rename(oldpath, newpath, function(err){
// 			if(err) throw err;
// 			res.write("File uploaded and moved!");
// 			res.end();
// 		})
// 	});

// })
// app.listen(8080, function()
// {
// 	console.log("app listen on port 8080")
// })
// app.createServer(function(req, res){

// }).listen(8080);

// http.createServer(function (req, res) {
// 	if (req.url == '/fileupload') {
// 	//   var form = new formidable.IncomingForm();
// 	  console.log("Kiem tra file upload")
// 	//   form.parse(req, function (err, fields, files) {
// 		// var oldpath = files.filetoupload.path;
// 		// console.log("Duong dan cua file upload: " + oldpath);
// 		// console.log("Ten file upload: " + files.filetoupload.name);
// 		// var newpath = 'C://Software//TempFile//' + files.filetoupload.name;
// 		// console.log(newpath);
// 		// fs.rename(oldpath, newpath, function (err) {
// 		//   if (err) throw err;
// 		//   res.write('File uploaded and moved!');
// 		//   res.end();
// 		// });
// //    }
//    ;
// 	} else {
// 	//   res.writeHead(200, {'Content-Type': 'text/html'});
// 	//   res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
// 	//   res.write('<input type="file" name="filetoupload"><br>');
// 	//   res.write('<input type="submit">');
// 	//   res.write('</form>');
// 	//   res.render('/views/submitFile');
// 	//   res.render("/submitFile", HelloController.getHelloView)
// 	// res.get
// 	//   res.get("/submitFile" , HelloController.getHelloView)
// 	//   res.render('submitFile')
// 	// console.log("we can write code here!")
// 	return res.render('submitFile.ejs', {});
// 	//   return res.end();
// 	}
//   }).listen(8080);

// app.use()

// app.get("/", function(req, res){
// 	  res.writeHead(200, {'Content-Type': 'text/html'});
// 	  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
// 	  res.write('<input type="file" name="filetoupload"><br>');
// 	  res.write('<input type="submit">');
// 	  res.write('</form>');
// 	  return res.end();
// })
// app.post("/fileupload", function(req, res){
// 	var form = new formidable.IncomingForm();
// 	form.parse(req, function(err, fields, files){
// 		var oldpath = files.filetoupload.path;
// 		console.log(oldpath);
// 		var newpath = 'C://Software//TempFile//' + files.filetoupload.name;
// 		// fs.mkdir("homeless");
// 		// console.log
// 		// fs.
// 		fs.rename(oldpath, newpath, function(err){
// 			if(err) throw err;
// 			res.write("Files uploaded and moved");
// 			res.end();
// 		})
// 	})
// })
// app.listen(3001, function(){
// 	console.log("Port 3001 is opened!");
// })

// http.createServer(function (req, res) {
// 	if (req.url == '/fileupload') {
// 	  var form = new formidable.IncomingForm();
// 	  form.parse(req, function (err, fields, files) {
// 		var oldpath = files.filetoupload.path;
// 		// var oldpath = "C://Software//TempFile//";
// 		console.log(files.name);
// 		console.log(req.name);
// 		// console.log(req)
// 		var newpath = 'C://Software//TempFile//' + files.filetoupload.name;
// 		// var newpath = "C://Software//TempFile//Data//";
// 		fs.rename(oldpath, newpath, function (err) {
// 		  if (err) throw err;
// 		  res.write('File uploaded and moved!');
// 		  res.end();
// 		});
//    });
// 	} else {
// 	  res.writeHead(200, {'Content-Type': 'text/html'});
// 	  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
// 	  res.write('<input type="file" name="filetoupload"><br>');
// 	  res.write('<input type="submit">');
// 	  res.write('</form>');
// 	  return res.end();
// 	}
//   }).listen(8181);




// app.use(express.static("public"))
// app.set("view engine", "ejs")
// app.set("views", "./views")

// var pg = require("pg")
// var config = {
// 	user : "postgres",
// 	password : "123456",
// 	database: "mydb",
// 	port: "5432",
// 	host: "localhost",
// 	max: "10",
// 	idleTimeoutMilis: "3000"
// }

// var pool = new pg.Pool(config);
// app.get("/", function(req, res){
// 	pool.connect(function(err, client, done){
// 		if(err){
// 			console.log("Have one error", error);
// 		}
// 		client.query("select * from my_table", function(err, result){
// 			res.render("trangchu", {data:result.rows})
// 		});
// 	})

// })