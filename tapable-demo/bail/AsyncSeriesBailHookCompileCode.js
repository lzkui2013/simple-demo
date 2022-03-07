function anonymous(arg1, arg2, arg3, _callback) {
  "use strict";
  var _context;
  var _x = this._x;
  function _next1() {
    var _fn2 = _x[2];
    _fn2(arg1, arg2, arg3, function (_err2, _result2) {
      if (_err2) {
        _callback(_err2);
      } else {
        if (_result2 !== undefined) {
          _callback(null, _result2);
        } else {
          _callback();
        }
      }
    });
  }
  function _next0() {
    var _fn1 = _x[1];
    _fn1(arg1, arg2, arg3, function (_err1, _result1) {
      if (_err1) {
        _callback(_err1);
      } else {
        if (_result1 !== undefined) {
          _callback(null, _result1);
        } else {
          _next1();
        }
      }
    });
  }
  var _fn0 = _x[0];
  var _hasResult0 = false;
  var _promise0 = _fn0(arg1, arg2, arg3);
  if (!_promise0 || !_promise0.then)
    throw new Error(
      "Tap function (tapPromise) did not return promise (returned " +
        _promise0 +
        ")"
    );
  _promise0.then(
    function (_result0) {
      _hasResult0 = true;
      if (_result0 !== undefined) {
        _callback(null, _result0);
      } else {
        _next0();
      }
    },
    function (_err0) {
      if (_hasResult0) throw _err0;
      _callback(_err0);
    }
  );
}
