var assert = require("assert")
var should = require('should')

var SmbTranslater = require("../")

describe('Samba Path Translater.', function(){
    it('SmbTranslater windows or not -> windows', function(){
        var translater = new SmbTranslater()

        var winOrNot = translater.winOrNot('¥¥10.0.0.1¥foo¥var¥');

        assert.equal(winOrNot, translater.OS_WINDOWS)
    })

    it('SmbTranslater windows or not -> not windows', function(){
        var translater = new SmbTranslater()

        var winOrNot = translater.winOrNot('smb://10.0.0.1/foo/var/');

        assert.equal(winOrNot, translater.OS_NOT_WINDOWS)
    })
})
