import http from 'http';

const host = 'localhost';
const port = 80;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("<html><body><div>Dummy Project</div></body></html>");
};


const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});