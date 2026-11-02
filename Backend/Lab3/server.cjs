const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("My first server");
    res.write("My second server\n");
    res.write("My third server\n");
    
    res.end("This is my page");
});
server.listen(4000, () => {
    console.log('Server is running at http://localhost:4000');
});