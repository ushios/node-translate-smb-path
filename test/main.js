var assert = require("assert")
var should = require('should')

var SmbTranslater = require("../")

describe('Samba Path Translater.', function(){
    it('SmbTranslater windows or not -> windows', function(){
        var translater = new SmbTranslater('¥¥10.0.0.1¥foo¥var¥')

        translater.isWindows.should.be.ok
    })

    it('SmbTranslater windows or not -> windows 2', function(){
        var translater = new SmbTranslater('\\\\10.0.0.1\\foo\\var\\')

        translater.isWindows.should.be.ng
    })

    it('SmbTranslater windows or not -> not windows', function(){
        var translater = new SmbTranslater('smb://10.0.0.1/foo/var/')

        translater.isWindows.should.be.ng
    })

    it('SmbTranslater windows or not -> failure', function(){

        try {
            var translater = new SmbTranslater('this is only string')
        } catch(ex) {
            true.should.be.ok

            return true
        }

        assert.equal('aaa', 'bbb')
    })

    it('SmbTranslater get not windows path', function(){
        var translater = new SmbTranslater('¥¥10.0.0.1¥foo¥var¥')

        assert.equal(translater.getNotWindowsPath(), 'smb://10.0.0.1/foo/var/')
    })

    it('SmbTranslater get not windows path 2', function(){
        var translater = new SmbTranslater('\\\\10.0.0.1\\foo\\var\\')

        assert.equal(translater.getNotWindowsPath(), 'smb://10.0.0.1/foo/var/')
    })

    it('SmbTranslater get windows path', function(){
        var translater = new SmbTranslater('smb://10.0.0.1/foo/var/')

        assert.equal(translater.getWindowsPath(), '¥¥10.0.0.1¥foo¥var¥')
    })
})
