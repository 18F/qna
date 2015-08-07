var test = require('tape');
var request = require('supertest');
request = request('http://localhost:3000');

var server;

function setup() {
	test('setup', function (t) {
		server = require('../index.js');
		t.end();
	})
}

function teardown() {
	test('teardown', function (t) {
		t.end();
		process.exit();
	})
}

setup();

test('Test API loaded', function (t) {
	request.get('/').end(function (err, res) {
		t.equal(res.status, 200);
		t.equal(res.text, "hello world");
		t.end();
	})
})

teardown();