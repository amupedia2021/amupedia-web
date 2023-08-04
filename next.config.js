const withImages = require("next-images");
module.exports = withImages();
module.exports = withImages({
  webpack(config, options) {
    return config
  }
});

const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};
