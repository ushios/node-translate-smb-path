TranslateSmbPath
=================

[![Build Status](https://travis-ci.org/ushios/node-translate-smb-path.svg?branch=master)](https://travis-ci.org/ushios/node-translate-smb-path)

Add setting file easier

Installation
------------

    $ npm install --save translate-smb-path

Usage
-----

    var SmbTranslater = require('translate-smb-path')

### Get path

    var translater = new SmbTranslater('smb://10.0.0.1/foo/var/')
    translater.getWindowsPath() // ¥¥10.0.0.1¥foo¥var¥
    translater.getNotWindowsPath() // smb://10.0.0.1/foo/var/


Test
=====

Using mocha the command is

    $ npm test