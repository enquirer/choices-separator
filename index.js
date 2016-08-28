'use strict';

var dim = require('ansi-dim');

/**
 * Separator object
 * Used to space/separate choices group
 * @constructor
 * @param {String} line   Separation line content (facultative)
 */

function Separator(line) {
  this.isSeparator = true;
  this.type = 'separator';
  this.line = dim(line || new Array(15).join('─'));
}

/**
 * Helper function returning false if object is a separator
 * @param  {Object} obj object to test against
 * @return {Boolean}    `false` if object is a separator
 */

Separator.exclude = function(obj) {
  return obj.type !== 'separator';
};

/**
 * Stringify separator
 * @return {String} the separator display string
 */

Separator.prototype.toString = function() {
  return this.line;
};

/**
 * Expose `Separator`
 */

module.exports = Separator;
