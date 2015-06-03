var test = require('tap').test;
var v1 = require('less-1');
var v2 = require('less-2');

var src = '@color:#000;html{color:@color}';
var opts = { filename: 'ugh.less', compress: true };
var output = 'html{color:#000}';

test('v1 is truly v1', function (t) {
  var parser = new v1.Parser(opts);
  parser.parse(src, function (err, tree) {
    t.equal(tree.toCSS(opts), output);
    t.end();
  });
});

test('v2 is truly v2', function (t) {
  v2.render(src, opts, function (err, tree) {
    t.equal(tree.css, output);
    t.end();
  });
});
