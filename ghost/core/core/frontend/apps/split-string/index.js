const path = require('path');

module.exports = {
    activate: function activate(ghost) {
        ghost.helperService.registerDir(path.resolve(__dirname, './lib/helpers'));
    }
};