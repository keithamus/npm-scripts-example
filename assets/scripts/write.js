var text = require('./text');
module.exports = function () {
    var heading = document.createElement('h2');
    heading.textContent = text;
    document.getElementById('container').appendChild(heading);
};
