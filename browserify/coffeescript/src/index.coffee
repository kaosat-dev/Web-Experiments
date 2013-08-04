module.exports = ()->

Thingamagic=()->
	if not (this instanceof Thingamagic)
		return new Thingamagic()

sayHello=()->
	return("hi world")

sayHiToBob=()->
	bob = require("./otherFile")
	return "hi #{bob}"


module.exports.Thingamagic = Thingamagic
module.exports.sayHello = sayHello
module.exports.sayHiToBob = sayHiToBob
