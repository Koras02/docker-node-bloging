const http = require("http");

const hostname = "0.0.0.0"; // 모든 인터페이스 수신
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "type/plain");
  res.end("Hello, Docker With Node.js World!");
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
