/**
 * Created by uttam on 27/01/19.
 */

var express = require('express');
var bodyParser = require('body-parser');
var promoRouter = express.Router();

var mongoose = require('mongoose');
var Promotion = require('../models/promotions');

promoRouter.use(bodyParser.json());
promoRouter.route('/')
	.get(function(req, res, next) {
		Promotion.find({}, function(err, promotion) {
			if (err) next(err);
			res.json(promotion);
		});
	})

	.post(function(req, res, next) {
		Promotion.create(req.body, function(err, promotion) {
			if (err) next(err);
			console.log('Promotion created!');
			var id = promotion._id;

			res.writeHead(200, {
				'Content-Type': 'text/plain'
			});
			res.end('Added the promotion with id: ' + id);
		});
	})

	.delete(function(req, res, next) {
		Promotion.remove({}, function(err, promotions) {
			if (err) next(err);

			res.writeHead(200, {
				'Content-Type': 'text/plain'
			});
			res.end('Successfully deleted all the promotions');
		});
	});

promoRouter.route('/:promoId')
	.get(function(req, res, next) {
		Promotion.findById(req.params.promoId, function(err, promotion) {
			if (err) next(err);
			res.json(promotion);
		});
	})

	.put(function(req, res, next) {
		Promotion.findByIdAndUpdate(req.params.promoId, {
			$set: req.body
		}, {
			new: true
		}, function(err, promotion) {
			if (err) next(err);
			res.json(promotion);
		});
	})

	.delete(function(req, res, next) {
		Promotion.findByIdAndRemove(req.params.promoId, function(err, promotion) {
			if (err) next(err);

			var id = promotion._id;
			res.writeHead(200, {
				'Content-Type': 'text/plain'
			});
			res.end('Successfully deleted the promotion with id: ' + id);
		});
	});

module.exports = promoRouter;
