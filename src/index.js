const expect = require('./expect');
const circus = require('./circus');

module.exports.expect = expect;
module.exports.describe = circus.describe;
module.exports.test = circus.test;
module.exports.it = circus.it;
