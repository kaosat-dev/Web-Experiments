- documentation generation:
	docco -> litterate doc, not exactly a fan, too verbose , too implementation oriented
	codo -> api , coffeescript only, c/ ruby style docs (before the implementation)
	coffeedoc -> api , coffeescript only, python style (after the implementation)

	dox -> fugly syntax with coffeescript, but seems ok for api docs, very popular lots of plugins : but is it being maintained? (https://nodejsmodules.org/tags/jsdoc)
	doxx -> depends on dox, just output beautifying
	markdox -> support for js, coffee, markdown

	jsdoc -> very popular, lots of "plugins" BUT rhino required -> big meh and "Note: Although you can install JSDoc with npm, JSDoc does not currently run on Node.js." -> OUT

	ndoc -> quite liking the clear api output, docstring are meh as usual , rubydoc inspired, semi meh
	panino-docs -> quite interesting, good outputs, markdown support, links support, nodejs based, pdoc/jsdoc format unfortunatly too strict formating requirement are a big limitation, also
	requires to repeat function names in doc, and crashes for me ...

	beautiful-docs -> general info on docs


	-----cheat sheet generators
	cheatsheet.js
    cheatsheet:http://upstage.github.io/cheatsheet/#Operations
	https://npmjs.org/package/cheatsheet

	api stability indicators (à la nodejs)
	markdown

- changelog generation : works, cleaned up and extracted to its own repository at https://github.com/kaosat-dev/node-github-autoChangelog
- solve issue with jasmine-node + require coffee files from js files (without extension)
