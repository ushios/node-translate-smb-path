

var TranslateSmbPath = function(path){
    var _this = this

    this.OS_WINDOWS = 'windows'
    this.OS_NOT_WINDOWS = 'not_windows'

    this.winOrNot = function(path) {

        if (path.match(/^¥¥/)) {
            return this.OS_WINDOWS
        }

        if (path.match(/^smb:\/\//)) {
            return this.OS_NOT_WINDOWS
        }


    }
}

// Exports
module.exports = TranslateSmbPath