/*global describe, it */
'use strict';

var assert = require('assert');
var BinBuild = require('./');
var fs = require('fs');
var path = require('path');
var rm = require('rimraf');

describe('BinBuild()', function () {
    it('should download and build source', function (cb) {
        var build = new BinBuild();
        var tmp = path.join(__dirname, 'tmp');

        build
            .src('http://www.lcdf.org/gifsicle/gifsicle-1.80.tar.gz')
            .cfg('./configure --disable-gifview --disable-gifdiff --prefix="' + tmp + '" --bindir="' + tmp + '"')
            .make('make install')
            .build(function () {
                fs.exists(path.join(tmp, 'gifsicle'), function (exists) {
                    assert(exists);
                    rm(tmp, cb);
                });
            });
    });
});