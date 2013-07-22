module.exports.Thingamagic = Thingamagic
module.exports.sayHello = sayHello

class Thingamagic{

	constructor(core, opts)
	{
		this.core = core;
  		this.opts = opts || {};
	}

  	danceTheRumba(speed) {
    	console.log('dancing the rumba at speed', speed);
  	}
}


class ThingamagicChild extends Thingamagic{

	constructor(core, opts)
	{
		super(core, opts);
	}

}

function sayHello()
{
	return("hi world");
}

