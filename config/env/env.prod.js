const yargs = require('yargs')
const BASE_URL = yargs.argv.test ? "/test" : "/apis";
module.exports = {
  "process.env.baseUrl": JSON.stringify(BASE_URL) ,
};
