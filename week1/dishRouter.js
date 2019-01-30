/**
 * Created by uttam on 27/01/19.
 */

var express = require('express');
var bodyParser = require('body-parser');

var dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.get('/',(req,res,next)=>{
    res.end('This route will send all the dishes to you!');
})

dishRouter.post('/',(req,res,next)=>{
    res.end('This route will add: '+ req.body.dishName + 'with its description' + req.body.description);
})

dishRouter.delete('/',(req,res,next)=>{
    res.end("This router will delete all dishes");
})

dishRouter.get('/:dishId',(req,res,next)=>{
    res.end('This route send details of the dish: ' + req.params.dishId + ' to you!');
})

dishRouter.put('/:dishId',(req,res,next)=>{
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name +
        ' with details: ' + req.body.description);
 
})


dishRouter.delete('/:dishId',(req,res,next)=>{
    res.end('This route will delete dish: ' + req.params.dishId);
})

exports.router = dishRouter;