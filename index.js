'use strict';

var debug = require('debug')('choices-separator');
var strip = require('strip-color');
var dim = require('ansi-dim');

/**
 * Separator object, used in choices arrays in prompts to create a visual break
 * between sections.
 *
 * @param {String} `line` String to use as a separator
 * @api public
 */

function Separator(options) {
  debug('initializing from <%s>', __filename);
  this.isSeparator = true;
  this.type = 'separator';

  if (typeof options === 'string') {
    options = { line: options };
  }

  this.options = options || {};
  this.prefix = ' ';

  if (typeof this.options.prefix === 'string') {
    this.prefix = this.options.prefix;
  }

  if (typeof this.options.line === 'string') {
    this.line = this.options.line;
  } else {
    this.line = dim('────────');
  }
}

/**
 * Returns the `separator.line` stripped of ansi styling.
 * @return {String}
 */

Separator.prototype.raw = function() {
  return strip(this.line);
};

/**
 * Render `separator.prefix` plus `separator.line`.
 * @return {String}
 */

Separator.prototype.render = function() {
  return this.prefix + this.line + '\n';
};

/**
 * Returns false if the given object is a separator.
 * @param  {Object} `choice` object to test against
 * @return {Boolean} Returns false if the given object is a separator
 * @api public
 */

Separator.exclude = function(choice) {
  return choice.type !== 'separator';
};

/**
 * Stringify separator
 * @return {String} Returns the `separator.line` string
 * @api public
 */

Separator.prototype.toString = function() {
  return this.line;
};

/**
 * Expose `Separator`
 */

module.exports = Separator;
