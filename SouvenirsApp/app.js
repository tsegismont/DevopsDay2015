var Router = require("vertx-web-js/router");

var StaticHandler = require("vertx-web-js/static_handler");

var router = Router.router(vertx);

router.route().handler(StaticHandler.create().setFilesReadOnly(false).handle);

var server = vertx.createHttpServer();
server.requestHandler(router.accept).listen(8080);
