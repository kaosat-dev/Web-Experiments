;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
var Thingamagic, sayHello, sayHiToBob;

module.exports = function() {};

Thingamagic = function() {
  if (!(this instanceof Thingamagic)) {
    return new Thingamagic();
  }
};

sayHello = function() {
  return "hi worlxd";
};

sayHiToBob = function() {
  var bob;
  bob = require("./otherFile").bob;
  return "hi " + bob;
};

module.exports.Thingamagic = Thingamagic;

module.exports.sayHello = sayHello;

module.exports.sayHiToBob = sayHiToBob;


console.log(sayHiToBob());

},{"./otherFile":2}],2:[function(require,module,exports){
var TestClass, bob, instrument;

console.log("hi there");

instrument = require("./thirdFile").bazinga;

console.log("playing the " + instrument);

bob = 25;

module.exports.bob = bob;

TestClass = (function() {
  function TestClass() {}

  return TestClass;

})();


},{"./thirdFile":3}],3:[function(require,module,exports){
console.log("I am a js file");
bazinga = "ukulele";
module.exports.bazinga = bazinga;

},{}]},{},[1])
;