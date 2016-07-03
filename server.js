var express = require("express");
var app = express();

app.use(express.static(__dirname+"/public"));
app.get('/contact',function(req,res){
    var contacts = [
        {
            name:"atanu",
            email:"atanuknath@gmail.com",
            number:"98798792"
        },
        {
            name:"santanu",
            email:"ssatanuknath@gmail.com",
            number:"3298798792"
        }
    ];
    res.json(contacts);
});

app.listen(8080);

console.log("server runnnig");