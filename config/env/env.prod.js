const BASE_URL = process.env.test ? "/test" : "/apis";
module.exports = {
  "process.env.baseUrl": JSON.stringify(BASE_URL) ,
};
