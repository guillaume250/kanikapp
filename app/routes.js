var path = require('path');
var app = require('../app');
var _ = require('underscore');
var aclRoutes = require('../resources/dictionary/app/routes.json');

var controllers = {};
controllers.angular = function (req, res) {res.sendFile(path.join(__dirname, '../public', 'index.html')); console.log("Main Route Called")};
controllers.bookings = require('./controllers/bookings');
controllers.customers = require('./controllers/customers');
controllers.users = require('./controllers/users');

var routes = [
     // Initial route
    {
        path: _.findWhere(aclRoutes, {id: 0}).uri,
        httpMethod: _.findWhere(aclRoutes, {id: 0}).method,
        middleware: [controllers.angular]
    },

    // Booking routes
    {
        path: _.findWhere(aclRoutes, {id: 1}).uri,
        httpMethod: _.findWhere(aclRoutes, {id: 1}).method,
        middleware: [controllers.bookings.api.list]
    },
    {
        path: _.findWhere(aclRoutes, {id: 2}).uri,
        httpMethod: _.findWhere(aclRoutes, {id: 2}).method,
        middleware: [controllers.bookings.api.new]
    },
    {
        path: _.findWhere(aclRoutes, {id: 3}).uri,
        httpMethod: _.findWhere(aclRoutes, {id: 3}).method,
        middleware: [controllers.bookings.api.update]
    },
    {
        path: _.findWhere(aclRoutes, {id: 4}).uri,
        httpMethod: _.findWhere(aclRoutes, {id: 4}).method,
        middleware: [controllers.bookings.api.delete]
    },

      // Users routes
      {
          path: _.findWhere(aclRoutes, {id: 5}).uri,
          httpMethod: _.findWhere(aclRoutes, {id: 5}).method,
          middleware: [controllers.bookings.api.list]
      },
      {
          path: _.findWhere(aclRoutes, {id: 6}).uri,
          httpMethod: _.findWhere(aclRoutes, {id: 6}).method,
          middleware: [controllers.bookings.api.new]
      }

]

module.exports = function (app) {
    _.each(routes, function (route) {
        var args = _.flatten([route.path, route.middleware]);
        switch (route.httpMethod.toUpperCase()) {
            case 'GET':
                app.get.apply(app, args);
                break;
            case 'POST':
                app.post.apply(app, args);
                break;
            case 'PUT':
                app.put.apply(app, args);
                break;
            case 'DELETE':
                app.delete.apply(app, args);
                break;
            default:
                throw new Error('Invalid HTTP method specified for route ' + route.path);
                break;
        }
    });
};
