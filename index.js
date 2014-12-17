/*jshint node:true*/
'use strict';
function _decodeJsonPointer (pointer) {
    var result = pointer.replace(/\~1/g, '/');
    return result.replace(/\~0/g, '~');
}

module.exports = function(obj, jp) {
    var path,
        currentObj,
        curPath;
    
    if (jp === '#') {
        return obj;
    }

    if (jp.slice(0, 2) !== '#/') {
        // not a JSON pointer fragment
        return null;
    }

    path = jp.slice(2).split('/');
    currentObj = obj;
    while (path.length) {
        curPath = _decodeJsonPointer(path.shift());
        if (!Object.prototype.hasOwnProperty.call(currentObj, curPath)) {
            return null;
        }
        currentObj = currentObj[curPath];
    }

    return currentObj;
};