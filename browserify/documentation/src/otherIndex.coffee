###*
 * Escape the given `html`.
 *
 * h3 Examples:
 *
 *     utils.escape('<script></script>')
 *     // => '&lt;script&gt;&lt;/script&gt;'
 *
 * @param {String} html string to be escaped
 * @return {String} escaped html
 * @api public
###
class Toto
	constructor:->
		@truc = machin

	myMethod:=>
		console.log("right here")

class BlaBla extends Toto
	constructor:->
		super


toto = new Toto()

blabla = new BlaBla()


###*
 * Create an array of all the right files in the source dir
 * @param  {String}   source path
 * @param  {Object}   options
 * @param  {Function} callback
 * @return {Array} an array of string path
###
collectFiles = (source, options, callback) ->
	console.log("pouet")

