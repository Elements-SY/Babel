"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var flag = true;
var promise = new Promise(function (reslove, reject) {
  if (flag) {
    reslove('成功');
  } else {
    reject('失败');
  }
});
promise.then(function (res) {
  console.log('reslove返回结果：' + res);
}, function (err) {
  console.log('reject返回结果: ' + err);
});

function doubleAfter2seconds(num) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(2 * num);
    }, 1000);
  });
}

;

function testResult() {
  return _testResult.apply(this, arguments);
}

function _testResult() {
  _testResult = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return doubleAfter2seconds(30);

          case 2:
            result = _context.sent;
            console.log(result);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _testResult.apply(this, arguments);
}

;
testResult();
