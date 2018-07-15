const http = require('http');
const port = process.env.port || 3000;

const server = http.createServer((req: any, res: any) => res.end('hello world'));
server.listen(port, (err: Error) => err ? console.log(`Oups, ${err}`) : console.log(`server listening on ${port}`));
