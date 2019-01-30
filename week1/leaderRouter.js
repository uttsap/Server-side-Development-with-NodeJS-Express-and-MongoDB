/**
 * Created by uttam on 27/01/19.
 */

var express = require('express');
var bodyParser = require('body-parser');

var leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.get('/',(req,res,next)=>{
    res.end('This route will send all the leaders to you!');
})

leaderRouter.post('/',(req,res,next)=>{
    res.end('This route will add: '+ req.body.leaderName + 'with its description' + req.body.description);
})

leaderRouter.put('/',(req,res,next)=>{
    res.status(403).json({message:'this route doesnot support put'});
})

leaderRouter.delete('/',(req,res,next)=>{
    res.end("This router will delete all leaders");
})

leaderRouter.get('/:leaderId',(req,res,next)=>{
    res.end('This route send details of the leader: ' + req.params.leaderId + ' to you!');
})

leaderRouter.post('/:leaderId',(req,res,next)=>{
    res.status(403).json({message:'this route doesnot support put'});
})

leaderRouter.put('/:leaderId',(req,res,next)=>{
    res.write('Updating the leader: ' + req.params.leaderId + '\n');
    res.end('Will update the leader: ' + req.body.name +
        ' with details: ' + req.body.description);
 
})


leaderRouter.delete('/:leaderId',(req,res,next)=>{
    res.end('This route will delete leader: ' + req.params.leaderId);
})

exports.router = leaderRouter;