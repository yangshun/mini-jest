const expect = require('./expect');
const circus = require('./circus');

module.exports.expect = expect;
module.exports.run = circus.run;
module.exports.describe = circus.describe;
module.exports.test = circus.test;
module.exports.it = circus.it;
