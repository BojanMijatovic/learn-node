const fs = require('fs');
const http = require('http');
const url = require('url');

// blocking way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log(textIn);
// console.log(`File is in`);

//  async way function read
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       console.log(data3);

//       // async way function write
//       fs.writeFile('./txt/final.txt', `${data2}\n ${data3}`, 'utf-8', (err) => {
//         console.log(`File is writhen`);
//       });
//     });
//   });
// });

// add data to file
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

// Server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // router for different url
  const pathName = req.url;

  if (pathName === '/products') {
    res.end(' this is response for client side');
  } else if (pathName === '/name') {
    res.end(' this is name for server side');
  } else if (pathName === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
