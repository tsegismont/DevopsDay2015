var Router = require('vertx-web-js/router');

var StaticHandler = require('vertx-web-js/static_handler');

var router = Router.router(vertx);

var likes = 0;

router.get('/rest/likes').produces('application/json').handler(function (routingContext) {
  var response = routingContext.response();
  response.putHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({'value': likes}));
});

router.post('/rest/likes/increment').produces('application/json').handler(function (routingContext) {
  var response = routingContext.response();
  response.putHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({'value': ++likes}));
});

vertx.setPeriodic(5000, function () {
  vertx.eventBus().publish('metrics', {'source': 'app.souvenirs.likes', 'value': likes, 'type': 'counter'});
});

router.route().handler(StaticHandler.create().setFilesReadOnly(false).handle);

var server = vertx.createHttpServer();
server.requestHandler(router.accept).listen(8181);

