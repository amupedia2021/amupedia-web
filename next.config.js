const withImages = require("next-images");
module.exports = withImages();
module.exports = {
  reactStrictMode: true,
};

const path = require("path");

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};
