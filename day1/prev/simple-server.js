const http = require('http');
const fs = require('fs');
let data = {
  yes: 0,
  enthusiasticYes: 0,
}
http.createServer((req, res) => {
  //! First we send an html file successfully
  if (req.url === '/') {
    const html = fs.readFileSync('./simple-website.html', 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(html);
    res.end();
    //! then we send a css file successfully
  } else if (req.url === '/style') {
    const css = fs.readFileSync('./simple-stylesheet.css', 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.write(css);
    res.end();
    //! then we send a js file successfully
  } else if (req.url === '/script') {
    const js = fs.readFileSync('./simple-script.js', 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.write(js);
    res.end();
  } else if (req.url === '/answer' && req.method === 'PUT') {
    req.on('data', (chunk) => {
      const answer = JSON.parse(chunk.toString());
      if (answer === 'yes') {
        data.yes++;
      } else if (answer === 'enthusiastic-yes') {
        data.enthusiasticYes++;
      }
    }).on('close', () => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('Hello World!');
      res.end();
    })
  }
  //TODO We now have to send the data to the client every time the client requests the page
  // TODO We have two ways to do this: 1. We make the client request the data every time they want to see it
  // TODO 2. We send the data to the client inside the page every time they request the page
  // ? At this point we have entered dynamic websites territory
}).listen(3000);