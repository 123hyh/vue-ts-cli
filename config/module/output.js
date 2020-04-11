const path = require("path");
module.exports = env => ({
  filename: `js/[name]${env === "development" ? "" : ".[chunkhash:16]"}.js`,
  path: path.resolve(process.cwd(), "dist"),
  chunkFilename: "js/[name].[chunkhash:16].js",
});
