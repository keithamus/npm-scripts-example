var write = require('../assets/scripts/write');
var text = require('../assets/scripts/text');
var assert = require('assert');

describe('write', function () {
    var div;

    beforeEach(function () {
        div = document.createElement('div');
        div.id = 'container';
        document.body.appendChild(div);
    });

    afterEach(function () {
        div.parentElement.removeChild(div);
    });

    it('Adds an h2 to container', function () {
        write();
        var el = div.querySelector('h2');
        assert(el, 'el exists');
    });

    it('Sets text to text.js module', function () {
        write();
        var el = div.querySelector('h2');
        assert(el.textContent === text, 'el text is ' + text);
    });

});
