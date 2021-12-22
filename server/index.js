const express = require('express');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
const mysqldb = require('../database/mysql/index.js')

//const cowMongo = require('../database/mongo/index.js')

const bodyParser = require('body-parser');
const path = require('path');

//Controller & models

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'public')));




app.get('/cows', (req, res) => {
  console.log('Hello from the other side!');
  //--------MONGO----------

  //query from db
  // var results = cowMongo.find((err, results) => {
  //   if (err) console.log(err);
  //   else res.send(results);
  // });

  //--------MYSQL----------
  var selectString = 'SELECT * FROM cows';
  mysqldb.query(selectString, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });


});

//get req for /searchforcow
app.get('/searchforcow', (req, res) => {
  var incomingCow = req.body.name;
  console.log('incomingCow:', incomingCow);
  var cowToLookFor = `SELECT * From cows where cow_name = "${incomingCow}";`
  mysqldb.query(cowToLookFor, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });



});

app.post('/cows', (req, res) => {

  //--------MONGO----------

  // var addCow = { cow_name: req.body.name, cow_desc: req.body.desc };
  // cowMongo.create(addCow, function (err, small) {
  //   if (err) console.log(err);
  //   console.log('saved!')
  // });


  //--------MYSQL----------
  console.log(req.body);
  var name = req.body.name;
  var desc = req.body.desc;
  var insertString = `INSERT INTO cows (cow_name, cow_desc) VALUES ("${name}", "${desc}");`
  mysqldb.query(insertString, (err, results) => {
    if (err) {
      console.log(err);
      //res.status(500).send('failed to post');
    } else {
      console.log('new cow posted');
      res.send(results);
    }
  });

});






app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
  readline.question(`Choose your db: (mongo or mysql)\n>>>>>`, choice => {
    if (choice === 'mongo') {
      console.log('Your db is Mongo');
      db = require('../database/mongo');
    } else if (choice === 'mysql') {
      console.log('Your db is mysql');
      db = require('../database/mysql');
    } else {
      console.log('Stop node, restart and try again, valid options are mysql and mongo')
    }
  })

});
