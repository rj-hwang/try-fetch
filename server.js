var serve = require('koa-static');
var koa = require('koa');
var app = koa();
const hostname = '127.0.0.1';
const port = 3000;

// $ GET /package.json
//app.use(serve('.'));

// or use absolute paths
app.use(serve(__dirname));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// error
app.on('error', function(err){
  log.error('server error', err);
});