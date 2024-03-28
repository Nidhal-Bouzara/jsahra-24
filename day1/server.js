const http = require('http');
const fs = require('fs')

http.createServer((req, res) => {
  // ! serve the html file
  if (req.url === '/') {
    const html = fs.readFileSync('./website.html', 'utf8')
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(html);
    res.end();
  } else if (req.url === '/style') {
    const css = fs.readFileSync('./stylesheet.css', 'utf8')
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.write(css);
    res.end();
  } else if (req.url === '/script') {
    const js = fs.readFileSync('./script.js', 'utf8')
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.write(js);
    res.end();
  }
}).listen(3000);