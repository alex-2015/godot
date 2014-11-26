/*
 * expire-test.js: Tests for the Expire reactor stream.
 *
 * (C) 2012, Charlie Robbins, Jarrett Cruger, and the Contributors.
 *
 */

var assert = require('assert'),
    vows = require('vows'),
    godot = require('../../lib/godot'),
    macros = require('../macros').reactor;

vows.describe('godot/reactor/expire').addBatch({
  "Godot aggregate": {
    "ttl 100ms": {
      "sent 200ms": macros.shouldExpireSync(
        godot
          .reactor()
          .expire(100),
        'health',
        200
      ),
      "sent 50ms": macros.shouldNotExpireSync(
        godot
          .reactor()
          .expire(100),
        'health',
        50
      )
    }
  }
}).export(module);