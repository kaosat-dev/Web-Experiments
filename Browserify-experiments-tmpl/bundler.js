var templatify = require('templatify');
var browserify = require('browserify');
// write output to `templates.js`


var bundle = browserify()
  .use(templatify('./', {
    files: ['**/*.html'],
    helpers: ['**/*.js']
  }))
  .bundle();

console.log(bundle);

//require('fs').writeFileSync('./templates.js', bundle);

// Use underscore adapater instead of handlebars default one
var bundle = browserify()
  .use(templatify('./tmpl', { adapter: templatify.adapters.underscore }))
  .bundle();


console.log(bundle);
