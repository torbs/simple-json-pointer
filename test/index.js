var expect      = require('chai').expect,
    jsonPointer = require('../index.js');

describe('SimpleJSONPointer', function () {
    it('should find root', function () {
        var source = {
            a: true,
            b: 'test'
        };
        expect(jsonPointer(source, '#/')).to.equal(source);
    });

    it('should find a root property', function () {
        var source = {
            a: true,
            b: 'test'
        };
        expect(jsonPointer(source, '#/a')).to.equal(true);
        expect(jsonPointer(source, '#/b')).to.equal('test');
    });

    it('should return null if the path is not in the object', function () {
        var source = {};
        expect(jsonPointer(source, '#/c')).to.equal(null);
    });

    it('should find a deep property', function () {
        var source = {
            a: {
                b: {
                    c: 'test'
                }
            }
        };

        expect(jsonPointer(source, '#/a/b/c')).to.equal('test');
    });
});