const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
	if(err){
		return console.log('Unable to connect to MongoDb server');
	}

	console.log('Connected to Mongodb server');

	// db.collection('Todos').insertOne({
	// 	text: 'Completed',
	// 	inserted: 'false'
	// }, (err, result)=>{
	//   if(err){
	//   	return('Unable to insert Todo', err);
	//   }
	//   console.log(JSON.stringify(result.ops, undefined, 2));
	// })

	db.collection('Users').insertOne({
		name: 'Nikhil',
		age: 34,
		location: 'Delhi'
	}, (err, result)=>{
	  if(err){
	  	return('Unable to insert Todo', err);
	  }
	  console.log(JSON.stringify(result.ops, undefined, 2));
	})

	db.close();
});
