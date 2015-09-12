var express = require('express');
var app = express();

var db = require('./src/config.js');
var Question = require('./src/model.js');

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/api/questions', function(req, res){
  Question.find({}, function (err, d){
    res.json(d);
  });
});

app.post('/api/questions', function (req, res){
  var q = Question({"question_title": req.query.title, "question_text": req.query.text})
  q.save(function (d){
    res.json(d);
  })
})

// TODO: Get the search to handle within searches
app.get('/api/questions/search', function(req, res){
  Question.find().where('question_text', req.query.q).exec(function (err, d){
    res.json(d);
  });
});

app.get('/api/questions/:id', function(req, res){
  Question.findById(req.params.id, function (err, d){
    res.json(d);
  });
});

app.put('/api/questions/:id', function(req, res){
  var newQ = req.query
  //  TODO: Handle validation before updating
  Question.findByIdAndUpdate(req.params.id, newQ, {new: true}, function (err, d){
    res.json(d);
  });
});

app.delete('/api/questions/:id', function(req, res){
  Question.findByIdAndRemove(req.params.id, function (err, d){
    // TODO: Ensure that user is authorized to delete
    res.json({"result":"Successfully deleted"});
  });
});

app.listen(3000);
console.log("Server listening on port 3000.")
