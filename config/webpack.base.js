const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
/* 打包体积可视化插件 */
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
/* 压缩 */
const CompressionPlugin = require("compression-webpack-plugin");
/* Css基础loader */
const CSS_BASE_LOADER = () => ["style-loader", "css-loader", "postcss-loader"];
const conf = {
  externals: {},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: { transpileOnly: true },
          },
          {
            loader: path.resolve(__dirname, "./loaders/hot.js"),
          },
          {
            loader: "eslint-loader",
            /*  options: {
              formatter: require("eslint-friendly-formatter")
            } */
          },
        ],
        include: [path.resolve(process.cwd(), "src")], // 指定检查的目录
        /* options: {
          // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
          formatter: require("eslint-friendly-formatter") // 指定错误报告的格式规范
        } */
      },
      {
        test: /.css$/,
        use: CSS_BASE_LOADER,
      },
      {
        test: /\.s(a|c)ss$/,
        use: [...CSS_BASE_LOADER(), "sass-loader"],
      },
      {
        test: /.less$/,
        use: [
          ...CSS_BASE_LOADER(),
          {
            loader: "less-loader",
            options: {
              strictMath: true,
              noIeCompat: true,
            },
          },
        ],
      },
      // 图片
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      // 字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      // html模板
      {
        test: /.html$/,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(process.cwd(), "src"),
      vue$: "vue/dist/vue.esm.js",
      utils: path.resolve(process.cwd(), "src/utils/index.ts"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: path.resolve(process.cwd(), "public/index.html"),
    }),
    new CompressionPlugin({
      test: /\.(js|css|html|svg|webp|png)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};

// 可视化打包文件插件
if (process.env.buildvisual) {
  conf.plugins.push(new BundleAnalyzerPlugin());
}
module.exports = conf;
