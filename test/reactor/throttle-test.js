/*
 * throttle-test.js: Tests for the Throttle reactor stream.
 *
 * (C) 2012, Charlie Robbins, Jarrett Cruger, and the Contributors.
 *
 */

var assert = require('assert'),
    vows = require('vows'),
    godot = require('../../lib/godot'),
    macros = require('../macros').reactor;

vows.describe('godot/reactor/throttle').addBatch({
  "Godot change": {
    "max": macros.shouldEmitDataSync(
      godot
        .reactor()
        .throttle(10),
      'large-dataset',
      10
    ),
    "options": macros.shouldEmitDataSync(
      godot
        .reactor()
        .throttle({ max: 10 }),
      'large-dataset',
      10
    )
  }
}).export(module);