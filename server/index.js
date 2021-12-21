const express = require('express');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
let db;

const cowMongo = require('../database/mongo/index.js')

const bodyParser = require('body-parser');
const path = require('path');

//Controller & models

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'public')));




app.get('/cows', (req, res) => {
  console.log('Hello from the other side!');
  //query from db
  var results = cowMongo.find((err, results) => {
    if (err) console.log(err);
    else res.send(results);
  });
});


app.post('/cows', (req, res) => {
  console.log(req.body);
  var addCow = { cow_name: req.body.name, cow_desc: req.body.desc };
  cowMongo.create(addCow, function (err, small) {
    if (err) console.log(err);
    console.log('saved!')
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
