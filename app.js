const express = require('express');
const app = express();

app.get('/', function(req,res){
res.send('Hello World');
});

app.listen(3000, function(){
    console.log('server has started running on port 3000');
});