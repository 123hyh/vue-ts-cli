const BASE_URL = JSON.stringify(process.env.test) ? "/test" : "/apis";
module.exports = {
  "process.env.baseUrl": BASE_URL,
};
