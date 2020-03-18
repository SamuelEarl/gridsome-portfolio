// I borrowed the Stylus configs from the following resources:
// * https://github.com/as3k/gridsome-starter-pug-stylus
// * https://gridsome.org/docs/assets-css/#add-tailwindcss-manually
// * https://gridsome.org/docs/assets-css/#global-preprocessor-files-ie-variables-mixins (I also referenced the Vue.js docs because they show how to configure this part for Stylus.)

// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require("path");
const purgecss = require("@fullhuman/postcss-purgecss");
const postcssPlugins = [];

if (process.env.NODE_ENV === "production") {
  postcssPlugins.push(purgecss());
}

function addStyleResource (rule) {
  rule.use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "./src/assets/stylus/main.styl"),
      ],
    });
}

module.exports = {
  siteUrl: "https://samuelearl.github.io/",
  pathPrefix: "/portfolio",
  siteName: "Samuel Earl",
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      },
      stylus: {
        test: /\.styl$/,
        loader: "stylus-loader"
      }
    }
  },

  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type => {
      addStyleResource(config.module.rule("stylus").oneOf(type));
    });
  },
};
