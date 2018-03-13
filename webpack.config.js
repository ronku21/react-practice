var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            // {
            //     test: /\.js?/,
            //     include: SRC_DIR,
            //     loader: "babel-loader",
            //     plugins: ['transform-decorators-legacy' ],
            //     query: {
            //         presets: ["react", "es2015", "stage-0"]
            //     }
            // },
            {
              test: /\.jsx?$/,
              include: SRC_DIR,
              loader: 'babel',
              query: {
                cacheDirectory: true,
                plugins: ['transform-decorators-legacy' ],
                presets: ['es2015', 'stage-0', 'react']
              }
            },
            {
              test: /\.css$/,
              loader: 'style-loader!css-loader',
         }
        ]
    }
};

module.exports = config;
