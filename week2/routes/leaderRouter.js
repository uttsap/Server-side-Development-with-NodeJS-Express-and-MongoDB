/**
 * Created by uttam on 27/01/19.
 */

var express = require('express');
var bodyParser = require('body-parser');
var Leader = require('../models/leader');
var leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());


leaderRouter.route('/')
	.get(function(req, res, next) {
		Leader.find(req.query, function(err, leader) {
			if (err) next(err);
			res.json(leader);
		});
	})

	.post(function(req, res, next) {
		Leader.create(req.body, function(err, leader) {
			if (err) next(err);
			console.log('Leader created!');
			var id = leader._id;

			res.writeHead(200, {
				'Content-Type': 'text/plain'
			});
			res.end('Added the leader with id: ' + id);
		});
	})

	.delete(function(req, res, next) {
		Leader.remove({}, function(err, leaders) {
			if (err) next(err);
			res.writeHead(200, {
				'Content-Type': 'text/plain'
			});
			res.end('Successfully deleted all the leaders');
		});
	});

leaderRouter.route('/:leaderId')
	.get(function(req, res, next) {
		Leader.findById(req.params.leaderId, function(err, leader) {
			if (err) next(err);
			res.json(leader);
		});
	})

	.put(function(req, res, next) {
		Leader.findByIdAndUpdate(req.params.leaderId, {
			$set: req.body
		}, {
			new: true
		}, function(err, leader) {
			if (err) next(err);
			res.json(leader);
		});
	})

	.delete(function(req, res, next) {
		Leader.findByIdAndRemove(req.params.leaderId, function(err, leader) {
			if (err) next(err);

			var id = leader._id;
			res.writeHead(200, {
				'Content-Type': 'text/plain'
			});
			res.end('Successfully deleted the leader with id: ' + id);
		});
	});

module.exports = leaderRouter;
