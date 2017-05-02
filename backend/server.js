var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');

resolvedPath = path.resolve('./frontend/html/app.html');
styles = path.resolve("./frontend/css");
js = path.resolve("./frontend/js");
bootstrap = path.resolve("./node_modules/bootstrap/");
jquery = path.resolve("./node_modules/jquery/dist");
images = path.resolve("./frontend/images");

app.use("/styles", express.static(styles));
app.use("/js", express.static(js));
app.use("/bootstrap", express.static(bootstrap));
app.use("/jquery", express.static(jquery));
app.use("/images", express.static(images));

server.listen(process.env.PORT || 3000);
console.log('Server running on port 3000');

app.get('/',function(req,res){
  res.sendFile(resolvedPath);
});
