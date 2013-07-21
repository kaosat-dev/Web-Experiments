// a convenience function, usage:
// var DbStorage = require('coscad-DbStorage')(core)
// expose the DbStorage constructor so that it is available
// in case someone wants to access the .prototype methods, etc
module.exports = function(s) {
  return new TestView();
}

function TestView() {
};

TestView.prototype.render = function(){
	
	var template = require("./tmpl/template.hbs")
	var html = template({name: 'bar'})
	console.log("template result",html);
};



module.exports.TestView = TestView;

