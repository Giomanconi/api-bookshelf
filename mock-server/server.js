// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const routerData = require('./routerData');
const router = jsonServer.router(routerData);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
const port = 3001
server.listen(port, () => {
  console.log(`JSON Server is running in the port: ${port}`);
});
