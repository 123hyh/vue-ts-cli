const path = require("path");
module.exports = env => ({
  filename: `[name]${env === "development" ? "" : ".[chunkhash:16]"}.js`,
  path: path.resolve(process.cwd(), "dist"),
  chunkFilename: "[name].[chunkhash:16].js",
});
