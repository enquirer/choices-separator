'use strict';

require('mocha');
var assert = require('assert');
var stripColor = require('strip-color');
var Separator = require('./');

describe('Separator', function () {
  it('should use the default line', function () {
    var sep = new Separator();
    assert.equal(stripColor(sep.toString()), '────────');
  });

  it('should set "type" property to "separator"', function () {
    var sep = new Separator();
    assert.equal(sep.type, 'separator');
  });

  it('should render separator.prefix + separator.line', function () {
    var sep = new Separator();
    assert.equal(sep.render(), ' \u001b[2m────────\u001b[22m\n');
  });

  it('should support an empty string as separator.line', function () {
    var sep = new Separator({line: ''});
    assert.equal(sep.render(), ' \n');
  });

  it('should support an empty string as separator.prefix', function () {
    var sep = new Separator({prefix: ''});
    assert.equal(sep.render(), '\u001b[2m────────\u001b[22m\n');
  });

  it('should support passing separator.line as a string', function () {
    var sep = new Separator('foo bar');
    assert.equal(stripColor(sep.line), 'foo bar');
  });

  it('should support passing separator.line on an options object', function () {
    var sep = new Separator({line: 'foo bar'});
    assert.equal(stripColor(sep.line), 'foo bar');
  });

  it('should use the given prefix', function () {
    var sep = new Separator({line: 'foo bar', prefix: '~~~~'});
    assert.equal(sep.render(), '~~~~foo bar\n');
  });

  it('should take an instance of Separator as options', function () {
    var foo = new Separator('foo bar');
    var bar = new Separator(foo);
    assert.equal(stripColor(bar.line), 'foo bar');
  });

  it('should expose a .toString method for getting separator.line', function () {
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
});
