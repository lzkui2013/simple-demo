function anonymous(arg1, arg2, arg3, _callback) {
  "use strict";
  var _context;
  var _x = this._x;
  function _next0() {
    var _fn1 = _x[1];
    _fn1(arg1, arg2, arg3, function (_err1, _result1) {
      if (_err1) {
        _callback(_err1);
      } else {
        if (_result1 !== undefined) {
          arg1 = _result1;
        }
        _callback(null, arg1);
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
        arg1 = _result0;
      }
      _next0();
    },
    function (_err0) {
      if (_hasResult0) throw _err0;
      _callback(_err0);
    }
  );
}
