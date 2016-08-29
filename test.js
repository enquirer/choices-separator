'use strict';

require('mocha');
var assert = require('assert');
var stripColor = require('strip-color');
var Separator = require('./');

describe('Separator', function () {
  it('should set a default', function () {
    var sep = new Separator();
    assert.equal(stripColor(sep.toString()), '────────');
  });

  it('should set user input as separator', function () {
    var sep = new Separator('foo bar');
    assert.equal(stripColor(sep.toString()), 'foo bar');
  });

  it('instances should be stringified when appended to a string', function () {
    var sep = new Separator('foo bar');
    assert.equal(stripColor(String(sep)), 'foo bar');
  });

  it('should expose a helper function to check for separator', function () {
    assert(Separator.exclude({}));
    assert(!Separator.exclude(new Separator()));
  });

  it('give the type \'separator\' to its object', function () {
    var sep = new Separator();
    assert.equal(sep.type, 'separator');
  });
});
