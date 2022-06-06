
var _primitives = [
  "string",
  "bigint",
  "symbol",
  "number",
  "boolean",
  "function",
  "undefined",

];

var _isPrimitive = function (type) {
  var dataType = typeof type;
  return _primitives.includes(dataType);
};
// This is the exception because of the typeof null is object. 
var _isNullException = function (type) {
  return type === null;
}

var _isValidObject = function () {
  if (typeof this !== "object") throw new Error("Not a valid object");
}

Object.prototype.deepClone = function _deepClone() {
  var _op = {};

  Object.defineProperty(Object.prototype, "deepClone", { enumerable: false });

  var _recursiveMethod = function (currObj, destObj) {

    for (var key in currObj) {
      if (_isPrimitive(currObj[key]) || _isNullException(currObj[key]))
        destObj[key] = currObj[key];
      else {
        destObj[key] = {};
        _recursiveMethod(currObj[key], destObj[key]);
      }
    }

  };

  _recursiveMethod(this, _op);

  return _op;
};