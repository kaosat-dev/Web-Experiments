/** 
*Module documentation*/

/** **/
module.exports.Thingamagic = Thingamagic;
module.exports.sayHello = sayHello;
module.exports.Face3 = Face3;
/**
 * A function that says hello
 * 
 * ### Examples
 *
 *     utils.escape('<script></script>')
 *     // => '&lt;script&gt;&lt;/script&gt;'
 *
 * @param {Int} numberOfRepeats  number of times to repeat message
 * @param {String} toto  text to repeat 
 * @return {String} repetated text
 * @api public
 * @deprecated this thing is deprecated
 * @author kpouer
 **/
function sayHello(numberOfRepeats, toto)
{
	return("hi world");
};


/**
 * A function that says nothing
 * 
 * @function sayNothing
 * @return {String} nothing
 * @api public
 * @deprecated this thing is deprecated
 * @author kpouer
 **/
function sayNothing()
{
	return("");
};


/**
 * Thingamagic object proto
 * @class Thingamagic
 **/
function Thingamagic(core, opts)
{
};

/**
 * @class
 **/
function Owl(core, opts)
{
};


/**
 * Template used to produce the documentation for filter `:code`
 * @type {String} template string
 */
function makeTemplate()
{
};

/**
 * Something
 * @type {String} template string
 */
Thingamagic.sdf = "horror"; 

/**
 * Template used to produce the documentation
 * @type {String} template string
 */
compile.tpl = fs.readFileSync(path.resolve(__dirname, '../views/template.jade')).toString();


/**
 * Private stuff, move along
 * @private
 * @param {Object} symbol
 * @return {Object}
 */
function _mapSymbol(symbol){
  symbol.tags = _compact(symbol.tags);
}

/**
 * Bla bla 
 * 
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
function Face3( a, b, c, normal, color, materialIndex ) {

	this.a = a;
	this.b = b;
	this.c = c;

	this.normal = normal instanceof THREE.Vector3 ? normal : new THREE.Vector3();
	this.vertexNormals = normal instanceof Array ? normal : [ ];

	this.color = color instanceof THREE.Color ? color : new THREE.Color();
	this.vertexColors = color instanceof Array ? color : [];

	this.vertexTangents = [];

	this.materialIndex = materialIndex !== undefined ? materialIndex : 0;

	this.centroid = new THREE.Vector3();

};

Face3.prototype = {

	constructor: Face3,

	/**
 	* clone current face instance
    *
 	* @function
	*/
	clone: function () {

		var face = new Face3( this.a, this.b, this.c );

		face.normal.copy( this.normal );
		face.color.copy( this.color );
		face.centroid.copy( this.centroid );

		face.materialIndex = this.materialIndex;

		var i, il;
		for ( i = 0, il = this.vertexNormals.length; i < il; i ++ ) face.vertexNormals[ i ] = this.vertexNormals[ i ].clone();
		for ( i = 0, il = this.vertexColors.length; i < il; i ++ ) face.vertexColors[ i ] = this.vertexColors[ i ].clone();
		for ( i = 0, il = this.vertexTangents.length; i < il; i ++ ) face.vertexTangents[ i ] = this.vertexTangents[ i ].clone();

		return face;

	}

};
