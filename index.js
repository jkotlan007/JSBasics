const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  let url = req.url;
  console.log('Zpracování požadavku z URL: ' + url);
  url = req.url.substring(1);
  let code = "";
  url=='cz' ? code = 'Ahoj svete\n Z Ceske republiky' : code = 'Hello World\n From all over the world';
  res.end(code);  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

var http = require('http');
console.log('Nacteni konfigurace, databaze, lokalizace ap.');
http.createServer(function (req, res) {
  console.log('Zpracovani pozadavku z URL: ' + req.url);
  res.end('Hello World');
}).listen(1337);
