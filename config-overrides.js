module.exports = {
  webpack: function (config, env) {
    config.output.filename = "static/js/[name].js";
    config.output.chunkFilename = "static/js/[name].chunk.js";
    config.plugins[4].filename = "static/css/[name].css";
    return config;
  },
};
