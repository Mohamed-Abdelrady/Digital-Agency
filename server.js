var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: './dist',
  port: 8000,
  templates: {
    index: 'ourclients.html', // optional, defaults to 'index.html'
  },
});

server.start(function () {
  console.log('Server Started At Port ', server.port);
});
