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
