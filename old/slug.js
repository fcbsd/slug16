var bespoke = require('./bespoke'),
	classes = require('./bespoke-classes'),
	bullets = require('./bespoke-bullets'),
	keys = require('./bespoke-keys'),
	touch = require('./bespoke-touch'),
	progress = require('./bespoke-progress');

var deck= bespoke.from('#presentation', [
  classes(),
  keys(),
  bullets(),
  touch(),
  progress()
]);
