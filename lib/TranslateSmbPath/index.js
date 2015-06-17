
var TranslateSmbPath = function(path){
    var _this = this

    this.OS_WINDOWS = 'windows'
    this.OS_NOT_WINDOWS = 'not_windows'
    this.isWindows = undefined

    this.windowsPath = null
    this.notWindowsPath = null

    this.winOrNot = function(path) {

        if (path.match(/^¥¥/)) {
            _this.isWindows = true
            return _this.OS_WINDOWS
        }

        if (path.match(/^\\\\/)) {
            _this.isWindows = true
            return _this.OS_WINDOWS
        }

        if (path.match(/^smb:\/\//)) {
            _this.isWindows = false
            return _this.OS_NOT_WINDOWS
        }

        throw new Error('oops.');
    }

    this.getNotWindowsPath = function() {
        if (_this.notWindowsPath != null) {
            return _this.notWindowsPath
        }

        var path = _this.windowsPath

        if (path.match(/^¥¥/)) {
            path = path.replace(/^¥¥/, "smb://")
            path = path.replace(/¥/gi, "/")
        } else if (path.match(/^\\\\/)){
            path = path.replace(/^\\\\/, "smb://")
            path = path.replace(/\\/gi, "/")
        }

        _this.notWindowsPath = path

        return _this.notWindowsPath
    }

    this.getWindowsPath = function() {
        if(_this.windowsPath != null) {
            return _this.windowsPath
        }

        var path = _this.notWindowsPath

        path = path.replace(/smb:\/\//, "¥¥")
        path = path.replace(/\//gi, "¥")

        _this.windowsPath = path

        return _this.windowsPath
    }

    this.setWindowsPath = function(path) {
        _this.windowsPath = path
    }

    this.setNotWindowsPath = function(path) {
        _this.notWindowsPath = path
    }


    this.winOrNot(path)

    if (this.isWindows) {
        this.setWindowsPath(path)
    } else {
        this.setNotWindowsPath(path)
    }
}

// Exports
module.exports = TranslateSmbPath