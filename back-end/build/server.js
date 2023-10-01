"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _mongodb = require("mongodb");
var _path = _interopRequireDefault(require("path"));
var _connectHistoryApiFallback = _interopRequireDefault(require("connect-history-api-fallback"));
var dotenv = require('dotenv');
dotenv.config();
var app = (0, _express["default"])();
app.use(_express["default"].json());
// app.use(bodyParser.json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use('/images', _express["default"]["static"](_path["default"].join(__dirname, '../assets')));
app.get("/api/products", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var MONGODB_URI, client, db, products;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          MONGODB_URI = process.env.MONGODB_URI;
          _context.next = 3;
          return _mongodb.MongoClient.connect(MONGODB_URI);
        case 3:
          client = _context.sent;
          db = client.db("vue-db");
          console.log("Connected to MongoDB");
          _context.next = 8;
          return db.collection("products").find({}).toArray();
        case 8:
          products = _context.sent;
          res.status(200).json(products);
          client.close();
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.get("/api/users/:userId/cart", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var userId, MONGODB_URI, client, db, user, products, cartItemIds, cartItems;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          userId = req.params.userId;
          MONGODB_URI = process.env.MONGODB_URI;
          _context2.next = 4;
          return _mongodb.MongoClient.connect(MONGODB_URI);
        case 4:
          client = _context2.sent;
          db = client.db("vue-db");
          _context2.next = 8;
          return db.collection("users").findOne({
            id: userId
          });
        case 8:
          user = _context2.sent;
          if (user) {
            _context2.next = 11;
            break;
          }
          return _context2.abrupt("return", res.status(404).json("Could not find user!"));
        case 11:
          _context2.next = 13;
          return db.collection("products").find({}).toArray();
        case 13:
          products = _context2.sent;
          cartItemIds = user.cartItems;
          cartItems = cartItemIds.map(function (id) {
            return products.find(function (product) {
              return product.id === id;
            });
          });
          res.status(200).json(cartItems);
          client.close();
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
app.get("/api/products/:productId", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var productId, MONGODB_URI, client, db, product;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          productId = req.params.productId;
          MONGODB_URI = process.env.MONGODB_URI;
          _context3.next = 4;
          return _mongodb.MongoClient.connect(MONGODB_URI);
        case 4:
          client = _context3.sent;
          db = client.db("vue-db");
          _context3.next = 8;
          return db.collection("products").findOne({
            id: productId
          });
        case 8:
          product = _context3.sent;
          if (product) {
            res.status(200).json(product);
          } else {
            res.status(404).json("Could not find the product!");
          }
          client.close();
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
app.post("/api/users/:userId/cart", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var userId, productId, MONGODB_URI, client, db, user, products, cartItemIds, cartItems;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          userId = req.params.userId;
          productId = req.body.productId;
          MONGODB_URI = process.env.MONGODB_URI;
          _context4.next = 5;
          return _mongodb.MongoClient.connect(MONGODB_URI);
        case 5:
          client = _context4.sent;
          db = client.db("vue-db");
          _context4.next = 9;
          return db.collection("users").updateOne({
            id: userId
          }, {
            $addToSet: {
              cartItems: productId
            }
          });
        case 9:
          _context4.next = 11;
          return db.collection("users").findOne({
            id: userId
          });
        case 11:
          user = _context4.sent;
          _context4.next = 14;
          return db.collection("products").find({}).toArray();
        case 14:
          products = _context4.sent;
          cartItemIds = user.cartItems;
          cartItems = cartItemIds.map(function (id) {
            return products.find(function (product) {
              return product.id === id;
            });
          });
          res.status(200).json(cartItems);
          client.close();
        case 19:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
app["delete"]("/api/users/:userId/cart/:productId", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$params, userId, productId, MONGODB_URI, client, db, user, products, cartItemIds, cartItems;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$params = req.params, userId = _req$params.userId, productId = _req$params.productId;
          MONGODB_URI = process.env.MONGODB_URI;
          _context5.next = 4;
          return _mongodb.MongoClient.connect(MONGODB_URI);
        case 4:
          client = _context5.sent;
          db = client.db("vue-db");
          _context5.next = 8;
          return db.collection("users").updateOne({
            id: userId
          }, {
            $pull: {
              cartItems: productId
            }
          });
        case 8:
          _context5.next = 10;
          return db.collection("users").findOne({
            id: userId
          });
        case 10:
          user = _context5.sent;
          _context5.next = 13;
          return db.collection("products").find({}).toArray();
        case 13:
          products = _context5.sent;
          cartItemIds = user.cartItems;
          cartItems = cartItemIds.map(function (id) {
            return products.find(function (product) {
              return product.id === id;
            });
          });
          res.status(200).json(cartItems);
          client.close();
        case 18:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
app.post("/api/users/:userId/cart/empty", /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var userId, MONGODB_URI, client, db;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          userId = req.params.userId;
          MONGODB_URI = process.env.MONGODB_URI;
          _context6.next = 4;
          return _mongodb.MongoClient.connect(MONGODB_URI);
        case 4:
          client = _context6.sent;
          db = client.db("vue-db"); // Empty the cartItems array for the user
          _context6.next = 8;
          return db.collection("users").updateOne({
            id: userId
          }, {
            $set: {
              cartItems: []
            }
          });
        case 8:
          res.status(200).send({
            message: 'Cart emptied successfully!'
          });
          client.close();
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
app.post("/api/subscribe", /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var MONGODB_URI, client, db, email;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          MONGODB_URI = process.env.MONGODB_URI;
          _context7.next = 3;
          return _mongodb.MongoClient.connect(MONGODB_URI);
        case 3:
          client = _context7.sent;
          db = client.db("vue-db");
          _context7.prev = 5;
          email = req.body.email; // Store the email address in your database
          _context7.next = 9;
          return db.collection("subscribers").insertOne({
            email: email
          });
        case 9:
          res.status(200).json({
            message: "Subscription successful!"
          });
          _context7.next = 16;
          break;
        case 12:
          _context7.prev = 12;
          _context7.t0 = _context7["catch"](5);
          console.error("Error subscribing to the newsletter:", _context7.t0);
          res.status(500).json({
            error: "Internal server error"
          });
        case 16:
          _context7.prev = 16;
          client.close();
          return _context7.finish(16);
        case 19:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[5, 12, 16, 19]]);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());
app.use((0, _connectHistoryApiFallback["default"])());
app.use(_express["default"]["static"](_path["default"].resolve(__dirname, '../dist'), {
  maxAge: '1y',
  etag: false
}));
app.get('*', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '../dist/index.html'));
});
app.listen(process.env.PORT || 8000, function () {
  console.log("Server is listening on port 8000");
});