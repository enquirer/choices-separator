'use strict';

var extend = require('extend-shallow');
var debug = require('debug')('choices-separator');
var repeat = require('repeat-string');
var dim = require('ansi-dim');

/**
 * Separator object, used in choices arrays in prompts to create a visual break
 * between sections.
 *
 * @param {String} `line` String to use as a separator
 * @api public
 */

function Separator(line, options) {
  debug('initializing from <%s>', __filename);
  this.isSeparator = true;
  this.type = 'separator';
  if (typeof line !== 'string') {
    options = line;
    line = null;
  }

  var opts = extend({line: line}, options);
  this.prefix = opts.prefix || ' ';
  this.chars = {middot: '·', line: '─', bullet: '•'};
  if (typeof opts.line === 'string') {
    if (this.chars[opts.line]) {
      this.line = dim(this.chars[opts.line]);
    } else {
      this.line = opts.line;
    }
  } else {
    this.line = dim(repeat(this.chars.line, 8));
  }
}

/**
 * Render the separator line with a prefix.
 * @return {String}
 */

Separator.prototype.render = function() {
  return this.prefix + this.line + '\n';
};

/**
 * Helper function returning false if object is a separator
 * @param  {Object} `obj` object to test against
 * @return {Boolean} Returns false if the given object is a separator
 * @api public
 */

Separator.exclude = function(obj) {
  return obj.type !== 'separator';
};

/**
 * Stringify separator
 * @return {String} the separator display string
 * @api public
 */

Separator.prototype.toString = function() {
  return this.line;
};

/**
 * Expose `Separator`
 */

module.exports = Separator;
